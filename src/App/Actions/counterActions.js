import { DECREMENT, DECREMENT_BY_VALUE, INCREMENT, INCREMENT_BY_VALUE } from "./types"

export const incrementAction = () => {
    return {
        type: INCREMENT,
    }
}

export const decrementAction = () => {
    return {
        type: DECREMENT,
    }
}

export const incrementByValueAction = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        value: value,
    }
}

export const decrementByValueAction = (value) => {
    return {
        type: DECREMENT_BY_VALUE,
        value: value,
    }
}