import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

import AlertCovid from "./components/AlertCovid";
import firebase from "./firebase";
import styled from "styled-components";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function App() {
  const [appartements, setAppartements] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("appartements");

  return (
    <Router>
      <AlertCovid />
      <Header />
      <div className="App">
        {appartements.map((appart) => (
          <div className="appartement">
            <img src="" alt="" />
            <div>
              <div className="appart__title">
                <h2>{appart.title}</h2>
                <FavoriteBorderIcon />
              </div>
              <p>description</p>
              <p>conditions</p>
              <p>4,83 étoiles </p>
              <p>
                <strong>71€</strong> / nuit
              </p>
            </div>
          </div>
        ))}

        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
