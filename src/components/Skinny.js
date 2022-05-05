import React from 'react';
import Card from './Card.js';
import '../styles/skinny.css';
const Skinny = ({cards}) => {
  return (
    <>
    {   
            cards.map(function(card){
            // returns Nathan, then John, then Jane
            return <Card card={card}/>;
            })
        }
    </>
  )
}

export default Skinny