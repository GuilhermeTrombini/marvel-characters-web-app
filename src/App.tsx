import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Search from "./Search";
import Character from "./Character";
import Home from "./Home";
import { createBrowserHistory } from "history";

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/character">
          <Character />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
