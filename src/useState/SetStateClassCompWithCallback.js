import React, { Component } from 'react';

// set state can accept function as a second argument
// it gets called at end when ALL state updates finishes

// from react docs: https://reactjs.org/docs/react-component.html
// The second parameter to setState() is an optional callback function 
// that will be executed once setState is completed and the component is re-rendered.
// Generally we recommend using componentDidUpdate() for such logic instead.
class SetStateFunctionalWithCallback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCount: 0,
            switch: false
        };
        this.clickCallback = this.clickCallback.bind(this);
        this.finishedCallback = this.finishedCallback.bind(this);
    }

    clickCallback() {
        this.setState((previousState) => {
            return { clickCount: previousState.clickCount + 1 }
        }, this.finishedCallback);

        this.setState((previousState) => {
            return { clickCount: previousState.clickCount + 1 }
        }, this.finishedCallback);

        this.setState((previousState) => {
            return { switch: !previousState.switch }
        }, this.finishedCallback)

        this.setState((previousState) => {
            return { clickCount: previousState.clickCount + 1 }
        }, this.finishedCallback);
    }

    finishedCallback() {
        console.log('updated state');
        console.log('callback called at ' + this.getCurrentTime());
        console.log('this.state.clickCount value at time of callback call ' + this.state.clickCount);
        console.log('this.state.switch value at time of callback call ' + this.state.switch);
        console.log('.')
    }

    getCurrentTime() {
        const date = new Date();
        const hour = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const milliseconds = date.getMilliseconds();
        const currentTime = hour + ":" + minutes + ":" + seconds + ":" + milliseconds;

        return currentTime;
    }

    render() {
        return (
            <>
                <button onClick={this.clickCallback}> Fixed Increment Button </button>
                <div> {this.state.clickCount} </div>
                <div> Incrementing by 3, check console </div>
            </>
        );
    }
}

export default SetStateFunctionalWithCallback;