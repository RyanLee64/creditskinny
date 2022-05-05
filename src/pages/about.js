import React from 'react';

const About = (user) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>About {JSON.stringify(user).substring(0,20)}</h1>
    </div>
  );
};

export default About;
