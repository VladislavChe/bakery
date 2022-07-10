import About from './components/About/About';
import Advantages from './components/Advantages/Advantages';
import AssortmentContainer from './components/Assortment/AssortmentContainer';
import FeedbackContainer from './components/Feedback/FeedbackContainer';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Order from './components/Order/Order';
import Berries from './img/berries-bg.png';
import Strawberries from './img/srawberries-bg.png';
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container header-container">
          <Nav theme={'header'} />
        </div>
      </header>
      <main>
        <section className="cheesecakes">
          <div className="container cheesecakes-container">
            <Header />
          </div>
        </section>
        <section className="advantages" id="advantages">
          <div className="container advantages-container">
            <Advantages />
          </div>
        </section>
        <section className="about" id="about">
          <div className="container about-container">
            <About />
          </div>
        </section>
        <section className="assortment" id="assortment">
          <div className="container assortment-container">
            <img className="berriesBg" src={Berries} alt="berries" />
            <AssortmentContainer />
          </div>
        </section>
        <section className="feedback" id="feedback">
          <div className="container feedback-container">
            <img className="berriesBg" src={Berries} alt="berries" />
            <img className="strawberries" src={Strawberries} alt="Strawberries" />
            <FeedbackContainer />
          </div>
        </section>
        <section className="order" id="order">
          <div className="container order-container">
            <Order />
          </div>
        </section>
      </main>

      <footer className="footer" id="footer">
        <div className="container footer-container">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
