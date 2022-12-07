import { configureStore } from '@reduxjs/toolkit';
import Reducers from './Reducers';

// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

//const store = createStore(combineReducers(Reducers), enhancer(applyMiddleware(ReduxThunk)));

const store = configureStore(Reducers);

export default store;