import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './Reducers';

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(Reducers, enhancer(applyMiddleware(ReduxThunk)));

export default store;