
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
            <li>
                {name} ({birthday || "unknown"})
            </li>
        )
    })

    return (
        <div css={styles.myDiv}>
            <h1>The Neat Birthday List</h1>
            <div>
                {show}
            </div>
        </div>
    )
}
const styles = {
    myDiv: css`
        width: 400px;
        height: 200px;
        background-color: #66b9b9;
        color: black;
        border: 1px solid white;
        padding-left: 2px;
        margin: auto;
        text-align: left;
        margin-top: 2%;
        & li{
            text-align: left;
            margin-left: 30%;
        }
    `
}