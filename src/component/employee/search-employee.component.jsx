import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    marginTop: 16
  },
  formControlDateTime: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginTop: 16
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  button: {
    marginLeft: 1,
    height: 35,
    marginTop: 25
  },
  searchParper: {
    padding: 16,
    paddingTop: 1
  }
}));

export default function EmployeeSearch() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        employee: ""
      });
    
    function handleChange(event) {
        if (event.target !== undefined) {
          setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value
          }));
          console.log(event.target.value);
        }
      }
  return (
    <div className="search">
      <Paper className={classes.searchParper}>
        <h3>Search</h3>
        <form noValidate autoComplete="off">
          <TextField
            id="standard-name"
            label="First Name"
            className={classes.textField}
            onChange={handleChange("firstName")}
            margin="normal"
          />
          <TextField
            id="standard-name"
            label="Last Name"
            className={classes.textField}
            onChange={handleChange("lastName")}
            margin="normal"
          />
          <TextField
            id="standard-name"
            label="Phone Number"
            type="phoneNumber"
            className={classes.textField}
            onChange={handleChange("phoneNumber")}
            margin="normal"
          />
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="department">Department</InputLabel>
            <Select
              value={values.department}
              onChange={handleChange}
              inputProps={{
                name: "department",
                id: "department"
              }}
            >
              <MenuItem value="meeting">Meeting</MenuItem>
              <MenuItem value="interview">Interview</MenuItem>
              <MenuItem value="personal">Personal</MenuItem>
            </Select>
          </FormControl>
         
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Search
          </Button>
        </form>
      </Paper>
    </div>
  );
}
