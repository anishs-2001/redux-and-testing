import React from 'react'
import {useDispatch, useSelector }from "react-redux";
import { increment, decrement } from './CounterSlice';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count.value);
  return (
    <>
    <div>
      {count}
    </div>
    <button onClick={() => dispatch(increment(5))}>+</button>
    <button onClick={() => dispatch(decrement(2))}>-</button>
    </>
  )
}

export default Counter
