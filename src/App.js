import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={7}/>
      </div>
    )
  }
}

// c596bf19f37f4be89d8de676bbb9a09a is my API key for News API.
  