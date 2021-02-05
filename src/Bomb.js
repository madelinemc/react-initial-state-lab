// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props) { //props that the component gets from its parent
        super()
        this.state = { //define initial state with a key of 'someKey' set to the 'someValue' prop
            secondsLeft: props.initialCount
        }
    }

    render() {
        if (this.state.secondsLeft !== 0) {
            return (
                <div>
                    {this.state.secondsLeft} seconds left before I go boom!
                </div>
            )
        } else {
            return (
                <div>
                    Boom!
                </div>
            )
        }
    }

}
