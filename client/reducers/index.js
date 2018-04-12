import { combineReducers } from 'redux'

import { REQUEST_USERS, RECEIVE_USERS } from '../actions'

const users = (state = {
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

// We're going to add more reducers shortly
export default combineReducers({
  users,
})
