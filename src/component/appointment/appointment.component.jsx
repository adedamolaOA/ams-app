import React from "react";
import "./appointment.style.scss";
import AMSTable from "../table/table.component";
import Search from "./search/search.component";
import CreateAppointment from "./create-appointment.component";
import { Divider } from "@material-ui/core";

export default function Appointment() {
  return (
    <div className="appointment">
      <h2>Appointments</h2>
      <Divider />
      <br />
      <div className="content">
        <CreateAppointment />
        <Search />
        <AMSTable />
      </div>
    </div>
  );
}
