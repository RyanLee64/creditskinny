import React from 'react';
import { Player } from 'video-react';

const ModulePlayer = ({source}) => {
    return (
    <Player
      playsInline
      poster="/assets/poster.png"
      src={source}
    />
  );
};

export default ModulePlayer
