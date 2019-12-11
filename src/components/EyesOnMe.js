// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {
    blurEvent = () => {
        console.log("Hey! Eyes on me!")
    }
    focusEvent = () => {
        console.log("Good!")
    }
    render() {
        return (
            <button type="button" onBlur={this.blurEvent} onFocus={this.focusEvent}>Enter Password</button>
        )
    }
}

export default EyesOnMe