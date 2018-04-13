import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from '../components/Header'
import User from '../components/User'
import Users from '../components/Users'

// We have to pass `props` to the rendered components
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={props => <Users {...this.props} {...props} />} />
            <Route path="/user/:userId" render={props => <User {...this.props} {...props} />} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

// Map store
const mapStateToProps = ({ selectedUser, userById, users }) => {
  // Get user and default to empty user object
  const { user } = userById[selectedUser] || {
    user: {
      isLoading: true,
      data: {},
    },
  }

  return {
    selectedUser,
    user,
    users,
  }
}

export default connect(mapStateToProps)(App)
