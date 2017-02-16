import React from 'react'
import { Route } from 'react-router'
import Home from './views/home'

const routes = (
  <Route>
    <Route path="/" component={Home} />
  </Route>
)

export default routes
