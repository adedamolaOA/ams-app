import React from "react";
import { Switch, Route } from "react-router-dom";
import SideMenu from "../component/side-menu/side-menu.component";
import "./app.style.scss";
import Dashboard from "../component/dashboard/dasboard.component";

const AppPage = () => (
  <div className="app-page">
    <SideMenu />
    <div className="content">
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </div>
  </div>
);
export default AppPage;
