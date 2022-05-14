import React from 'react';
import {Amplify} from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut, AmplifySignUp } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../aws-exports';
import '../App.css';

Amplify.configure(awsconfig);

const AuthStateApp = () => {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <div>Hello, {user.username}{console.log(user)}</div>
      <AmplifySignOut />
    </div>
  ) : (
    <AmplifyAuthenticator initialAuthState="signup">
      <AmplifySignUp/>
    </AmplifyAuthenticator>
  );
};

export default AuthStateApp;

