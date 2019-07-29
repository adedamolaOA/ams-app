import React from "react";
import { Switch, Route } from "react-router-dom";
import SideMenu from "../component/side-menu/side-menu.component";
import "./app.style.scss";
import Dashboard from "../component/dashboard/dasboard.component";
import Appointment from "../component/appointment/appointment.component";
import Department from "../component/department/department.component";
import Employee from '../component/employee/employee.component';
import Settings from '../component/settings/settings.component';
import NotificationMessages from '../component/notification/inbox/notification-messages.component';

const AppPage = () => (
  <div className="app-page">
    <SideMenu />
    <div className="content">
      <Switch>
        <Route exact path="/ams-app/" component={Dashboard} />
        <Route exact path="/ams-app/appointments" component={Appointment} />
        <Route exact path="/ams-app/departments" component={Department} />        
        <Route exact path="/ams-app/employees" component={Employee} />         
        <Route exact path="/ams-app/messages" component={NotificationMessages} />    
        <Route exact path="/ams-app/settings" component={Settings} />
      </Switch>
    </div>
  </div>
);
export default AppPage;
