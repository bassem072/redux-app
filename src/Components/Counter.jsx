import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT, INCREMENT } from '../App/Actions/types';

export default function Counter() {

  const state = useSelector(state => state);
  const dispatch = useDispatch();

  function increment() {
    dispatch({
      type: INCREMENT,
    });
  }

  function decrement() {
    dispatch({
      type: DECREMENT,
    });
  }

  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}
