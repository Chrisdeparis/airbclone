import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./ExpGrid.css"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const NestedGrid = () => {
  const classes = useStyles();

  const FormRow = () => {
    return (
      <React.Fragment>
        <Grid item xs={12} sm={4}>
            <div className="exp__pic1"></div>
            <h3 className="exp__title"><a href="http:/">Expériences en ligne</a></h3>
            <p className="exp__p"><a href="http:/">Activités interactives en direct, animées par des hôtes.</a></p>
        </Grid>
        <Grid item xs={12} sm={4}>
          
          <div className="exp__pic2">
          </div>
          <h3 className="exp__title"><a href="http:/">Expériences</a></h3>
          <p className="exp__p"><a href="http:/">Prenez part à des activités locales, où que vous soyez.</a></p>
          
          
        </Grid>
        <Grid item xs={12} sm={4}>
        <div className="exp__pic3"></div>
        <h3 className="exp__title"><a href="http:/">Aventures</a></h3>
        <p className="exp__p"><a href="http:/">Partez pour un voyage de plusieurs jours, repas et logement compris.</a></p>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}

export default NestedGrid