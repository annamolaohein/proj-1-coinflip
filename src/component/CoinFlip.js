import { useState } from "react";
import "./CoinFlip.css";
import styled from "@emotion/styled";

export const CoinFlip = () => {

  const [coin, setCoin] = useState("");
  const coinFlip = () => {
    const random = Math.random() * 10;
    Math.floor(random % 2) === 0 ? setCoin("HEAD") : setCoin("TAIL");
  };
  return (
    <Div className="CoinFlip">
      {/* <style>
        {
          `
            .CoinFlip #coin {
              width: 100px;
              height: 100px;
              margin: auto;
              position: relative;
            }
            .CoinFlip .tail {
              background-color: red;
              text-align: center;
              color: white;
            }
            .CoinFlip .head {
              background-color: green;
              text-align: center;
              color: white;
            }
            `
        }
      </style> */}
      {/* <h1>Function Component CoinFlip</h1> */}
      <h1 className="heading1">CoinFlip</h1>
      <div id="coin">
        <div className={coin === "TAIL" ? "tail" : "head"}>
          <h2 className="heading2">{coin}</h2>
        </div>
      </div>
      <button id="btn" onClick={coinFlip}>
        Flip Coin
      </button>
      
    </Div>
  );
};
const Div = styled.div`
 #coin{
   width: 100px;
   height: 100px;
   margin: auto;
   position: relative;
 }
 .tail {
   background-color: red;
   text-align: center;
   color: white;
 }
 .head {
   background-color: green;
   text-align: center;
   color: white;
 }
 .heading1{
  color: darkcyan;
  /* @media (min-width: 420px) {
        font-size: 50px;
      } */
 }
 .heading2{
  font-family: "Times New Roman", Times, serif;
 }
  #btn{
    color:darkblue;
    padding: 10px 20px;
    font-size: 0.5;
    font-weight: bold;
    &:hover{color: darkcyan;}
  }
 `
// const Button = styled.button`
// color:darkblue;
// padding: 10px 20px;
// font-size: 0.5;
// font-weight: bold;
// &:hover{color: darkcyan;}`

// const H1 = styled.h1`
// color: darkcyan;`

// const H2 = styled.h2`
//  font-family: "Times New Roman", Times, serif;`

