import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { fetchUsersIfNeeded } from '../actions/users'

class UserList extends Component {
  componentDidMount() {
    // Load all users on mount
    const { dispatch } = this.props
    dispatch(fetchUsersIfNeeded())
  }

  render() {
    const { users } = this.props
    return (
      <div>
        <h1>List of all users</h1>
        {users.isLoading ? 'Loading...' : null}
        { users.data &&
          users.data.map(user => (
            <div key={user.id}>
              <Link to={`/user/${user.id}`}>{user.name}</Link>
            </div>
          ))
        }
      </div>
    )
  }
}

UserList.propTypes = {
  users: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default UserList
