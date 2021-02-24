import axios from 'axios'

const postData = async () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts')
}

// 异步action
export const PostAction = (data) => {
  console.log(data);
  return async (dispatch) => {
    let result = await postData()
    dispatch({ type: 'POST', payload: { list: result.data } })
  }
}