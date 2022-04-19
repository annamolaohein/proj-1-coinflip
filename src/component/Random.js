import React, { useState } from 'react'
// import "./CoinFlip.css";
import styled from '@emotion/styled';

export const Random = () => {
    const [minVal, setMinVal] = useState();
    const [maxVal, setMaxVal] = useState();
    const [randomNum, setRandomNum] = useState();

    const randomBetween = (minVal, maxVal) => {
        return Math.round(minVal + Math.random() * (maxVal - minVal))
    }

    return (
        <Div className='RangeRandom'>
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

                <button id='btn' onClick={() => setRandomNum(randomBetween(minVal, maxVal))}
                    disabled={!minVal || !maxVal || maxVal <= minVal}>
                    Generate Random Number</button>
            </div>

        </Div>
    )
}

const Div = styled.div`
  width: 50%;
  margin-left: 25%;
  /* background: #e3eff3; */
  background: #66b9b9;
  display: flex;
 
 .outer{
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
 }
 .bold-text {
  font-weight: 800;
 }
  .inner {
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  width: 100%;
  & input{
    padding: 8px;
}
}

#btn{
  padding: 5px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
}
`