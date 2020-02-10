import React from 'react';

const Display = (props) => {
  return (
    <div className='display-container'>
      <h2>Count</h2>
      <div className='balls-count'>Balls: {props.balls}</div>
      <div className='strikes-count'>Strikes: {props.strikes}</div>

    </div>
  )
}

export default Display;