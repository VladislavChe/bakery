import { Link } from 'react-scroll';
import Blueberries1 from '../../img/blueberries1.png';
import Blueberries21 from '../../img/blueberries2-1.png';
import Blueberries22 from '../../img/blueberries2-2.png';
import Blueberries23 from '../../img/blueberries2-3.png';
import Cake from '../../img/cake.png';
import Lavanda1 from '../../img/lavanda1.png';
import Lavanda2 from '../../img/lavanda2.png';
import Srawberries from '../../img/srawberries-bg.png';
import Button from '../aditional/Button/Button';
import Nav from '../Nav/Nav';
import styles from './Header.module.scss';

const Header = (props) => {
  return (
    <div className={styles.header}>
      <Nav theme={'header'} />
      <img className={styles.blueberries21Top} src={Blueberries21} alt="Blueberries" />
      <img className={styles.blueberries22Top} src={Blueberries22} alt="Blueberries" />
      <img className={styles.blueberries23Top} src={Blueberries23} alt="Blueberries" />
      <img className={styles.srawberries} src={Srawberries} alt="Srawberries" />
      <div className={styles.offer}>
        <div className={styles.inner}>
          <h1 className={styles.title}>Вкусные и полезные чизкейки</h1>
          <p className={styles.text}>
            Натуральные и вкусные чизкейки для Вас с бесплатной доставкой по Москве
          </p>
          <Link to="order" spy={true} smooth={true} offset={0} duration={500}>
            <Button />
          </Link>
        </div>
        <div className={styles.cakeWrapp}>
          <div className={styles.cake}>
            <div className={styles.firstOrbite}>
              <img className={styles.cakeImg} src={Blueberries1} alt="Blueberries" />
            </div>
            <div className={styles.secondOrbite}>
              <img className={styles.blueberries21} src={Blueberries21} alt="Blueberries" />
              <img className={styles.blueberries22} src={Blueberries22} alt="Blueberries" />
              <img className={styles.blueberries23} src={Blueberries23} alt="Blueberries" />
              <img className={styles.lavanda1} src={Lavanda1} alt="Lavanda" />
              <img className={styles.lavanda2} src={Lavanda2} alt="Lavanda" />
            </div>
            <img className={styles.bigCake} src={Cake} alt="cake" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
