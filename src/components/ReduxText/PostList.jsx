import React, { Component, Fragment } from "react";
import { PostAction } from "./../../actions/PostAction";
// 在react中使用redux，需要安装react-redux，使用connect连接react组件和redux
import { connect } from "react-redux";
class PostList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {};
  }

  componentDidMount() {
    // 异步发送请求
    this.props.dispatch(PostAction({ name: "liulei" }));
  }

  renderPostList = (list) => {
    return (
      <ul>
        {list.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    );
  };
  render() {
    const { list } = this.props.postData;
    return (
      <Fragment>
        <div>你好呀</div>
        <div>{this.renderPostList(list)}</div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    postData: state.post,
  };
};
// 通过connect连接组件和redux数据,传递state数据和dispatch方法
export default connect(mapStateToProps)(PostList);
