import { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


export const CoinFlip = () => {

  const [coin, setCoin] = useState("");
  const coinFlip = () => {
    const random = Math.random() * 10;
    Math.floor(random % 2) === 0 ? setCoin("HEAD") : setCoin("TAIL");
  };
  return (
    <div>

      <h1 css={styles.heading1}>CoinFlip</h1>
      <div id="coin" css={styles.myDiv}>
        <div className={coin === "TAIL" ? "tail" : "head"}>
          <h2 className="heading2">{coin}</h2>
        </div>
      </div>
      <button id="btn" onClick={coinFlip} css={styles.btn}>
        Flip Coin
      </button>

    </div>
  );
};

const styles = {
  heading1: css`
      color: darkcyan;
  `,
  myDiv: css`
  width: 100px;
   height: 100px;
   margin: auto;
   position: relative;
   & .tail{
    background-color: red;
    text-align: center;
    color: white;
   }
   & .head{
    background-color: green;
    text-align: center;
    color: white;
   }
   & .heading2{
    font-family: "Times New Roman", Times, serif;
   }
  `,
  btn: css`
   color:darkblue;
     padding: 10px 20px;
     font-size: 0.5;
     font-weight: bold;
     &:hover{color: darkcyan;}
  `
}
// const Div = styled.div`
//  #coin{
//    width: 100px;
//    height: 100px;
//    margin: auto;
//    position: relative;
//  }
//  .tail {
//    background-color: red;
//    text-align: center;
//    color: white;
//  }
//  .head {
//    background-color: green;
//    text-align: center;
//    color: white;
//  }
//  .heading1{
//   color: darkcyan;
//   /* @media (min-width: 420px) {
//         font-size: 50px;
//       } */
//  }
//  .heading2{
//   font-family: "Times New Roman", Times, serif;
//  }
//   #btn{
//     color:darkblue;
//     padding: 10px 20px;
//     font-size: 0.5;
//     font-weight: bold;
//     &:hover{color: darkcyan;}
//   }
//  `


