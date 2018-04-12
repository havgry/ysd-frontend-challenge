import { combineReducers } from 'redux'

import { selectedUser, userById } from './user'
import users from './users'

export default combineReducers({
  selectedUser,
  userById,
  users,
})
