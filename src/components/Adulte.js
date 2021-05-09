import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #e2e2e1",
    fontSize: 16,

    transition: theme.transitions.create(["border-color", "box-shadow"]),

    width: 210,
    height: 35,
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#000",
      border: "3px solid #000",
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const CustomizedSelects = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const runCallback = (cb) => {
    return cb();
  };

  return (
    <div className="participant">
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-select-native">ADULTES</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={age}
          label="ADULTES"
          onChange={handleChange}
          variant="filled"
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="" />
          {runCallback(() => {
            const row = [];
            for (let i = 1; i < 17; i++) {
              row.push(<option value={i}>{i}</option>);
            }
            return row;
          })}
        </NativeSelect>
      </FormControl>
    </div>
  );
}

export default CustomizedSelects