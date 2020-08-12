import React, { Fragment } from 'react';

const SliderInput = (props) => {

  
  function handleBPMSliderChange(event){
      console.log(event.target.value)
      props.handleBPMChange(event.target.value)
    
  }

  return (
    <div>
      <input onChange={handleBPMSliderChange}
        type="range" 
        id="tempo" 
        name="tempo"
        min="40" 
        max="220">
      </input>
  <label for="tempo">{"BPM " + props.bpm}</label>
   </div>
  )
}

export default SliderInput;