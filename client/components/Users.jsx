import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import LoadingOverlay from './LoadingOverlay'
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
      <main className="container">
        <h1 className="title title--size-large">All users</h1>
        <div className="collapsible-table collapsible-table--card">
          <header className="collapsible-table__row collapsible-table__header">
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Action</TableCell>
          </header>
          <LoadingOverlay isLoading={users.isLoading}>
            { users.data.map(user => (
              <div className="collapsible-table__row collapsible-table__row--card" key={user.id}>
                <TableCell label="Name">{user.name}</TableCell>
                <TableCell label="Username">{user.username}</TableCell>
                <TableCell label="Email">{user.email}</TableCell>
                <TableCell label="Phone">{user.phone}</TableCell>
                <TableCell label="Company">{user.company && user.company.name}</TableCell>
                <TableCell>
                  <Link className="link display--hidden display-desktop--block" to={`/user/${user.id}`} title="View user details">View details</Link>
                  <Link className="button button--width-full display-desktop--hidden" to={`/user/${user.id}`} title="View user details">View details</Link>
                </TableCell>
              </div>
              ))
            }
          </LoadingOverlay>
        </div>
      </main>
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

const TableCell = ({ children, label = null }) => (
  <div className="collapsible-table__cell">
    {label &&
      <div className="collapsible-table__label">{label}</div>
    }
    {children}
  </div>
)

TableCell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  label: PropTypes.string,
}

TableCell.defaultProps = {
  children: null,
  label: null,
}

export default UserList
