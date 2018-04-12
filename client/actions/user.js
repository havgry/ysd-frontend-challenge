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

const fetchUser = userId => (dispatch) => {
  dispatch(requestUser(userId))

  return fetch(`${apiBaseUrl}user/${userId}`)
    .then(response => response.json())
    .then((json) => {
      dispatch(receiveUser(userId, json))
    })
}

const shouldfetchUser = ({ userById }, userId) => {
  // Don't fetch user if it already exists or being fetched
  const user = userById[userId]

  if (user || (user && user.isLoading)) {
    return false
  }

  return true
}

export const fetchUserIfNeeded = userId => (dispatch, getState) => {
  if (shouldfetchUser(getState(), userId)) {
    return dispatch(fetchUser(userId))
  }

  return false
}
