import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { fetchUser, selectUser } from '../actions/user'

class User extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { dispatch } = this.props
    // eslint-disable-next-line react/prop-types
    const { userId } = this.props.match.params

    this.props.dispatch(selectUser(userId))
    dispatch(fetchUser(userId))
  }

  // eslint-disable-next-line react/prop-types
  componentWillReceiveProps({ dispatch, selectedUser }) {
    if (selectedUser !== this.props.selectedUser) {
      dispatch(fetchUser(selectedUser))
    }
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { user } = this.props

    return (
      <div>
        <h1>User details</h1>
        <Link to="/">Back to all users</Link>
        {user &&
          user.data.name
        }
      </div>
    )
  }
}

export default User
