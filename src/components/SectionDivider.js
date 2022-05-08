import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Select, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';
import { Input, MenuItem, InputLabel } from '@material-ui/core';

export class SectionDivider extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { message } = this.props;
    return (
      <MuiThemeProvider>
        <>
        <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
        <DialogTitle>
          {"Time to earn you free points!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
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

export default SectionDivider;