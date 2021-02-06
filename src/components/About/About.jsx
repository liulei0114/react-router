import React, { Component } from 'react'
import Message from './Message/Message';
import { NavLink, Route, Switch } from 'react-router-dom'
export default class About extends Component {
  render() {

    return (
      <div>
        <ul>
          <li>
            {/* 路由跳转传值方式第一种 动态路由传值 */}
            <NavLink to='/about/message/1/hanzi'>动态路由传递</NavLink>
          </li>
          <li>
            <NavLink to={`/about/message?id=2&con=美国人将英语`}>query路由传递</NavLink>
          </li>
          <li>
            <NavLink to={{ pathname: '/about/message1', state: { id: 3, con: '加拿大也说英语' } }}>query路由传递</NavLink>
          </li>
        </ul>
        <div>
          <Switch>
            <Route path='/about/message/:id/:con' exact component={Message}></Route>
            <Route path='/about/message' exact component={Message}></Route>
            <Route path='/about/message1' exact component={Message}></Route>
          </Switch>
        </div>
      </div>
    )
  }
}
