import React from "react";
import { Link } from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { menuItems } from "./menu.items";

const MenuItems = () => (
    menuItems.map(({ id, name, icon, componentUrl }) => {
        return (
          <Link className="option" to={componentUrl}>
            <ListItem button key={id}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          </Link>
        );
      })      
);

export default MenuItems;
