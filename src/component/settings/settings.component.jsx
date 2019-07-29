import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Department from "../department/department.component";
import Employee from '../employee/employee.component';
import UserPermission from '../users/user-permissions.component';
import '../styles/component.style.scss';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,    
  overflow: "hidden"
  }
}));

export default function Settings() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
      <h3 style={{marginLeft: 10}}>Settings</h3>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          className="tab"
        >
          <Tab label="General" {...a11yProps(0)} />
          <Tab label="Department" {...a11yProps(1)} />
          <Tab label="Employee" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <UserPermission/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Department />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Employee/>
      </TabPanel>
    </div>
  );
}
