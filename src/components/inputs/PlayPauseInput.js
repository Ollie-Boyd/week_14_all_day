import React from 'react'
import playButton from '../../assets/images/playbutton.svg';
import pauseButton from '../../assets/images/stopbutton.svg';



const PlayPauseInput = (props) => {

  let button = pauseButton;
  // console.log(props.handlePlayingChange)

  // function handleButtonChange(event){
  //   props.handlePlayingChange(event.target.value);
  //   button = pauseButton;
  // }

  function handleButtonClick(){
    // console.log(props.playing)
    // console.log(props.handlePlayingChange) 
    props.handlePlayingChange(!props.playing)
    button = playButton
   
  }
    
    return (
        <img onClick={handleButtonClick} alt='some value' src={ button }></img>
        // <button></button>
    )


}

export default PlayPauseInput