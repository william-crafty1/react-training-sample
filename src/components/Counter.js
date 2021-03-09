import React, { useState } from 'react';
import './Counter.css';

function Counter(){
    const [count, setCount ] = useState(0);

    function countUp() {
        setCount(count + 1);
    }

    function countDown() {
        setCount(count - 1);
    }

    function resetCount() {
        setCount(0);
    }

    return (
        <div className="Counter-container">
            <div className="Counter">
            <h3>Counter</h3>
            <p>{count}</p>
            <p>
                <button onClick={countDown}>Down</button>
                <button onClick={resetCount}>Reset</button>
                <button onClick={countUp}>Up</button>
            </p>
        </div>
        </div>

    );
}

export default Counter;

// Basic structure of a react component

// Good practice to name divs after function names, avoids confusion. Make sure to use Capital first letter for file names. 