import React, {useEffect} from 'react';

const Services = ({user}) => {

  return (
    
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>Services and {JSON.stringify(user).substring(0,20)}</h1>
      
    </div>
  );
};

export default Services;
