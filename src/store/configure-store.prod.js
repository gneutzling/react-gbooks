/* eslint global-require: 0 */
import { createStore, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import rootReducer from '../rootReducer'


const router = routerMiddleware(browserHistory)

/**
 * Creates a preconfigured store.
 */
const configureStore = (preloadedState) =>
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, router)
  )


export default configureStore
