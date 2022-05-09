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
  makeApiCall =  async values => {
    const user = await Auth.currentAuthenticatedUser();
    let token = user.signInUserSession.idToken.jwtToken;
    const apiName = "AI Customer Service API 21";
    const path = "/survey";
    console.log(user);
    let request = {
      headers: {"Authorization": token},
      body: 
          JSON.stringify(values)
      
    };
    let p = await API.post(apiName,path ,request)
    let body = JSON.parse(p.body)
    console.log("from success")
    console.log(p)
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
            <p>You will get an email with further instructions.</p>
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
