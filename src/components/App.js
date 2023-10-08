import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const App = () => {
const [state,dispatch] = useReducer(counterReducer,{count:0})
  return (
    <div id="main">
      <span id="counter">{state.count}</span>
      <button id="increment-btn" onClick={()=>{
        dispatch({type: "Inc"})
      }}>Increase</button>
      <button id="decrement-btn" onClick={()=>{
        dispatch({type: "Dec"})
      }}>Decrease</button>
    </div>
  )
}


export default App;
