import { SELECT_USER, REQUEST_USER, RECEIVE_USER, apiBaseUrl } from './index'

export const selectUser = userId => ({
  type: SELECT_USER,
  userId,
})

export const requestUser = userId => ({
  type: REQUEST_USER,
  userId,
})

export const receiveUser = (userId, user) => ({
  type: RECEIVE_USER,
  userId,
  user,
})

const queryUser = userId => (dispatch) => {
  dispatch(requestUser(userId))

  return fetch(`${apiBaseUrl}user/${userId}`)
    .then(response => response.json())
    .then((json) => {
      dispatch(receiveUser(userId, json))
    })
}

export const fetchUser = userId => dispatch => dispatch(queryUser(userId))
