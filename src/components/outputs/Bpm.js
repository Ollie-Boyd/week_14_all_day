import React, { Component, Fragment } from 'react';

class Bpm extends Component {
  constructor(props){
    super(props);
  }


    componentDidUpdate(prevProps) {
        if (this.props.playing !== prevProps.playing) { 
          this.beat()
        }
    }

    sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }

    async beat() {
        if (!this.props.playing) return
        const tick = new Audio("/korg-click.wav")
        tick.play();
        const delay = 60000/this.props.bpm 
        await this.sleep(delay);
        this.beat()
    }

  render(){
    return (
        <button onClick={this.beat} type="button">Tick!</button>  
        )
    }
}

export default Bpm;