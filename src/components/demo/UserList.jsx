import React, { Component } from 'react'
import UserInput from './UserInput'
export default class UserList extends Component {


  state = {
    users: [
      { id: 0, name: 'bruce' },
      { id: 1, name: 'frank' },
      { id: 2, name: 'tony' }
    ],
    targetUser: {}
  }

  onConfirm = (user) => {
    const { users } = this.state;
    const target = users.find(u => u.id === user.id);

    if (target) {
      this.setState({
        users: [
          ...users.slice(0, users.indexOf(target)),
          user,
          ...users.slice(users.indexOf(target) + 1)
        ]
      });
    } else {
      const id = Math.max(...(users.map(u => u.id))) + 1;
      this.setState({
        users: [
          ...users,
          {
            ...user,
            id
          }
        ]
      });
    }
  }

  onChange = (e) => {
    this.setState({
      targetUser: {
        id: this.state.targetUser.id,
        name: e.target.value
      }
    });
  }

  render() {
    const { users, targetUser } = this.state;
    return (
      <div>
        <UserInput user={targetUser} onConfirm={this.onConfirm} onChange={this.onChange} key={targetUser.id} />
        <ul>
          {
            users.map(u => (
              <li key={u.id}>
                {u.name}
                <button onClick={() => { this.setState({ targetUser: u }) }}>编辑</button>
              </li>
            ))
          }
        </ul>
        <button onClick={() => { this.setState({ targetUser: {} }) }}>新建</button>
      </div>
    )
  }
}
