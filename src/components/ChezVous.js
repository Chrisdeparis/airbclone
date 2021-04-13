import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './chezvous.css';
import Appart from './Appart';
import ChezVousImage from './ChezVousImage';

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

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment >
      
        <div  className="chez__vous">
          <h2 className="chezvous__title">Chez vous, partout</h2>
          <div className="chezvous__grid">
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <ChezVousImage />
                <p>Des Logemnts entiers</p>
              </Grid>
              <Grid item xs={12} md={3}>
                <ChezVousImage />
                <p>Des logements uniques</p>
              </Grid>
              <Grid item xs={12} md={3}>
                <ChezVousImage />
                <p>Ferme et nature</p>
              </Grid>
              <Grid item xs={12} md={3}>
                <ChezVousImage />
                <p>Animaux de compagnie acceptés</p>
              </Grid> 
            </Grid>
          </div>
        </div>
        
        
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
        
      </Grid>
    </div>
  );
}

