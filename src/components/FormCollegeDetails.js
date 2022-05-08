import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Select, DialogTitle, DialogContent  } from '@material-ui/core';
import { Input, MenuItem, InputLabel } from '@material-ui/core';

export class FormCollegeDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

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
        <DialogTitle>Tell us a bit about your credit experience</DialogTitle>
                <InputLabel >Enrolled in or Graduated From College?</InputLabel>
                <Select
                  value={values.college}
                  onChange={handleChange('college')}
                  input={<Input id="college" />}
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
                <br></br>
                <InputLabel >Do you already have one or more credit cards?</InputLabel>
                <Select
                  value={values.history}
                  onChange={handleChange('history')}
                  input={<Input id="existing-credit" />}
                >
                  
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
                <br></br>

                <InputLabel >If you already have a card is your credit score below 600?</InputLabel>
                <Select
                  value={values.rebuild}
                  onChange={handleChange('rebuild')}
                  input={<Input id="low-credit" />}
                >
       
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormCollegeDetails;
