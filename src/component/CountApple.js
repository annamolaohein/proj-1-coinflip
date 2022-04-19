import React, { useState, useEffect } from 'react'
import "./CountApple.css";

export const CountApple = () => {

    const [countApple, setCountApple] = useState(0);
    const [evenOrOdd, setEvenOrOdd] = useState("");

    // const addApples = (randomVal) => {
    //     setCountApple(countApple + randomVal);
    // }

    const generateRandom = () => {
        return (Math.round(Math.random() * 10) % 3) + 1
    }
    useEffect(() => {
        setEvenOrOdd(countApple % 2 === 0 ? "Even" : "Odd")
    }, [countApple])

    return (
        <div className='CountApple'>
            <h1>Counting Apples</h1>
            <button
                onClick={() => setCountApple(countApple + generateRandom())}>
                Add Some Apples
            </button>
            <div>
                <p>🍎 Count: {countApple}</p>
                <p>EVEN OR ODD? {evenOrOdd}</p>
            </div>

        </div>
    )

}
