import React from "react";
import { Switch, Route } from "react-router-dom";
import SideMenu from "../component/side-menu/side-menu.component";
import "./app.style.scss";
import Dashboard from "../component/dashboard/dasboard.component";
import Appointment from "../component/appointment/appointment.component";

const AppPage = () => (
  <div className="app-page">
    <SideMenu />
    <div className="content">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/appointments" component={Appointment} />
      </Switch>
    </div>
  </div>
);
export default AppPage;
