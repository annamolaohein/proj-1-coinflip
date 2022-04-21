import React, { Component } from "react";
import "./App.css";
// import Home from "./pages/Home";
import Nav from "./pages/Nav";
// import { HomePage } from "./pages/HomePage";



class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <HomePage /> */}
        <Nav/>
      </div>


    );
  }
}

export default App;
