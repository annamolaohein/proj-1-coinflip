import React, { useState, useEffect } from 'react'
import "./CoinFlip.css";

export const Count_Apple = () => {
    const counter = React.useRef(0);
    const [countApple, setCountApple] = useState("");
    const Add = () => {
        counter.current = counter.current + 1;
        // setCountApple(counter.current);
        setCountApple(Math.floor(Math.random() * counter.current));
    }
    const isEven = useEffect(() => {
        console.log("countApple", countApple)
    }, [countApple]);
    return (
        <div className='CountApple'>
            <h1>Counting Apples</h1>
            <button
                onClick={Add}>
                Add Some Apples
            </button>
            <div className='count'>
                <label>🍎 Count: {countApple}</label>
            </div>
            <div>
                <p>The number is: {countApple % 2 == 0 ? "EVEN" : "ODD"}</p>
            </div>
        </div>
    )

}
