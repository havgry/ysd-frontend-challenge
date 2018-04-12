import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { fetchUserIfNeeded, selectUser } from '../actions/user'

class User extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    const { userId } = this.props.match.params

    this.props.dispatch(selectUser(userId))
    dispatch(fetchUserIfNeeded(userId))
  }

  componentWillReceiveProps({ dispatch, selectedUser }) {
    if (selectedUser !== this.props.selectedUser) {
      dispatch(fetchUserIfNeeded(selectedUser))
    }
  }

  render() {
    const { user } = this.props

    return (
      <div>
        <h1>User details</h1>
        <Link to="/">Back to all users</Link>
        {user && user.isLoading ? 'Loading...' : null}
        {user &&
          user.data.name
        }
      </div>
    )
  }
}

User.propTypes = {
  user: PropTypes.shape({
    data: PropTypes.object.isRequired,
    isLoading: PropTypes.bool,
  }).isRequired,
  selectedUser: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

User.defaultProps = {
  selectedUser: null,
}

export default User
