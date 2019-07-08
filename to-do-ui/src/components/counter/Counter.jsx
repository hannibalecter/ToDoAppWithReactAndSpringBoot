import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Counter.css'
class Counter extends Component {

    constructor() {
        super(); // Error 1
        this.state = {
            counter: 0
        }

        // this.increment = this.increment.bind(this);
        this.increment = this.increment.bind(this);

    }
    render() {
        //render = () => {


        // const style = {fontSize: "50px"};
        // in span = style={style}
        return (
            <div className="counter">
                <button onClick={this.increment}>+{this.props.by}</button>
                <span className="count">{this.state.counter}</span>
            </div>
        );
    }

    increment() {
        // increment = () => { // update state
        //this.state.counter++; //Bad practice
        this.setState({
            counter: this.state.counter + this.props.by
        });
    };
}

Counter.defaultProps = {
    by: 1
}
Counter.propTypes = {
    by: PropTypes.number
}


export default Counter;