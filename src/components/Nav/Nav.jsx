import React from 'react';
import Logo from '../../img/logo.png';
import { ReactComponent as Phone } from '../../img/phone.svg';
import styles from './Nav.module.scss';

const Nav = (props) => {
  const [active, setActive] = React.useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <img className={styles.logo} src={Logo} alt="logo" />
        <ul className={`${styles.navMenu} ${active && styles.navMenuActive}`}>
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
          {props.socialIcons ? (
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
          ) : (
            <div className={styles.alert}>Заказать бесплатный звонок</div>
          )}
        </div>
        <div
          onClick={() => setActive(!active)}
          className={`${styles.hamburger} ${active ? styles.hamburgerActive : ''}`}>
          <div className={styles.centerLine}></div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
