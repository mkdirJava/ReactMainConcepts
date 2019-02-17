import React, { Component } from 'react';

export class Clock extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      date : new Date(),
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
  this.setState({
    date: new Date()
  });
}

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
