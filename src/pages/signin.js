import React from 'react';
import {Amplify, Auth, API} from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut, AmplifySignUp } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../aws-exports';
Amplify.configure({  API: {
    endpoints: [
      {
        name: "AI Customer Service API",
        endpoint:
          "https://wa7amainke.execute-api.us-east-1.amazonaws.com/dev",
      },
    ],
  }});


const AuthStateApp = ( {user, setUser}) => {
  const [authState, setAuthState] = React.useState();
  const apiName = "AI Customer Service API";
  const path = "/chatbot";
  

  const onClick = async () => 
    {   
        let user = await Auth.currentAuthenticatedUser();
        let token = user.signInUserSession.idToken.jwtToken;
        console.log(token)
        let request = {
            headers: {"Authorization": token},
            body: 
                JSON.stringify({messages: [{
                  type: 'unstructured',
                  unstructured: {
                    text: "Hi im paul"
                  }
                }]})
            
        };
        API.post(apiName,path ,request).then((res) => console.log(res));
        

    };

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    
    <div className="App">

        <button
        onClick={() => onClick()}
        className="btn btn-primary">
        Make a Call
        </button>
      <div>Hello, {user.username}{console.log(user)}</div>
      <AmplifySignOut />
    </div>
  ) : (
    <AmplifyAuthenticator>
      <AmplifySignUp/>
    </AmplifyAuthenticator>
  );
};

export default AuthStateApp;