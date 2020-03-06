import React, { FC } from "react";
import { Router, Route } from "react-router-dom";
import Home from "./Pages/Home/Home"
import {createBrowserHistory} from "history"
import Register from "./Pages/Register/Register";

export const history = createBrowserHistory();

  const App:FC = () => {

    return(
      <div>
        <Router history={history}>
          <Route exact path="/" component={Home}/>
          <Route path="/create-account" component={Register}/>
        </Router>
      </div>
    )
}

export default App;