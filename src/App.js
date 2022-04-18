import React, { Component } from "react";
import "./App.css";
import Home from "./pages/Home";
// import { HomePage } from "./pages/HomePage";



class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <HomePage /> */}
        <Home/>
      </div>


    );
  }
}

export default App;
