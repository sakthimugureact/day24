import React, { useCallback, useState } from 'react'

function Task10() {
    const [count, setCount] = useState(0);
    const Child = React.memo(({ onClick }) => {
        console.log("Child Component Rendered");
        return <button onClick={onClick}>Click Me</button>;
       });

 const handleClick = useCallback(() => {
 console.log("Button Clicked");
 }, []);
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Task 10</h1>
        <Child onClick={handleClick} />
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  )
}

export default Task10