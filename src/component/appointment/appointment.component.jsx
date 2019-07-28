import React from "react";
import "../styles/component.style.scss";
import AMSTable from "../table/table.component";
import Search from "./search-appointment.component";
import CreateAppointment from "./create-appointment.component";
import { AppBar } from "@material-ui/core";

export default function Appointment() {
  return (
    <div className="appContent">
      <AppBar position="static">
        <h3 styles={{marginTop: 16}}>Appointment</h3>
      </AppBar>

      <br />
      <div className="content">
        <CreateAppointment />
        <Search />
        <AMSTable />
      </div>
    </div>
  );
}
