import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducer'

const store = createStore(reducer, { products: [] }, applyMiddleware(thunk))

export default store