import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";

const useStylesReddit = makeStyles((theme) => ({
  root: {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff",
    },
    "&$focused": {
      backgroundColor: "#fff",
      border: "2px solid #000",
    },
  },
  focused: {},
}));

function RedditTextField(props) {
  const classes = useStylesReddit();

  return (
    <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function DateArrivee() {
  const classes = useStyles();
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2021-09-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="hebergement">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid>
          <KeyboardDatePicker
            className={classes.margin}
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="DÉPART"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </div>
  );
}
