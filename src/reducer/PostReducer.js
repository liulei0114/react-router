export const postReducer = function (state = { list: [] }, action) {
  switch (action.type) {
    case 'POST':
      return { ...state, list: action.payload.list }
    default:
      return state
  }
}