import React from "react";
import { CountApple } from "../component/CountApple";
import { ClassCoinFlip } from "../component/ClassCoinFlip";
import { CoinFlip } from "../component/CoinFlip";
import { Random } from "../component/Random";
import { TextMirror } from "../component/TextMirror";
import { NeatBirthdayList } from "../component/NeatBirthdayList";
import { DisplayEditList } from "../component/DisplayEditList";

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
      <CountApple/>
      <hr/>
      <TextMirror/>
      <hr/>
      <NeatBirthdayList/>
      <hr/>
      <DisplayEditList/>
    </div>
  );
};
