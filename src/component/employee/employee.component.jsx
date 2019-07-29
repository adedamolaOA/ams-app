import React from 'react';
import { Divider } from "@material-ui/core";
import AMSTable from "../table/table.component";
import EmployeeSearch from '../employee/search-employee.component';
import CreateEmployee from '../employee/create-employee.component';
import '../styles/component.style.scss';

export default function Employee() {

    return(
        <div className="appContent">
        <h2>Employee</h2>
        <Divider />
        <br />
        <div className="content">
          <CreateEmployee />
          <EmployeeSearch />
          <AMSTable />
        </div>
      </div>
    );
    
}