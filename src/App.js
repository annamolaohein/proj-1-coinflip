import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: " ",
      coin: "coin"
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
    return <div className="coin">
      <div id="coin">
        {
          this.state.show === "tail" &&
          <div className='tail'>
            <h2>TAIL</h2>
          </div>
        }

        {
          this.state.show === "head" &&
          <div className="head">
            <h2>HEAD</h2>
          </div>
        }
      </div>
      <h1>Flip a coin</h1>
      <button id="coin_btn" onClick={this.coinFlip}>
        Flip Coin
      </button>
      
    </div>
  }

}

export default App;
