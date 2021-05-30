import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import RouterInterceptor from 'utils/routerInterceptor'
import LoginPage from 'routes/LoginPage'
import MainApp from 'routes/MainApp'
import AppStyles from './App.styles'

class App extends Component {
  render() {
    return (
      <AppStyles>
        <Router>
          <Switch>
            <RouterInterceptor
              path="/in"
              exact
              component={MainApp}
            />
            <Route path="/" component={LoginPage} />
          </Switch>
        </Router>
      </AppStyles>
    )
  }
}

export default App
