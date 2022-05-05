import React from 'react';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
Amplify.configure(awsconfig);


const SignUp = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>Sign Up</h1>
    </div>
  );
};

export default withAuthenticator(SignUp);
