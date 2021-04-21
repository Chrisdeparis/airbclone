import React from 'react';
import {

  makeStyles,

} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from './Grid'
import Recherche from './Recherche';






const useStylesReddit = makeStyles((theme) => ({
  root: {
    width:'100%',
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#fcfcfb',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: '#fff',
    },
    '&$focused': {
      backgroundColor: '#fff',
      border: '3px solid #000',
    },
  },
  focused: {},
}));

function RedditTextField(props) {
  const classes = useStylesReddit();

  return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));



export default function CustomizedInputs() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>   
      <RedditTextField
        label="ADRESSE"
        className={classes.margin}
        defaultValue="France"
        variant="filled"
        fullWidth
      />
      <Grid />
      <Recherche fullWidth />
    </form>
  );
}
