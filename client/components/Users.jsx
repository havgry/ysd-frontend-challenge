import React, { Component } from 'react'

import { fetchUsers } from '../actions'

class UserList extends Component {
  componentDidMount() {
    // Load all users on mount
    // eslint-disable-next-line react/prop-types
    const { dispatch } = this.props
    dispatch(fetchUsers())
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { users } = this.props
    return (
      <div>
        <h1>List of all users</h1>
        { users.data &&
          users.data.map(user => <div key={user.id}>{user.name}</div>)
        }
      </div>
    )
  }
}

export default UserList
