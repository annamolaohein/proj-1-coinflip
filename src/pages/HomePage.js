import React from "react";
import { ClassCoinFlip } from "../component/ClassCoinFlip";
import { CoinFlip } from "../component/CoinFlip";
import { Random } from "../component/Random";

export const HomePage = () => {
  return (
    <div className="HomePage">
      <h1>Home Page</h1>
      <ClassCoinFlip />
      <hr />
      <CoinFlip />
      <hr/>
      <Random/>
    </div>
  );
};
