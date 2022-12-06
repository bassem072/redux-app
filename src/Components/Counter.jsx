import React, { createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, decrementByValueAction, incrementAction, incrementByValueAction } from '../App/Actions/counterActions';

export default function Counter() {

  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const value = createRef();

  function increment() {
    incrementAction(dispatch);
  }

  function decrement() {
    decrementAction(dispatch);
  }

  function incrementByValue() {
    incrementByValueAction(value.current.value, dispatch);
  }

  function decrementByValue() {
    decrementByValueAction(value.current.value, dispatch);
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
