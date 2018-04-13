import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import LoadingOverlay from './LoadingOverlay'
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
      <main className="container">
        <h1 className="title title--size-large">User details</h1>
        <div className="card">
          <nav>
            <Link className="link" to="/" title="Go back to all users">Back to all users</Link>
          </nav>
          <LoadingOverlay isLoading={user && user.isLoading}>
            <div>
              <h2 className="title title--size-medium">{user.data.name}</h2>
              <dl className="definition-list">
                <DescriptionTerm term="Username" />
                <DescriptionDetails>{user.data.username}</DescriptionDetails>
                <DescriptionTerm term="Email" />
                <DescriptionDetails>{user.data.email}</DescriptionDetails>
                <DescriptionTerm term="Phone" />
                <DescriptionDetails>{user.data.phone}</DescriptionDetails>
                <DescriptionTerm term="Website" />
                <DescriptionDetails>
                  <Link className="link" to={`http://${user.data.website}`} target="_black" rel="noopener noreferrer" title={`Go to http://${user.data.website}`}>{user.data.website}</Link>
                </DescriptionDetails>
              </dl>
              { user.data.address &&
                <article>
                  <h3 className="title title--size-small">Address</h3>
                  <address className="text-style--normal">
                    <dl className="definition-list">
                      <DescriptionTerm term="Street" />
                      <DescriptionDetails>{user.data.address.street}</DescriptionDetails>
                      <DescriptionTerm term="Suite" />
                      <DescriptionDetails>{user.data.address.suite}</DescriptionDetails>
                      <DescriptionTerm term="city" />
                      <DescriptionDetails>{user.data.address.city}</DescriptionDetails>
                      <DescriptionTerm term="Zipcode" />
                      <DescriptionDetails>{user.data.address.zipcode}</DescriptionDetails>
                    </dl>
                  </address>
                </article>
              }
              { user.data.company &&
                <article>
                  <h3 className="title title--size-small">Company</h3>
                  <dl className="definition-list">
                    <DescriptionTerm term="Name" />
                    <DescriptionDetails>{user.data.company.name}</DescriptionDetails>
                    <DescriptionTerm term="Catchphrase" />
                    <DescriptionDetails>{user.data.company.catchPhrase}</DescriptionDetails>
                  </dl>
                </article>
              }
            </div>
          </LoadingOverlay>
        </div>
      </main>
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

const DescriptionTerm = ({ term }) => (
  <dt className="definition-list__description-term text-weight--semibold">{term}</dt>
)

DescriptionTerm.propTypes = {
  term: PropTypes.string.isRequired,
}

const DescriptionDetails = ({ children }) => (
  <dd className="definition-list__description-details">{children}</dd>
)

DescriptionDetails.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

DescriptionDetails.defaultProps = {
  children: null,
}

export default User
