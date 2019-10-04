import React from 'react';

import Players from './components/GetPlayers'
import {useRedMode} from './hooks/useRedMode'
import './App.css';

function App() {
  const [redMode, redModeChanges, setRedMode] = useRedMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setRedMode(!redMode)
  }

  return (
    <div className="App">
      <h1>Women's World Cup</h1>
      <button onClick={toggleMode}>Red Mode</button>
      <Players/>
    </div>
  );
}

export default App;
