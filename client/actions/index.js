export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'

export const requestUsers = () => ({
  type: REQUEST_USERS,
})

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users,
})

const queryUsers = () => (dispatch) => {
  dispatch(requestUsers())

  return fetch('http://localhost:1337/api/users')
    .then(response => response.json())
    .then((json) => {
      dispatch(receiveUsers(json))
    })
}

export const fetchUsers = () => dispatch => dispatch(queryUsers())
