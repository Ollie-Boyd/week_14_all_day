import React, { Component, Fragment } from 'react';
import InputParent from '../components/inputs/InputParent.js';
import Bpm from '../components/outputs/Bpm.js';

class MetronomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bpm: 0,
      playing: false
    }
  }

  render() {
    return(
      <Fragment>
        <h1>Hello from Metronome Container</h1>
        <InputParent/>
        <Bpm/>
      </Fragment>
    )
  }
  
}

export default MetronomeContainer;

