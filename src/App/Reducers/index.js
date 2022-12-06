import { combineReducers } from "redux";
import CounterReducer from "./counterReducer";
import userReducer from "./userReducer";

const Reducers = combineReducers({
    counter: CounterReducer,
    user: userReducer,
});

export default Reducers;