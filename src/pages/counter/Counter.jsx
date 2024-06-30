import React, { useState } from 'react';
import './counter.css';

export default function Counter() {
    const [count, setCount] = useState(0);

    function add() {
        setCount(count + 1);
    }

    function minus() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div className="counter-container">
            <h1>Counter App</h1>
            <h1 className="counter-value">{count}</h1>
            <div className="button-group">
                <button onClick={add}>+</button>
                <button onClick={minus}>-</button>
                <button onClick={reset}>Reset</button>
                <button onClick={() => setCount(count + 2)}>+2</button>
                <button onClick={() => setCount(count - 2)}>-2</button>
            </div>
        </div>
    );
}
