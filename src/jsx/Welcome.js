import React, { Component } from 'react';
import {Clock} from "./Clock.js"

export class Welcome extends React.Component {
  render(){
    return (
      <div>
      <h1>Hello, {this.props.name}</h1>
      <Clock/>
      </div>

    )

  }
}
