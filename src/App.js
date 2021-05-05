import React, {useState, useEffect} from "react"
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header"
import Login from './components/Login'
import AlertCovid from './components/AlertCovid';
import firebase from './firebase'
import styled from 'styled-components'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

function App() {

  const [appartements, setAppartements] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection('appartements');

  {/*function getAppartements() {
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

  const Appartement = styled.div`
    width:730px;
    padding:10px;
    height:250px;
    
    margin:10px 0;
  `;

  const Titre = styled.p`
    font-size:8px;
    color:#efefef;
  `;*/}

  

  return (
    
    <Router>
      <AlertCovid />
      <Header />
      <div className="App">
        {/*{appartements.map((appart) => (
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
        ))}*/}
        

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
