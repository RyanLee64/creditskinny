import React, { Component } from 'react';
import { Auth, API } from 'aws-amplify';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { RadioGroup, FormControl, FormLabel, Radio,FormControlLabel, DialogTitle, DialogContent, DialogContentText,DialogActions, } from '@material-ui/core';

export class Quiz extends Component {

  handleSubmit = async e => {
    e.preventDefault();
    if(this.props.correctAnswer != this.state.userAnswer){
        await this.setState(state => {
            let {step, ...rest} = state
            return Object.assign(rest, {step: "2"})
        })
    }
    else{
        //TODO: add API hook for PUT User
        const user = await Auth.currentAuthenticatedUser();
        let token = user.signInUserSession.idToken.jwtToken;
        let p = this.state.profile;
        p.currentModule = (parseInt(p.currentModule)+1).toString()
        console.log(p)
        let request = {
            headers: {"Authorization": token},
            body: 
                p
            
          };
        let mod = await API.put( this.props.apiName, "/user/progress/"+p.currentModule,request)
        console.log(p)
        this.props.setNextModule(this.props.nextModule+"1")
    }
    
  };

  state = this.props;

  createRadios = () => {
    return this.state.answers.map(function(each){return(<FormControlLabel value={each} control={<Radio />} label={each} />
    )}) 
  }

  handleRadio =async e => {
      console.log(this.props)
      console.log(e.target)
      await this.setState(state => {let {userAnswer, ...rest} = state
        return Object.assign(rest, {userAnswer: e.target.value})})
      
        console.log(this.state)
  };

  handleClose = async e => {
      await this.setState(state => {
          let {step, ...rest} = state
          return Object.assign(rest, {step: "1"})
      })
  };

  
  render() {
    const { values, handleChange } = this.props;
    
    switch (this.state.step) {
        case "1":
            return (

                <MuiThemeProvider>
                  <>

                   {  <Dialog
                      open
                      fullWidth
                      maxWidth='sm'
                    >
                      <form onSubmit={this.handleSubmit}>
                      <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">{this.props.question}</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue=""
              name="radio-buttons-group"
              onChange={this.handleRadio}
            >
            {this.createRadios()}

              </RadioGroup >
              <Button
                  color="primary"
                  variant="contained"
                  type="submit"
              >Submit</Button>
              <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => this.props.setVisible("0")}
              >Exit</Button>
          
              </FormControl>
              </form>
                    </Dialog> }
                  </>
                </MuiThemeProvider>
              );
        case "2":
            return (
                <Dialog
        open
      >
        <DialogTitle id="alert-dialog-title">
          {"Incorrect Answer"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            That answer was not correct. Try again in order to move ahead to the next module
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose}>Try Again</Button>
        </DialogActions>
      </Dialog>
            );

    }

    
  }
}

export default Quiz;