import "./App.css";
import Header from "./Components/Header";
import Fotter from "./Components/Fotter";
import { Switch, Route } from "react-router-dom";
import Notes from "./Components/Notes";
import Home from "./Components/Home";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Route path="/" component={Home} />
      <Route path="/sentences" component={Notes} />
      <Fotter />
    </React.Fragment>
  );
}

export default App;
