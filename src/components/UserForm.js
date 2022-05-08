import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormCollegeDetails from './FormCollegeDetails';
import SectionDivider from './SectionDivider'
import CashBack from './CashBack'
import Confirm from './Confirm';

import Success from './Success';

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    reason: '',
    college:'',
    history:'',
    rebuild:'',
    Supermarkets:'',
    Streaming:'',
    Rideshare:'',
    Gas:'',
    Everything: '',
    Dining:'',
    Drugstore:'',
    Wholesale:'',
    Amazon:'',
    Paypal:'',
    Target:'',
    Walmart:'',
    'Home Improvement':'',
    'Hotel Points':'',
    'Car Rental Points':'',
    'Fly Southwest':'',
    'Fly American':'',
    'Fly Delta':'',
    'Fly United':'',
    'Free Checked Bag':'',
    'Uber Credit':'',
    'Free TSA Precheck':'',
    'Priority Pass':'',
    'Stay at Marriot':'',
    'Stay at Hilton':'',
    'Priority Boarding':''
  };
  

  

  dividerOne = `We are now going to ask you about your favorite types of rewards. 
  Using your input we will tailor a cashback, and travel cards designed to
  earn you maximum rewards!`;

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e =>{
    console.log(input)
    e.target.value==undefined?
    this.setState({ [input]: parseInt(e.target.innerText)}):
    this.setState({ [input]: e.target.value });
  };

  render() {
    console.log(Object.keys(this.state))
    const { step,...rest } = this.state;
    const values = rest

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormCollegeDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <SectionDivider
            message={this.dividerOne}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        console.log(this.state)
        return (
          <CashBack
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
          rewardType={0}
          />
        )
        case 5:
        console.log(this.state)
        return (
          <CashBack
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
          rewardType={1}
          />
        )

      case 6:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            rewardType={1}

          />
        );
        
      case 7:
      return <Success />; 
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;
