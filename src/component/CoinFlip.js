import { useState } from "react";
import "./CoinFlip.css";

export const CoinFlip = () => {
  const [coin, setCoin] = useState("");
  const coinFlip = () => {
    const random = Math.random() * 10;
    Math.floor(random % 2) === 0 ? setCoin("HEAD") : setCoin("TAIL");
  };
  return (
    <div className="CoinFlip">
      {/* <h1>Function Component CoinFlip</h1> */}
      <h1>CoinFlip</h1>
      <div id="coin">
        <div className={coin === "TAIL" ? "tail" : "head"}>
          <h2>{coin}</h2>
        </div>
      </div>
      <button id="btn" onClick={coinFlip}>
        Flip Coin
      </button>
    </div>
  );
};
