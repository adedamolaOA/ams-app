import React from "react";
import Summary from "./summary/summary.component";
import AMSTable from "../table/table.component";
import { Divider } from "@material-ui/core";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="dashboard">
        <h2>Dashboard</h2>
        <Divider/>
        <br/>
        <h3>Visit Summary</h3>
        <Summary />
        <br/>
        <AMSTable/>
      </div>
    );
  }
}

export default Dashboard;
