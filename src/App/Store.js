import { createStore, applyMiddleware } from 'redux';
import CounterReducer from './Reducers/counterReducer';

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(CounterReducer, enhancer());

export default store;