import React, { createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, decrementByValue, increment, incrementByValue } from '../App/Slice/counterSlice';

export default function Counter() {

  const state = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const value = createRef();

  function handleIncrement() {
    dispatch(increment);
  }

  function handleDecrement() {
    dispatch(decrement);
  }

  function handleIncrementByValue() {
    //dispatch(incrementByValue(value.current.value));
  }

  function handleDecrementByValue() {
    //dispatch(decrementByValue(value.current.value));
  }

  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <br />
        <input type="number" placeholder= {0} ref = {value} />
        <br />
        <button onClick={handleIncrementByValue}>Increment By Value</button>
        <button onClick={handleDecrementByValue}>Decrement By Value</button>
    </div>
  )
}
