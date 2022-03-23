import React from "react";
import { ClassCoinFlip } from "../component/ClassCoinFlip";
import { CoinFlip } from "../component/CoinFlip";

export const HomePage = () => {
  return (
    <div className="HomePage">
      <h1>Home Page</h1>
      <ClassCoinFlip />
      <hr />
      <CoinFlip />
    </div>
  );
};
