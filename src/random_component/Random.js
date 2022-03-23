import React, { useState } from 'react'
import "./Random.css";

export const Random = () => {
    const [minVal, setMinVal] = useState("");
    const [maxVal, setMaxVal] = useState("");
    const [randomNum, setRandomNum] = useState("");

    const handleRandomNum = () => {
        // setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) * minVal));
        setRandomNum(Math.floor(Math.random() * (maxVal - minVal+1) + minVal))
    }

    return (
        <div className='container'>
            <div className='outer'>
                <div className='show_random'>
                    <p>Random Number is: <span>{randomNum}</span></p>
                </div>
                <div className='inner'>
                    <div>
                        <p>Start Value:</p>
                        <input type="number" value={minVal} onChange={m => setMinVal(m.target.value)} />
                    </div>
                    <div>
                        <p>End Value:</p>
                        <input type="number" value={maxVal} onChange={m => setMaxVal(m.target.value)} />
                    </div>
                </div>
                <button onClick={handleRandomNum}>Generate Random Number</button>
            </div>

        </div>
    )
}

