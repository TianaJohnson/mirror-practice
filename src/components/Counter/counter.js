import React from 'react';
import { useSelector, useDispatch } from 'react-redux';



function Counter() {

    const dispatch = useDispatch();
    const counter = useSelector( (state) => state.counter);

    return (
        <div>
          <h1> Counter : {counter}</h1>
          <button onClick ={(() => dispatch({type:"INCREMENT"}))}>Increment</button>
          <button onClick ={(() => dispatch({type:"DECREMENT"}))}>Decrement</button>
        </div>
    );
 }
 
export default Counter;