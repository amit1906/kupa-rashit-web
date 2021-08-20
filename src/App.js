import "./App.css";
import Header from "./Components/Header";
import Fotter from "./Components/Fotter";
import { Route, Redirect } from "react-router-dom";
import Home from "./Components/Home";
import Notes from "./Components/Notes";
import Revenges from "./Components/Revenges";
import Characters from "./Components/Characters";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Route path="/home" component={Home} />
      <Route path="/revenges" component={Revenges} />
      <Route path="/characters" component={Characters} />
      <Route path="/sentences" component={Notes} />

      <Route path="/" dir>
        <Redirect to="/home" />
      </Route>
      <Fotter />
    </React.Fragment>
  );
}

export default App;
