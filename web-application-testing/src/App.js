import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

import './App.css';

export const addStrike = currentStrikes => {
  return currentStrikes + 1;
}

export const addBall = currentBalls => {
  return currentBalls + 1;
}

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  return (
    <div className="App">
      <h1 className='greet'>Baseball</h1>
      <Dashboard strikes={strikes} balls={balls} setStrikes={setStrikes} setBalls={setBalls} />
      <Display strikes={strikes} balls={balls} setStrikes={setStrikes} setBalls={setBalls} /> 

    </div>

  );
}

export default App;
