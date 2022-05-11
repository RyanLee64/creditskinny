import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { RadioGroup, FormControl, FormLabel, Radio,FormControlLabel } from '@material-ui/core';

export class Quiz extends Component {

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.correctAnswer != this.state.userAnswer){
        alert("wrong answer")
    }
    
  };

  state = this.props;
  
  handleRadio =async e => {
      console.log(this.props)
      console.log(e.target)
      await this.setState(state => {return {apiName: state.apiName, answers: state.answers, userAnswer: e.target.value, correctAnswer: state.correctAnswer}})
        console.log(this.state)
  }

  
  render() {
    const { values, handleChange } = this.props;
    
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <form onSubmit={this.handleSubmit}>
            <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
    onChange={this.handleRadio}
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup >
    <Button
        color="primary"
        variant="contained"
        type="submit"
    >Submit</Button>

    </FormControl>
    </form>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Quiz;