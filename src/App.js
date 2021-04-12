
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Logement from './components/Logement';
import Localisation from './components/Localisation'

function App() {
  return (
    <div className="App">
      <Header />
      <Logement />
      <Localisation />

    </div>
  );
}

export default App;
