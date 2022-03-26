
import "./CoinFlip.css"

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
        <div className='NeatBirthday'>
            <h1>The Neat Birthday List</h1>
            <div>
                {show}
            </div>
        </div>
    )
}
