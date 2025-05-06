import React, { useMemo, useState } from 'react'

function Task4({val}) {
    const [init,setInit] = useState(val);
    const [num,setNum] = useState(1)
    const control = useMemo(()=>{
        console.log(num);
        setNum(num+1)
        return num
    },[init])
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Task 4,5,6 & 7</h1>
        <h4>{control}</h4>
        <button onClick={()=>setInit((p)=>p+1)}>Increase</button>
        <hr></hr>
    </div>
  )
}

export default Task4