import React from 'react';
import Blueberries1 from '../../img/blueberries1.png';
import Blueberries21 from '../../img/blueberries2-1.png';
import Blueberries22 from '../../img/blueberries2-2.png';
import Blueberries23 from '../../img/blueberries2-3.png';
import Cake from '../../img/cake.png';
import Lavanda1 from '../../img/lavanda1.png';
import Lavanda2 from '../../img/lavanda2.png';
import Logo from '../../img/logo.png';
import { ReactComponent as Phone } from '../../img/phone.svg';
import Button from '../aditional/Button/Button';
import styles from './Header.module.scss';

const Header = (props) => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <img src={Logo} alt="logo" />
        <ul className={styles.navMenu}>
          <li>О нас</li>
          <li>Ассортимент</li>
          <li>Отзывы</li>
          <li>Доставка</li>
          <li>Контакты</li>
        </ul>
        <div className={styles.callbackBlock}>
          <div>
            <Phone />
            <a href="tel:88009998877">8 (800) 999 88 77</a>
          </div>
          <div className={styles.alert}>Заказать бесплатный звонок</div>
        </div>
      </nav>
      <div className={styles.offer}>
        <div className={styles.inner}>
          <h1 className={styles.title}>Вкусные и полезные чизкейки</h1>
          <p className={styles.text}>
            Натуральные и вкусные чизкейки для Вас с бесплатной доставкой по Москве
          </p>
          <Button />
        </div>
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
          <img src={Cake} alt="cake" />
        </div>
      </div>
    </div>
  );
};

export default Header;
