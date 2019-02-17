import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function tick() {
  const element = (
    <div>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('timerContainer'));
}

export function secondUpdate(){
  setInterval(tick, 1000);
}
