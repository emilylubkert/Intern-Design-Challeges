import React from 'react';
import { InsultProvider } from '../context/insults';
import InsultDisplay from './InsultDisplay';
import './App.css';

function App() {
  return (
    <InsultProvider>
      <div className='App'>
      <div className='header-container'>
        <h1 className='tab'>Top Insults</h1>
        <h1 className='tab'>New Insults</h1>
        <h1 className='tab'>Favorites</h1>
      </div>
        <InsultDisplay />
      </div>
    </InsultProvider>
  );
}

export default App;
