import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import requestsReducer from 'store/reducers/requests'
import platformsReducer from 'store/reducers/platforms'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  requests: requestsReducer,
  platforms: platformsReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
