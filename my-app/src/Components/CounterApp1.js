import React, { useState } from 'react'

export default function CounterApp() {


    const [state,setState] = useState({
        count2:5, theme:'blue'
    });
    const count1 = state.count2; 
    const theme = state.theme;


    // spread operator is used to maintain structure of object here, it shouldn't get overriden
    const decrease=()=>{
        setState(state =>{
            return {
                ...state,
                count2: state.count2-1
            }
        });
    }
    
    const increase=()=>{
        setState(state =>{
            return {
                ...state,
                count2: state.count2+1
            }
        });
    }

  return (
    <div>
      <button onClick={decrease}>-</button>
      {count1}
      {theme}
      <button onClick={increase}>+</button>
    </div>
  )
}
