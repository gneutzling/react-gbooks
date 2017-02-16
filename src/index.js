import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import configureStore from './store/configure-store'
import routes from './routes'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const Root = () => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
)

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)
