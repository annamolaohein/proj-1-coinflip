import React, { Component } from "react";
import "./App.css";
// import Home from "./pages/Home";
import Pages from "./pages/Pages";
// import { HomePage } from "./pages/HomePage";



class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <HomePage /> */}
        <Pages/>
      </div>


    );
  }
}

export default App;
