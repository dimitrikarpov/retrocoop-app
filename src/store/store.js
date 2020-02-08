import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import coopsReducer from 'store/reducers/coops'
import platformsReducer from 'store/reducers/platforms'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  coops: coopsReducer,
  platforms: platformsReducer
})

export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
