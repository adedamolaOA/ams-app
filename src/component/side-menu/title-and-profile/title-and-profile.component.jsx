import React from "react";
import Divider from "@material-ui/core/Divider";
import "../../styles/component.style.scss";

const TitleAndProfile = () => (
  <div className="title-and-profile">
    <div className="profile">
      <h2>Appointment Management System</h2>
      <span>Department Administrator</span>
      <br />
      <span>Adedamola Adeleke</span>
    </div>
    <br />
    <Divider
      style={{
        backgroundColor: "aliceblue"
      }}
    />
  </div>
);

export default TitleAndProfile;
