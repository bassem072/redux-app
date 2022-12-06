import { createStore, applyMiddleware } from 'redux';
import CounterReducer from './Reducers/counterReducer';
import ReduxThunk from 'redux-thunk';

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(CounterReducer, enhancer(applyMiddleware(ReduxThunk)));

export default store;