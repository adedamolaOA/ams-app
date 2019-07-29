import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";

export default function UserPermission() {
  const [state, setState] = React.useState({
    recieveAppointmentNotification: false,
    automaticallyAcceptVisitionRequest: false,
    actviateApp: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  return (
    <div>
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Appointments</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={state.recieveAppointmentNotification}
                  onChange={handleChange("recieveAppointmentNotification")}
                  value="recieveAppointmentNotification"
                />
              }
              label="Recieve Appointment Notification"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={state.automaticallyAcceptVisitionRequest}
                  onChange={handleChange("automaticallyAcceptVisitionRequest")}
                  value="automaticallyAcceptVisitionRequest"
                />
              }
              label="Automatically Accept Visition Request"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={state.antoine}
                  onChange={handleChange("actviateApp")}
                  value="actviateApp"
                />
              }
              label="Actviate AMS App"
            />
          </FormGroup>
          <FormHelperText>Be careful</FormHelperText>
        </FormControl>
      </div>
      
    </div>
  );
}
