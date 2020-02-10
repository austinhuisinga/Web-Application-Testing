import React, { useState } from 'react';

const Dashboard = (props) => {
  const { strikes, setStrikes, balls, setBalls } = props;

  const handleBall = e => {
    if(balls < 3) {
      setBalls(balls + 1)
    } else {
      setBalls(0);
      setStrikes(0);
    }
  }

  const handleStrike = e => {
    if(strikes < 2) {
      setStrikes(strikes + 1)
    } else {
      setStrikes(0);
      setBalls(0);
    }
  }

  const handleFoul = e => {
    if(strikes < 2) {
      setStrikes(strikes + 1);
    }
  }

  const handleHit = e => {
    setStrikes(0);
    setBalls(0);
  }

  return(
    <div>
      <button
        onClick={handleBall}
        className='buttons_ball'
      >
        Ball
      </button>
    
      <button 
        onClick={handleStrike}
        className='buttons_strike'
      >
        Strike
      </button>
    
      <button 
        onClick={handleFoul}
      >
        Foul
      </button>
    
      <button 
        onClick={handleHit}
      >
        Hit
      </button>
    </div>
  
  )
}

export default Dashboard;