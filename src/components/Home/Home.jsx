import React, { Component } from 'react'
import { Switch, NavLink, Route, Redirect } from 'react-router-dom'

import News from '../News/News'
import About from '../About/About'

import './index.css'
export default class home extends Component {
  render() {
    return (
      <div id='home'>
        <div className='aside'>
          <div>
            <NavLink to='/news'>news</NavLink>
          </div>
          <div>
            <NavLink to='/about'>about</NavLink>
          </div>
        </div>
        <div className='content'>
          <Switch>
            <Route path='/news' component={News} exact />
            <Route path='/about' component={About} />
            <Redirect to='/news'></Redirect>
          </Switch>

        </div>
      </div >
    )
  }
}
