
import './App.css';

import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header"
import Login from './components/Login'
import AlertCovid from './components/AlertCovid';

function App() {
  return (
    <Router>
      <AlertCovid />
      <Header />
      <div className="App">
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
