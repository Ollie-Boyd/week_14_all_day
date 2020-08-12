import React, { Component, Fragment } from 'react';
import InputParent from '../components/inputs/InputParent.js';
import Bpm from '../components/outputs/Bpm.js';

class MetronomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bpm: 40,
      playing: false
    }
    this.handleBPMChange = this.handleBPMChange.bind(this)
    this.handlePlayingChange = this.handlePlayingChange.bind(this)
  }

  handleBPMChange(bpm){
    this.setState({bpm: bpm})
 }

  handlePlayingChange(playing){
    this.setState({ playing })
  }

  render() {
    return(
      <Fragment>
        <h1>Hello from Metronome Container</h1>
        <InputParent 
          playing={this.state.playing} 
          bpm={this.state.bpm} 
          handleBPMChange={this.handleBPMChange} 
          handlePlayingChange={this.handlePlayingChange} 
        />
        <Bpm playing={this.state.playing} bpm={this.state.bpm} />
      </Fragment>
    )
  }

  
}

export default MetronomeContainer;

