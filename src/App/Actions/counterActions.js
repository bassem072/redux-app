import { DECREMENT, DECREMENT_BY_VALUE, INCREMENT, INCREMENT_BY_VALUE } from "./types"

export const incrementAction = (dispatch) => {
    return dispatch({
        type: INCREMENT,
    });
}

export const decrementAction = (dispatch) => {
    return dispatch({
        type: DECREMENT,
    });
}

export const incrementByValueAction = (value, dispatch) => {
    return dispatch({
        type: INCREMENT_BY_VALUE,
        value: value,
    });
}

export const decrementByValueAction = (value, dispatch) => {
    return dispatch({
        type: DECREMENT_BY_VALUE,
        value: value,
    });
}