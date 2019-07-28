import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function CreateAppointment() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const classes = useStyles();
  const [values, setValues] = React.useState({
    purpose: "",
    name: "hai"
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
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Create Appointment
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create Appointment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To set/create an appoint, please fill the appointment information
            below and click create to set appointment. We will send updates
            occasionally.
          </DialogContentText>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="standard-name"
              label="First Name"
              className={classes.textField}
              onChange={handleChange("firstName")}
              margin="normal"
              required
            />
            <TextField
              id="standard-name"
              label="Last Name"
              className={classes.textField}
              onChange={handleChange("lastName")}
              margin="normal"
              required
            />
            <TextField
              id="standard-name"
              label="Phone Number"
              type="phone"
              className={classes.textField}
              onChange={handleChange("phoneNumber")}
              margin="normal"
              required
            />
            <TextField
              id="standard-name"
              label="Email"
              type="email"
              className={classes.textField}
              onChange={handleChange("phoneNumber")}
              margin="normal"
            />
            <TextField
              id="standard-name"
              label="Organization/Company"
              className={classes.textField}
              onChange={handleChange("phoneNumber")}
              margin="normal"
            />
            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="purpose">Staff/Employee</InputLabel>
            <Select
              value={values.purpose}
              onChange={handleChange}
              inputProps={{
                name: "purpose",
                id: "purpose"
              }}
              required
            >
              <MenuItem value="meeting">Meeting</MenuItem>
              <MenuItem value="interview">Interview</MenuItem>
              <MenuItem value="personal">Personal</MenuItem>
            </Select>
          </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="purpose">Purpose of Visit</InputLabel>
              <Select
                value={values.purpose}
                onChange={handleChange}
                inputProps={{
                  name: "purpose",
                  id: "purpose"
                }}
                required
              >
                <MenuItem value="meeting">Meeting</MenuItem>
                <MenuItem value="interview">Interview</MenuItem>
                <MenuItem value="personal">Personal</MenuItem>
              </Select>
            </FormControl>
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
