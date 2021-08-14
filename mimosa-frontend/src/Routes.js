import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Menu from "./core/Menu";
import GlobalStyles from './GlobalStyles'
import PrivateRoute from "./auth/PrivateRoute";
import UserDashboard from "./user/UserDashboard";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./user/AdminDashboard";
import AddCategory from "./Admin/AddCategory";
import AddProduct from "./Admin/AddProduct";

const Routes = () => {
  return (
    <BrowserRouter>
    <Menu/>
    <GlobalStyles />
      <Switch>
        <Route path="/signin" exact component={Signin}/>
        <Route path="/signup" exact component={Signup}/>
        <PrivateRoute path='/user/dashboard' exact component={UserDashboard} />
        <AdminRoute path='/admin/dashboard' exact component={AdminDashboard} />
        <AdminRoute path='/create/category' exact component={AddCategory} />
        <AdminRoute path='/create/product' exact component={AddProduct} />
        
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
