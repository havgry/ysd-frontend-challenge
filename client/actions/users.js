import { REQUEST_USERS, RECEIVE_USERS, apiBaseUrl } from './index'

export const requestUsers = () => ({
  type: REQUEST_USERS,
})

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users,
})

const fetchUsers = () => (dispatch) => {
  dispatch(requestUsers())

  return fetch(`${apiBaseUrl}users`)
    .then(response => response.json())
    .then((json) => {
      dispatch(receiveUsers(json))
    })
}

const shouldfetchUsers = ({ users }) => {
  // Don't fetch users if we already have some or they're being fetched
  if (users.data.length > 0 || users.isLoading) {
    return false
  }

  return true
}

export const fetchUsersIfNeeded = () => (dispatch, getState) => {
  if (shouldfetchUsers(getState())) {
    return dispatch(fetchUsers())
  }

  return false
}
