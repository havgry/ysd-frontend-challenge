import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import User from '../components/User'
import Users from '../components/Users'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={() => <Users />} />
      <Route path="/user/:userId" render={() => <User />} />
    </Switch>
  </BrowserRouter>
)

export default App
