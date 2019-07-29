import React from "react";
import "../styles/component.style.scss";
import AMSTable from "../table/table.component";
import { Divider } from "@material-ui/core";
import CreateUsers from './create-user.component';

export default function User() {
  return (
    <div className="appContent">
      <h2>Users</h2>
      <Divider />
      <br />
      <div className="content">
        <CreateUsers />
        <AMSTable />
      </div>
    </div>
  );
}
