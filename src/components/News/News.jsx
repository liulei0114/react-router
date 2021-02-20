import React, { Component } from 'react'

export default class News extends Component {
  render() {
    const con = this.props.con || '新闻'
    return (
      <div>
        <h1>{con}</h1>
      </div>
    )
  }
}
