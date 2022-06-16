import About from './components/About/About';
import Advantages from './components/Advantages/Advantages';
import AssortmentContainer from './components/Assortment/AssortmentContainer';
import FeedbackContainer from './components/Feedback/FeedbackContainer';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Order from './components/Order/Order';
import Berries from './img/berries-bg.png';
import Strawberries from './img/srawberries-bg.png';
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
        <img className="berriesBG" src={Berries} alt="berries" />
        <div className="container">
          <AssortmentContainer />
        </div>
        <img className="strawberries" src={Strawberries} alt="Strawberries" />
        <div className="container">
          <FeedbackContainer />
          <Order />
          <Footer />
        </div>
      </div>
      <img className="blotter" src={require('./img/blotter.png')} />
    </div>
  );
}

export default App;
