import React from 'react';
import { Player } from 'video-react';

const ModulePlayer = ({source}) => {
    return (
    <Player
      playsInline
      poster="https://creditskinnymodules.s3.amazonaws.com/logo.png"
      src={source}
    />
  );
};

export default ModulePlayer
