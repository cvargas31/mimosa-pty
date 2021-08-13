import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Menu from "./core/Menu";
import GlobalStyles from './GlobalStyles'

const Routes = () => {
  return (
    <BrowserRouter>
    <Menu/>
    <GlobalStyles />
      <Switch>
        <Route path="/signin" exact component={Signin}/>
        <Route path="/signup" exact component={Signup}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
