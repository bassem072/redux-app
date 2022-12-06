import { DECREMENT, INCREMENT } from "../Actions/types";

const initState = {
    count: 0,
}

export default function CounterReducer(state = initState, action){
    switch(action.type){
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
    }
    return state;
}