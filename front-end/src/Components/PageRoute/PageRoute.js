import React from "react";
import { Switch, Route } from "react-router-dom";

//Components
import Home from "../Home/Home";
import AboutUs from "../AboutUs/AboutUs";
import Rewards_Profile from "../Rewards/Rewards_Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";

const Routing = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />{" "}
        <Route path="/about" component={AboutUs} />{" "}
        <Route path="/rewards" component={Rewards_Profile} />{" "}
        <Route path="/register" component={Register} />{" "}
        <Route path="/login" component={Login} />{" "}
      </Switch>{" "}
    </div>
  );
};

export default Routing;
