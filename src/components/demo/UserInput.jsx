import React, { Component } from 'react'
export default class UserInput extends Component {

  constructor(props) {
    super(props)
    console.log('userinput');
  }

  state = {
    user: this.props.user
  }

  onChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        name: e.target.value
      }
    });
  }

  
  render() {
    const { user } = this.state;
    const { onConfirm } = this.props;
    return (
      <div>
        <input value={user.name || ''} onChange={this.onChange} />
        <button onClick={() => { onConfirm(user) }}>确定</button>
      </div>
    )
  }
  // render() {
  //   const { user, onConfirm } = this.props;
  //   return (
  //     <div>
  //       <input value={user.name || ''} onChange={(e) => { this.props.onChange(e) }} />
  //       <button onClick={() => { onConfirm(user) }}>确定</button>
  //     </div>
  //   );
  // }
}