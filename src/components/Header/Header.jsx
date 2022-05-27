import React from 'react';
import Logo from '../../img/logo.png';
import { ReactComponent as Phone } from '../../img/phone.svg';
import Button from '../aditional/Button/Button';
import styles from './Header.module.scss';

const Header = (props) => {
  return (
    <div className={styles.header}>
      {/* <img className={styles.blotter} src={Blotter} alt="blotter" /> */}
      <nav className={styles.nav}>
        <img src={Logo} alt="logo" />
        <ul className={styles.navMenu}>
          <li>О нас</li>
          <li>Ассортимент</li>
          <li>Отзывы</li>
          <li>Доставка</li>
          <li>Контакты</li>
        </ul>
        <div>
          <Phone />
          <a href="tel:88009998877">8 (800) 999 88 77</a>
          <div className={styles.alert}>Заказать бесплатный звонок</div>
        </div>
      </nav>
      <div className={styles.offer}>
        <h1 className={styles.title}>Вкусные и полезные чизкейки</h1>
        <p className={styles.text}>
          Натуральные и вкусные чизкейки для Вас с бесплатной доставкой по Москве
        </p>
        <Button />
      </div>
    </div>
  );
};

export default Header;
