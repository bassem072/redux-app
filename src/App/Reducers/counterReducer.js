import { DECREMENT, DECREMENT_BY_VALUE, INCREMENT, INCREMENT_BY_VALUE } from "../Actions/types";

const initState = {
    count: 0,
}

export default function CounterReducer(state = initState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + Number(action.value),
            };
        case DECREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count - action.value,
            };
        default:
            return state;
    }
}