export const conuntReducer = function (state = { count: 0 }, action) {
  switch (action.type) {
    case 'Add':
      return { ...state, count: action.payload.count + 1 }
    case 'Sub':
      return { ...state, count: action.payload.count + 1 }
    default:
      return state
  }
}