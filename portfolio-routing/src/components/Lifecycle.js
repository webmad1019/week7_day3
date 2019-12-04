import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
        console.log('I am in the CONSTRUCTOR of the Counter.js.');
    }

    counter = () => {
        this.setState({ count: this.state.count + 1 })
    }

    componentDidMount() {
        this.timer = setInterval(this.counter, 3000);
        console.log('Contador DID MOUNT.');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Contador UPDATED from: ', prevState.count, 'to', this.state.count);
    }

    componentWillUnmount() {
        console.log("======== Component COUNTER is UNMOUNTED! ========");
        clearInterval(this.timer); // !!!
    }


    render() {
        console.log('I am in the RENDER of the Counter.');
        return (
            <h1> {this.state.count}</h1>
        )
    }
}

export default Counter;