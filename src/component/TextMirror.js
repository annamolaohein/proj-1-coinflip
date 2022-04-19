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
        <div css={css({
            width: '350px',
            height: '200px',
            backgroundColor: '#66b9b9',
            color: 'black',
            border: '1px solid white',
            padding: 'auto',
            margin: 'auto',
            textAlign: 'center',
            marginTop: '2%',
        })}>
            <h1>The Text Mirror</h1>
            <div>
                <input css={css({
                    marginBottom: '20px',
                })}
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
