import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { Auth, API } from 'aws-amplify';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  makeApiCall =  async values =>  {
    const user = await Auth.currentAuthenticatedUser();
    let token = user.signInUserSession.idToken.jwtToken;
    let username = user.username
    let final = Object.assign(values, {"username":username})
    const path = "/user/uploadsurvey";
    console.log(user);
    let request = {
      headers: {"Authorization": token},
      body: 
          JSON.stringify(final)
      
    };
    let p = await API.post(this.props.apiName,path ,request)
  };

  render() {
    this.makeApiCall(this.props.values);
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <h1>Thank You For Your Submission</h1>
            <p>Navigate to your Card Vault to see your reccomendations!</p>
            <Button
              href="/profile"
              color="primary"
              variant="contained"
            >Go Back to Profile</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
