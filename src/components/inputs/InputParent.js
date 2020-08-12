import React, { Fragment } from 'react'
import PlayPauseInput from './PlayPauseInput'
import SliderInput from './SliderInput'

const InputParent = (props) => {
  // console.log(props.handlePlayingChange)
    return (
      <>
        <h2>hello from inputparent</h2>
        <SliderInput  bpm={props.bpm} handleBPMChange={props.handleBPMChange} />
        <PlayPauseInput playing={props.playing} handlePlayingChange={props.handlePlayingChange} />
      
      </>
    )
}

export default InputParent