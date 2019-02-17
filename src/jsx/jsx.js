import React, { Component } from 'react';
import { secondUpdate } from './Timer.js';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Tom',
  lastName: 'Jones'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

export function WelcomeMessage(props){
  return(
    <div>
    {getGreeting(user)}
    <div id="timerContainer"/>
    {secondUpdate()}
    </div>

  )
}
