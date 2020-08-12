import React from 'react';
import './App.css';
// import playbutton from './assets/images/playbutton.svg';
import MetronomeContainer from './containers/MetronomeContainer'


function App() {
  return (
    <div>
      <h1>Hello from App.js</h1>
      {/* <img alt='some value' src={ playbutton }></img> */}
      <MetronomeContainer/>
   </div>
  );
}

export default App;
