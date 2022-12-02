import React from 'react';

function Visionbox(props) {
  return (
    <div className='p-box'>
        <img src ={props.image} alt='product'/>
        <p>{props.name}</p>
        <a href='#' className='price'>{props.price}</a>
        <a href='#' className='buy-btn'> Click Here</a>
        
      
    </div>
  )
}

export default Visionbox;
