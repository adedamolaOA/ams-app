import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

export default function CreateDepartment() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const classes = useStyles();

  function handleChange(event) {
    if (event.target !== undefined) {
      console.log(event.target.value);
    }
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Create Department
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create Department</DialogTitle>
        <DialogContent>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="standard-name"
              label="Department Name"
              className={classes.textField}
              onChange={handleChange("firstName")}
              margin="normal"
              required
            />
            <TextField
              id="standard-multiline-static"
              label="Descriptions/Note"
              multiline
              rows="4"
              className={classes.textField}
              margin="normal"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexDirection: "column"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
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
      marginTop: 16,
      marginLeft: 0
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
  