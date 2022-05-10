import React from 'react';
import {Amplify, Auth, API} from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut, AmplifySignUp } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { useNavigate } from "react-router-dom";
import awsconfig from '../aws-exports';



const AuthStateApp = ( {user, setUser, apiName}) => {
  const [authState, setAuthState] = React.useState();
  let navigate = useNavigate();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    navigate("/profile")

  ) : (
    <AmplifyAuthenticator>
      <AmplifySignUp/>
    </AmplifyAuthenticator>
  );
};

export default AuthStateApp;