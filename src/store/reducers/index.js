import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import trackerReducer from './trackerReducer'

export const rootReducer = combineReducers({
  tracker: trackerReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
