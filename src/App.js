import React, { Component } from 'react'
import './App.css';
import Myheader from './components/Header/Header'
import Home from './components/Home/Home'
import './App.css'
export default class App extends Component {

  render() {
    return (
      <div id='app'>
        <Myheader></Myheader>
        <Home></Home>
      </div>
    )
  }
}
