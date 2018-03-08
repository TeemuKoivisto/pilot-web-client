import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { MainWrapper } from './elements/MainWrapper'

import DashboardPage from './pages/DashboardPage'

const WrappedRoute = ({ component: Component, ...rest }) =>
  <Route {...rest} render={({ ...props }) =>
    <MainWrapper><Component {...props}/></MainWrapper> }
  />

export default () => (
  <BrowserRouter>
    <Switch>
      <WrappedRoute path='/' component={DashboardPage} />
    </Switch>
  </BrowserRouter>
)
