import React, { useState } from 'react'

export const TextMirror = () => {
    const [inputText, setInputText] = useState("");
    const ReverseText = (s) => {
        return s.split("").reverse().join("");
    }

    return (
        <div className='TextMirror'>
            <h1>The Text Mirror</h1>
            <div>
                <input type="text"
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
