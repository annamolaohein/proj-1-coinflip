import React from "react";
// import { CountApple } from "../component/CountApple";
// // import { ClassCoinFlip } from "../component/ClassCoinFlip";
// import { CoinFlip } from "../component/CoinFlip";
// import { Random } from "../component/Random";
// import { TextMirror } from "../component/TextMirror";
// import { NeatBirthdayList } from "../component/NeatBirthdayList";
// import { DisplayEditList } from "../component/DisplayEditList";
import styled from '@emotion/styled'
// import { EmotionTest } from "../component/EmotionTest";





export const HomePage = () => {
  return (

    <div className="HomePage">

      {/* <EmotionTest/> */}
      <H1>Home Page</H1>
      {/* <ClassCoinFlip />
      <hr /> */}
      {/* <CoinFlip />
      <hr />
      <Random />
      <hr />
      <CountApple />
      <hr />
      <TextMirror />
      <hr />
      <NeatBirthdayList />
      <hr />
      <DisplayEditList /> */}

      <button>

        Flip Coin
      </button>
      <button>Random in Range</button>
      <button>Counting Apples</button>
      <button>Text Mirror</button>
      <button>Neat Birthday List</button>
      <button>Display & Edit List</button>
    </div>


  );
};

const H1 = styled.h1`
/* background-color:green; */
text-decoration: underline overline;
text-decoration-color: rgba(255, 99, 71, 0.8);
text-underline-position: under;
color: rgba(60,60,60);`