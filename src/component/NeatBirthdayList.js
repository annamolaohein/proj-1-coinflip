import userEvent from '@testing-library/user-event';
import React, { useState } from 'react'
import "./CoinFlip.css"

export const NeatBirthdayList = () => {
    const BIRTHDAYS = [{ name: "CarL", birthday: "Feb 2" },
    { name: "tiFFany", birthday: "Dec 17" },
    { name: "Lucas", birthday: null },
    { name: "Rose", birthday: "" }];

    const show = BIRTHDAYS.map(({ name, birthday }) => {

        name = name.charAt(0).toLocaleUpperCase() + name.slice(1).toLowerCase();
        if (birthday === null || birthday === "") {

            birthday = "unknown";
            return (
                <li>{`${name} ( ${birthday} ) `}</li>
            )
        }
        else
            // console.log(`${name} ( ${birthday} )`);
            return (
                <li>{`${name} ( ${birthday} ) `}</li>
            )
    })

    return (
        <div className='Neat_Birthday'>
            <h1>The Neat Birthday List</h1>
            <div>
                {show}
            </div>
        </div>
    )
}
