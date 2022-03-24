import React from "react";
import { Count_Apple } from "../component/Count_Apple";
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
      <hr/>
      <Count_Apple/>
    </div>
  );
};
