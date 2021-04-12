import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DateArrivee from './DateArrivee';
import DateDepart from './DateDepart';
import Adulte from './Adulte';
import Enfant from './Enfant'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <DateArrivee />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DateDepart />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Adulte />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Enfant />
        </Grid>
      </Grid>
    </div>
  );
}
