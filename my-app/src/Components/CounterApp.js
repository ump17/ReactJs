import React, { useState } from 'react'

export default function CounterApp() {
    // const [count,setCount] = useState(5);
    // 5 will be called every single time our component renders

    const [count,setCount] = useState(()=>{
        console.log("ashish");
        return 5;
    });

    const decrease=()=>{
        setCount(count => count-1);
    }
    
    const increase=()=>{
        setCount(count => count+1);
    }
  return (
    <div>
      <button onClick={decrease}>-</button>
      {count}
      <button onClick={increase}>+</button>
    </div>
  )
}
