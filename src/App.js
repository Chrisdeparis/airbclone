import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

import AlertCovid from "./components/AlertCovid";
import firebase from "./firebase";
import styled from "styled-components";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Axios from 'axios'



const App = () => {
  const [appartements, setAppartements] = useState([]);
  const [loading, setLoading] = useState(false);
  const [appartTitle, setAppartTitle] = useState('');
  const [appartDescription, setAppartDescription] = useState('');

  useEffect(() => {
    Axios.get('https://localhost:3001/api/get').then((response) => {
      console.log(response);
    });
  }, []);
  
  const submitAppart = () => {
    Axios.post("https://localhost:3001/api/insert", {appartTitle: appartTitle, appartDescription: appartDescription}).then(() => {
      alert("successful insert")
    });
  };

  return (
    <Router>
      <AlertCovid />
      <Header />
      <div className="App">
        <h1>Ajouter un Appartement</h1>
        <div className="form">
          <label htmlFor="">Appart Title : </label>
          <input type="text" name="appartTitle" onChange={(e) => {
            setAppartTitle(e.target.value)
          }} /><br/>
          <label htmlFor="">Appart Description : </label>
          <input type="text" name="appartDescription" onChange={(e) => {
            setAppartDescription(e.target.value)
          }} />
          <button>submit</button>
        </div>
        {appartements.map((appart) => (
          <div className="appartement">
          <img src="" alt=""/>
          <div>
            <div className="appart__title">
              <h2>{appart.title}</h2><FavoriteBorderIcon />
            </div>
            <p>description</p>
            <p>conditions</p>
            <p>4,83 étoiles </p>
            <p><strong>71€</strong> / nuit</p>
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
