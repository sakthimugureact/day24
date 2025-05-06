import React, { useCallback, useState } from 'react'

function Task8() {
   const [count,setCount] = useState(0);
  
   const alret = useCallback(()=>{
    console.log("Button Clicked");
   },[count])
   alret();
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Task 8,9</h1>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>CLick</button>
        <hr />
    </div>
  )
}

export default Task8