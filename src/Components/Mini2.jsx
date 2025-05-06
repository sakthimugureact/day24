import React, { useMemo, useState } from 'react'

function Mini2() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(1);
    const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    return number * 2;
    }, [number]);
    return (
    <div>
    <h1 style={{textAlign:"center"}}>Mini 2</h1>
    <h2>Expensive Calculation: {expensiveCalculation}</h2>
    <button onClick={() => setNumber(number + 1)}>Change Number</button>
    <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>)
}

export default Mini2