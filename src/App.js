import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Appartements from './components/Appartements'
import AlertCovid from "./components/AlertCovid";
import firebase from "./firebase";
import styled from "styled-components";
import Axios from 'axios'



const App = () => {
  const [appartements, setAppartements] = useState([]);
  const [loading, setLoading] = useState(false);
  const [appartList, setAppartList] = useState([])
  const [appartTitle, setAppartTitle] = useState('');
  const [appartDescription, setAppartDescription] = useState('');
  const [appartCondition, setAppartCondition] = useState('');
  const [appartEtoile, setAppartEtoile] = useState('');
  const [appartPrix, setAppartPrix] = useState('');


  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
     setAppartList(response.data)
    });
  }, []);
  
  const submitAppart = (e) => {
    
    Axios.post("http://localhost:3001/api/insert", {
      appartTitle: appartTitle,
      appartDescription: appartDescription,
      appartCondition: appartCondition,
      appartEtoile: appartEtoile,
      appartPrix: appartPrix
    }).then(() => {
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
          <label htmlFor="">Appart Condition : </label>
          <input type="text" name="appartCondition" onChange={(e) => {
            setAppartCondition(e.target.value)
          }} />
          <label htmlFor="">Appart Etoile : </label>
          <input type="text" name="appartEtoile" onChange={(e) => {
            setAppartEtoile(e.target.value)
          }} />
          <label htmlFor="">Appart Prix : </label>
          <input type="text" name="appartPrix" onChange={(e) => {
            setAppartPrix(e.target.value)
          }} />
          <button onClick={submitAppart}>submit</button>
        </div>
        <Appartements />
        

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
