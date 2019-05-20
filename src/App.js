import React, { useState } from 'react';
import './App.css';
import Clock from './Clock';

function App() {

  const [deadline, setDeadline] = useState('2019-05-21');

  return (
    <div className="App">
        <div className='App-title'>Countdown to { deadline }</div>
        <Clock deadline={deadline}/>
        <form>
          <label>Select new deadline</label>
          <input
            type="date"
            className='Deadline-input'
            placeholder="new date"
            onChange={event => setDeadline(event.target.value)}
            />
        </form>
    </div>
  );
}

export default App;
