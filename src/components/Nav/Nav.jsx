import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../../img/logo.png';
import { ReactComponent as Phone } from '../../img/phone.svg';
import styles from './Nav.module.scss';

const Nav = (props) => {
  const [active, setActive] = React.useState(false);

  return (
    <div>
      <nav className={`${styles.nav} ${styles[`nav--${props.theme}`]}`}>
        <img className={styles.logo} src={Logo} alt="logo" />
        <ul className={`${styles.navMenu} ${active && styles.navMenuActive}`}>
          <li>
            <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
              О нас
            </Link>
          </li>
          <li>
            <Link to="assortment" spy={true} smooth={true} offset={0} duration={500}>
              Ассортимент
            </Link>
          </li>
          <li>
            <Link to="feedback" spy={true} smooth={true} offset={0} duration={500}>
              Отзывы
            </Link>
          </li>
          <li>
            <Link to="advantages" spy={true} smooth={true} offset={-50} duration={500}>
              Доставка
            </Link>
          </li>
          <li>
            <Link to="order" spy={true} smooth={true} offset={0} duration={500}>
              Контакты
            </Link>
          </li>
        </ul>
        <div className={`${styles.callbackBlock} ${styles[`callbackBlock--${props.theme}`]}`}>
          <div>
            <Phone />
            <a href="tel:88009998877">8 (800) 999 88 77</a>
          </div>
          {props.theme === 'header' && (
            <div className={styles.alert}>Заказать бесплатный звонок</div>
          )}
          {props.theme === 'footer' && (
            <div className={styles.socialIcons}>
              <a target="_blank" href="https://twitter.com/" rel="noreferrer">
                <img
                  className={styles.icon}
                  src={require('../../img/icon-twitter.png')}
                  alt="copyright-icon"
                />
              </a>
              <a target="_blank" href="https://ru-ru.facebook.com/" rel="noreferrer">
                <img
                  className={styles.icon}
                  src={require('../../img/icon-facebook.png')}
                  alt="copyright-icon"
                />
              </a>
              <a target="_blank" href="https://web.telegram.org/" rel="noreferrer">
                <img
                  className={styles.icon}
                  src={require('../../img/icon-telegramm.png')}
                  alt="copyright-icon"
                />
              </a>
            </div>
          )}
        </div>
        {props.theme === 'header' && (
          <div
            className={`${styles.hamburger} ${active ? styles.hamburgerActive : ''}`}
            onClick={() => setActive(!active)}>
            <div className={styles.centerLine}></div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
