import React, { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(count + 1);
        console.log("Increment count");
    }

    const subtractCount = () => {
        setCount(count - 1);
        console.log("Decrement count");
    }

    const resetCount = () => {
        setCount(0);
        console.log("Reset count");
    }

    return (
        <>
            <h1>{count}</h1>
            <div>
                <button onClick={addCount}>+</button> <span>&nbsp;</span>
                <button onClick={subtractCount}>-</button> <span>&nbsp;</span>
                <button onClick={resetCount}>reset</button>
            </div>
        </>
    );
}

export default App;