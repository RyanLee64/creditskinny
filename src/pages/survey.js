import React from 'react';
import UserForm from '../components/UserForm';

const Survey = ({apiName}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <UserForm apiName={apiName}/>
    </div>
  );
};

export default Survey;
