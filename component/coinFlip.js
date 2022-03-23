import { useState } from 'react';
import './App.css';

    const coinFlip = () => {
    const [coin, setCoin] = useState("");
    const coinFlip = () => {
        const random = Math.random() * 10;
        Math.floor(random % 2) === 0
            ? setCoin("HEAD") : setCoin("TAIL");
    };
    return (
        <div className="coinFlip">
            <div id="coin">
                <div className={coin === "TAIL" ? "head" : "tail"}>
                    <h2> {coin}</h2>
                </div>
            </div>
            <h1> Flip a Coin</h1>
            <button id="btn" onClick={coinFlip}>
                Flip Coin
            </button>
        </div>
    );
}
export default App;