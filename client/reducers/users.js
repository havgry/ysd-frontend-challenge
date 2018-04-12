import { REQUEST_USERS, RECEIVE_USERS } from '../actions'

export default (state = {
  data: [],
}, action) => {
  switch (action.type) {
    case REQUEST_USERS:
      return {
        ...state,
        data: [],
      }
    case RECEIVE_USERS:
      return {
        ...state,
        data: action.users,
      }
    default:
      return state
  }
}
