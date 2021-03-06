import React, { FC, createContext, useReducer, Reducer } from "react";
import { Router, Route } from "react-router-dom";
import Home from "./Pages/Home/Home"
import {createBrowserHistory} from "history"
import {UserContextInterface, ActionInterface} from "./Interfaces"
import Dashboard from "./Pages/Dashboard/Dashboard";
import Account from "./Pages/Account/Account";

export const history = createBrowserHistory();

const initState: UserContextInterface = {
    username:"",
    firstName:"",
    lastName:"",
}

const reducer = (state:UserContextInterface, action: ActionInterface) => {
  const {type, payload} = action;
  
  switch (type){
      case "SET_USER":
          return {...state , ...payload}
      default:
          return initState;
  }
}

export const UserContext = createContext<any>(initState);

  const App:FC = () => {
    
    const [state, dispatch] = useReducer<Reducer<UserContextInterface,ActionInterface>>(reducer, initState);
    return(
      <UserContext.Provider value = {{userInfo:state, dispatch}}>
        <Router history={history}>
          <Route exact path="/" component={Home}/>
          <Route path="/account" component={Account}/>
          <Route path="/dashboard" component={Dashboard}/>
        </Router>
      </UserContext.Provider>
    )
}

export default App;