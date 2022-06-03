import React from 'react';
import About from './components/About/About';
import Advantages from './components/Advantages/Advantages';
import Assortment from './components/Assortment/Assortment';
import Header from './components/Header/Header';
import Berries from './img/berries-bg.png';
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <div className="bg">
        <div className="container">
          <Header />
          <Advantages />
          <About />
        </div>
        <img className={'berriesBG'} src={Berries} alt="berries" />
        <div className="container">
          <Assortment />
        </div>
      </div>
    </div>
  );
}

export default App;