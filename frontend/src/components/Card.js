import React from 'react'
import '../styles/skinny.css'
const Card = ({card}) => {
    return (
<div style={{margin:"10px"}} className='skinny row' >
        <div className='col-md-9'>
        <h4>The Skinny on the: {card.title}</h4>
        <br></br>
        {   
            card.summary.map(function(s){
            // returns Nathan, then John, then Jane
            return <li> {s}  </li>
            })
        }
        </div>
        <div className='col-md-3'>
        <img style={{width:"250px", "max-height":"100%"}}src={card.img} alt="a credit card"></img>
        </div>
</div>
  )
}

export default Card