// import { css } from '@emotion/css';
import React, { useState, useEffect } from 'react'
// import "./CountApple.css";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

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
        <div css={css({
            width: '350px',
            height: 'auto',
            backgroundColor: '#66b9b9',
            color: 'black',
            border: '1px solid white',
            padding: 'auto',
            margin: 'auto',
            textAlign: 'center',
            marginTop: '2%',
        })}>
            <h1>Counting Apples</h1>
            <Button
                onClick={() => setCountApple(countApple + generateRandom())}>
                Add Some Apples
            </Button>
            <div>
                <p>🍎 Count: {countApple}</p>
                <p>EVEN OR ODD? {evenOrOdd}</p>
            </div>

        </div>
    )

}
const Button = styled.button`
    margin-bottom: 20px;
    padding: 10px 10px;`
