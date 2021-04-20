import React, {useState, useEffect} from "react"
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header"
import Login from './components/Login'
import AlertCovid from './components/AlertCovid';
import firebase from './firebase'

function App() {

  const [appartements, setAppartements] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection('appartements');

  function getAppartements() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setAppartements(items);
      setLoading(false);
    })
  }

  useEffect(() => {
    getAppartements();
  },[]);

  if(loading) {
    return <h1>Loading...</h1>
  }

  return (
    <Router>
      <AlertCovid />
      <Header />
      <div className="App">
        <div className="appartements">
          <h1>Appartements</h1>
          {appartements.map((appart) => (
            <div key={appart.id}>
              <h2>{appart.title}</h2>
              <p>{appart.description}</p>
              <p>{appart.address}</p>
            </div>
          ))}
        </div>
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
