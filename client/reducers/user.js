import { SELECT_USER, REQUEST_USER, RECEIVE_USER } from '../actions'

export const selectedUser = (state = null, action) => {
  switch (action.type) {
    case SELECT_USER:
      return action.userId
    default:
      return state
  }
}

const user = (state = {
  user: {
    data: {},
    isLoading: false,
  },
}, action) => {
  switch (action.type) {
    case REQUEST_USER:
      return {
        ...state,
        user: {
          isLoading: true,
          data: {},
        },
      }
    case RECEIVE_USER:
      return {
        ...state,
        user: {
          isLoading: false,
          data: action.user,
        },
      }
    default:
      return state
  }
}

export const userById = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
    case REQUEST_USER:
      return {
        ...state,
        [action.userId]: user(state[action.userId], action),
      }
    default:
      return state
  }
}
