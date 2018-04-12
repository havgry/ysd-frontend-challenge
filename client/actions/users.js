import { REQUEST_USERS, RECEIVE_USERS, apiBaseUrl } from './index'

export const requestUsers = () => ({
  type: REQUEST_USERS,
})

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users,
})

const queryUsers = () => (dispatch) => {
  dispatch(requestUsers())

  return fetch(`${apiBaseUrl}users`)
    .then(response => response.json())
    .then((json) => {
      dispatch(receiveUsers(json))
    })
}

export const fetchUsers = () => dispatch => dispatch(queryUsers())
