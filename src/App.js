import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./Main";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Mission from "./Mission";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/mission" component={Mission} />
        <Route path="/" component={Main} />
        <Route Redirect="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
