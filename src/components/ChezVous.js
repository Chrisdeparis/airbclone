import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "./chezvous.css";
import Appart from "./Appart";
import ChezVousImage from "./ChezVousImage";
import ChezVousImage2 from "./ChezVousImage2";
import ChezVousImage3 from "./ChezVousImage3";
import ChezVousImage4 from "./ChezVousImage4";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1180,
    marginLeft: 80,
    fontWeight: "bold",
    color: "#222222",
    fontSize: 17,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <div className="chez__vous">
          <h2 className="chezvous__title">Chez vous, partout</h2>
          <div className="chezvous__grid">
            <Grid container spacing={6}>
              <Grid item xs={6} md={3}>
                <ChezVousImage />
                <p>Logements entiers</p>
              </Grid>
              <Grid item xs={6} md={3}>
                <ChezVousImage2 />
                <p>Des logements uniques</p>
              </Grid>
              <Grid item xs={6} md={3}>
                <ChezVousImage3 />
                <p>Ferme et nature</p>
              </Grid>
              <Grid item xs={6} md={3}>
                <ChezVousImage4 />
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
