import React from "react";
import { Link } from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppTwoTone from "@material-ui/icons/ExitToAppTwoTone";

const SignOutItem = () => (
  <div className="sign-out">
    <Link className="option" to="/shop">
      <ListItem button key="7">
        <ListItemIcon>
          <ExitToAppTwoTone htmlColor="white" />
        </ListItemIcon>
        <ListItemText primary="Sign Out" />
      </ListItem>
    </Link>
  </div>
);

export default SignOutItem;