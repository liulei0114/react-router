import React, { Component } from 'react'
import './App.css';
import Myheader from './components/Header/Header'
import Home from './components/Home/Home'
import UserList from './components/demo/UserList'
import './App.css'
import PostList from './components/ReduxText/PostList';
export default class App extends Component {

  render() {
    return (
      <div id='app'>
        <Myheader></Myheader>
        <Home></Home>
        <UserList></UserList>
        <PostList></PostList>
      </div>
    )
  }
}
