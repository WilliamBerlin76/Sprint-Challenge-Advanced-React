import React from 'react';

import Players from './components/GetPlayers';
import {useRedMode} from './hooks/useRedMode';
// import {useLabelToggle} from './hooks/hideLabels'
import './App.css';

function App() {
  const [redMode, redModeChanges, setRedMode] = useRedMode(false);
  // const [hideLabels, hideLabelsChanges, setHideLabels] = useLabelToggle(false);
  const toggleMode = e => {
    e.preventDefault();
    setRedMode(!redMode)
  }
  // const toggleLabels = e => {
  //   e.preventDefault();
  //   setHideLabels(!hideLabels)
  // }
  return (
    <div className="App">
      <h1>Women's World Cup</h1>
      <button onClick={toggleMode}>Red Mode</button>
      {/* <button onClick={toggleLabels}>Hide Labels</button> */}
      <Players/>
    </div>
  );
}

export default App;
