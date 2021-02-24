
export const loginReducer = function (state = { text: '没状态' }, { type, payload }) {
  switch (type) {
    case 'login':
      return { ...state, text: payload.text + '---登录了' }
    case 'logout':
      return { ...state, text: payload.text + '---退出登录了' }
    default:
      return state
  }
}