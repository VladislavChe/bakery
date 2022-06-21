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
      <header className="header">
        <div className="container header-container">
          <Header />
          <img className="blotter" src={require('./img/blotter.png')} />
        </div>
      </header>
      <section className="advantages">
        <div className="container advantages-container">
          <Advantages />
        </div>
      </section>
      <section className="about">
        <div className="container about-container">
          <About />
        </div>
      </section>
      <section className="assortment">
        <div className="container assortment-container">
          <img className="berriesBg" src={Berries} alt="berries" />
          <AssortmentContainer />
        </div>
      </section>
      <section className="feedback">
        <div className="container feedback-container">
          <img className="strawberries" src={Strawberries} alt="Strawberries" />
          <FeedbackContainer />
        </div>
      </section>
      <section className="order">
        <div className="container order-container">
          <Order />
        </div>
      </section>
      <footer className="footer">
        <div className="container footer-container">
          <Footer />
          <img className="blotter" src={require('./img/blotter.png')} />
        </div>
      </footer>
    </div>
  );
}

export default App;
