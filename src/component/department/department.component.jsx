import React from "react";
import "../styles/component.style.scss";
import AMSTable from "../table/table.component";
import DepartmentSearch from "./search-department.component";
import { Divider } from "@material-ui/core";
import CreateDepartment from "./create-department.component";

export default function Department() {
  return (
    <div className="appContent">
      <h2>Departments</h2>
      <Divider />
      <br />
      <div className="content">
        <CreateDepartment />
        <DepartmentSearch />
        <AMSTable />
      </div>
    </div>
  );
}
