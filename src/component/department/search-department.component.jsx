import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import '../styles/component.style.scss';

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
      paddingTop: 1,
    }
  }));

export default function DepartmentSearch (){
    const classes = useStyles();
    
    function handleChange(event) {
        if (event.target !== undefined) {
          /*setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value
          }));*/
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
          label="Department Name"
          className={classes.textField}
          onChange={handleChange("firstName")}
          margin="normal"
        />
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