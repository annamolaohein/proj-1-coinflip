import React from "react";
// import "./ClassCoinFlip.css";

export class ClassCoinFlip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: " ",
      coin: "coin",
    };
    this.coinFlip = this.coinFlip.bind(this);
  }
  coinFlip() {
    this.setState({ coin: " " }, () => {
      if (Math.random() < 0.5) {
        this.setState({ show: "head" });
      } else {
        this.setState({ show: "tail" });
      }
    });
  }
  render() {
    return (
      <div className="ClassCoinFlip">
        <h1>Class Component CoinFlip</h1>
        <div id="coin">
          {/* ternary operator */}
          <div className={this.state.show === "tail" ? "tail" : "head"}>
            <h2>{this.state.show === "tail" ? "TAIL" : "HEAD"}</h2>
          </div>
        </div>
        <button id="coin_btn" onClick={this.coinFlip}>
          Flip Coin
        </button>
      </div>
    );
  }
}
