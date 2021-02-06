import React, { Component } from 'react'
import qs from 'querystring'
export default class Message extends Component {
  state = {
    message: [
      {
        id: 1,
        info: '中国'
      },
      {
        id: 2,
        info: '美国'
      },
      {
        id: 3,
        info: '加拿大'
      }

    ]

  }
  render() {
    // * 第一种传值方式，路由传递
    // let id = this.props.match.params.id
    // let con = this.props.match.params.con

    // * 第二种传值方式，query
    // let { id, con } = qs.parse(this.props.location.search.slice(1))

    // * 第三种传值方式，内部传值
    let id = this.props.location.state.id
    let con = this.props.location.state.con

    let newList = this.state.message.filter(e => e.id === ~~id)

    return (
      <div>
        {newList.map(item => {
          return (
            <div key={item.id}>
              <p>国家编号：{item.id}</p>
              <p>国家名称：{item.info}</p>
              <p>国家内容：{con}</p>
            </div>
          )
        })
        }
      </div>
    )
  }
}
