import React, { useState } from 'react'
// import "./TextMirror.css"
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const TextMirror = () => {
    const [inputText, setInputText] = useState("");
    const ReverseText = (s) => {
        return s.split("").reverse().join("");
    }

    return (
        <div css={styles.myDiv}>
            <h1>The Text Mirror</h1>
            <div>
                <input
                    type="text"
                    value={inputText}
                    onChange={(m) =>
                        setInputText((m.target.value))}
                >

                </input>
            </div>
            <div>
                <label>
                    The Text Mirror is:
                    {ReverseText(inputText)}
                </label>
            </div>
        </div>
    )
}
const styles = {
    myDiv: css`
        width: 350px;
        height: 200px;
        background-color: #66b9b9;
        color: black;
        border: 1px solid white;
        padding: auto;
        margin: auto;
        text-align: center;
        margin-top: 2%;
        & input{
            margin-bottom: 20px;
            border-radius: 0.2rem;
            padding: 5px 10px;
        }
    `
}
