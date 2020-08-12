import React, { Fragment } from 'react'
import PlayPauseInput from './PlayPauseInput'
import SliderInput from './SliderInput'

const InputParent = (props) => {
    return (
        <>
            <h2>hello from inputparent</h2>
            <SliderInput />
            <PlayPauseInput />
        </>
    )
}

export default InputParent