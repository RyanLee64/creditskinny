import React from 'react';
import UserForm from '../components/UserForm';

const Survey = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>Survey</h1>
      <UserForm/>
    </div>
  );
};

export default Survey;
