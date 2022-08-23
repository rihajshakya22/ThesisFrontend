import React from "react";
import {
  BrowserRouter as Router,
  // Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import ProductDisplay from "../mainApp/components/ProductDisplay";
import main from "../mainApp/pages/main";

const UserRoute = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={main} />
          <Route exact path="/search/:keyword" component={main} />
          <Route exact path="/products/:id" component={ProductDisplay} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
};

export default UserRoute;
