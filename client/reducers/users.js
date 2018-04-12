import { REQUEST_USERS, RECEIVE_USERS } from '../actions'

export default (state = {
  data: [],
  isLoading: false,
}, action) => {
  switch (action.type) {
    case REQUEST_USERS:
      return {
        ...state,
        data: [],
        isLoading: true,
      }
    case RECEIVE_USERS:
      return {
        ...state,
        data: action.users,
        isLoading: false,
      }
    default:
      return state
  }
}
