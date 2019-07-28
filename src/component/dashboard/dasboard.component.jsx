import React from "react";
import Summary from "./summary/summary.component";
import AMSTable from "../table/table.component";
import { AppBar } from "@material-ui/core";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="dashboard">
        <AppBar position="static">
          <h3>Dashboard</h3>
        </AppBar>
        <br />
        <h3>Visit Summary</h3>
        <Summary />
        <br />
        <AMSTable />
      </div>
    );
  }
}

export default Dashboard;
