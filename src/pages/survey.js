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
      <UserForm/>
    </div>
  );
};

export default Survey;
