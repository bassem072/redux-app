import React, { createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, decrementByValueAction, incrementAction, incrementByValueAction } from '../App/Actions/counterActions';

export default function Counter() {

  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const value = createRef();

  function increment() {
    dispatch(incrementAction());
  }

  function decrement() {
    dispatch(decrementAction());
  }

  function incrementByValue() {
    dispatch(incrementByValueAction(value.current.value));
  }

  function decrementByValue() {
    dispatch(decrementByValueAction(value.current.value));
  }

  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <br />
        <input type="number" placeholder= {0} ref = {value} />
        <br />
        <button onClick={incrementByValue}>Increment By Value</button>
        <button onClick={decrementByValue}>Decrement By Value</button>
    </div>
  )
}
