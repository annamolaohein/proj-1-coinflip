import React from "react";
import { CountApple } from "../component/CountApple";
import { CoinFlip } from "../component/CoinFlip";
import { Random } from "../component/Random";
import { TextMirror } from "../component/TextMirror";
import { NeatBirthdayList } from "../component/NeatBirthdayList";
import { DisplayEditList } from "../component/DisplayEditList";
import styled from '@emotion/styled'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import { EmotionTest } from "../component/EmotionTest";

export const HomePage = () => {
  return (

    <div css={css({marginTop: '3%',})}>
      <H1>Home Page</H1>
      <CoinFlip />
      {/* <hr /> */}
      <Random />
      {/* <hr /> */}
      <CountApple />
      {/* <hr /> */}
      <TextMirror />
      {/* <hr /> */}
      <NeatBirthdayList />
      {/* <hr /> */}
      <DisplayEditList />
    </div>
  );
};

const H1 = styled.h1`
/* background-color:green; */
text-decoration: underline overline;
text-decoration-color: rgba(255, 99, 71, 0.8);
text-underline-position: under;
color: rgba(60,60,60);
margin-bottom: 40px;`