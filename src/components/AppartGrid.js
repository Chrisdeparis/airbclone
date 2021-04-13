import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Appart from './Appart'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1180,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={4}>
          <Appart />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Appart />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Appart />
        </Grid>
        
      </Grid>
    </div>
  );
}
