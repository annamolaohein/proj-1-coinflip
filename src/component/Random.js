import React, { useState } from 'react'
import "./CoinFlip";

export const Random = () => {
    const [minVal, setMinVal] = useState();
    const [maxVal, setMaxVal] = useState();
    const [randomNum, setRandomNum] = useState();

    const randomBetween = (minVal, maxVal) => {
        return Math.round(minVal + Math.random() * (maxVal - minVal))
    }

    return (
        <div className='RangeRandom'>
            <div className='outer'>
            <h1>Random in Range</h1>
                <div className={`show_random ${(randomNum === minVal || randomNum === maxVal) && "bold-text"
                    }`}>
                    <p>Random Number is: {randomNum}</p>
                </div>
                <div className='inner'>
                    <div>
                        <label>Start Value:</label>
                        <input
                            type="number"
                            min={0}
                            value={minVal}
                            onChange={(m) => setMinVal(parseInt(m.target.value))} />
                    </div>
                    <div>
                        <label>End Value:</label>
                        <input
                            type="number"
                            min={minVal ? minVal + 1 : ""}
                            value={maxVal}
                            onChange={(m) => setMaxVal(parseInt(m.target.value))} />
                    </div>
                </div>

                <button onClick={() => setRandomNum(randomBetween(minVal, maxVal))}
                    disabled={!minVal || !maxVal || maxVal <= minVal}>
                    Generate Random Number</button>
            </div>

        </div>
    )
}

