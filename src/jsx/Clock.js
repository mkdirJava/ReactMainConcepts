import React, { Component } from 'react';

export class Clock extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      date : new Date(),
      counts: 0,
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
  this.setState((state,props)=>({
    counts : state.counts + 1,
  }))


}

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h2> the Counter is at { this.state.counts}.</h2>
      </div>
    );
  }
}
