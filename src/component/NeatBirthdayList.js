
// import "./NeatBirthdayList.css"
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const NeatBirthdayList = () => {
    const BIRTHDAYS = [{ name: "CarL", birthday: "Feb 2" },
    { name: "tiFFany", birthday: "Dec 17" },
    { name: "Lucas", birthday: null },
    { name: "Rose", birthday: "" }];

    const show = BIRTHDAYS.map(({ name, birthday }) => {

        name = name.charAt(0).toLocaleUpperCase() + name.slice(1).toLowerCase();
        return (
            <li css={css({
                textAlign: 'left',
                marginLeft: '30%',
            })}>
                {name} ({birthday || "unknown"})
            </li>
        )
    })

    return (
        <div css={css({
            width: '400px',
            height: '200px',
            backgroundColor: '#66b9b9',
            color: 'black',
            border: '1px solid white',
            paddingLeft: '2px',
            margin: 'auto',
            textAlign: 'left',
            marginTop: '2%',
        })}>
            <h1>The Neat Birthday List</h1>
            <div>
                {show}
            </div>
        </div>
    )
}
