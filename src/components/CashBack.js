import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Select, DialogTitle, DialogContent  } from '@material-ui/core';
import { Input, MenuItem, InputLabel, Slider } from '@material-ui/core';

export class CashBack extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  constructor(props) {
    super(props);
    
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };


  

  render() {
    const handlePlayersChange = (event, newValue) => {
        handleChange('reason', newValue)
      };
    
    const { values, handleChange, rewardType} = this.props;
    const cashBackCatagories = ['Supermarkets','Streaming','Rideshare','Gas','Everything','Dining','Drugstore','Wholesale','Amazon','Paypal','Target', 'Walmart','Home Improvement']
    const travelCatagories = ['Hotel Points', 'Car Rental Points', 'Fly Southwest', 'Fly American', 'Fly Delta', 'Fly United', 'Free Checked Bag', 'Uber Credit', 'Free TSA Precheck', 'Priority Pass', 'Stay at Marriot', 'Stay at Hilton', 'Priority Boarding']

    const sliders = rewardType==0 ? cashBackCatagories.map((catagory) => 
    <>
    <InputLabel >{catagory}</InputLabel>
    <Slider
    aria-label="Temperature"
    defaultValue={0}
    valueLabelDisplay="auto"
    step={1}
    marks
    min={1}
    max={11}
    size='small'
    onChangeCommitted={handleChange(catagory)}
    />
    </> ) :
    travelCatagories.map((catagory) => 
    <>
    <InputLabel >{catagory}</InputLabel>
    <Slider
    aria-label="Temperature"
    defaultValue={0}
    valueLabelDisplay="auto"
    step={1}
    marks
    min={1}
    max={13}
    size='small'
    onChangeCommitted={handleChange(catagory)}
    />
    </> );

    const title = rewardType==0? "Rank the following cash back catagories from 11 (most important) to 0 (least important)":
    "Rank the following travel rewards from 13 (most important) to 0 (least important)"
    return (
      <MuiThemeProvider>
        <>
       
        <Dialog
            open
            fullWidth
            maxWidth='lg'
            
          >
            <DialogTitle>{title}</DialogTitle>
            {sliders}
                
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

export default CashBack;
