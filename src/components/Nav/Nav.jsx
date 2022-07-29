import React from 'react';
import { Link } from 'react-scroll';
import { ReactComponent as Facebook } from '../../img/icon-facebook.svg';
import { ReactComponent as Telegramm } from '../../img/icon-telegram.svg';
import { ReactComponent as Twitter } from '../../img/icon-twitter.svg';
import { ReactComponent as Logo } from '../../img/logo.svg';
import { ReactComponent as Phone } from '../../img/phone.svg';
import styles from './Nav.module.scss';

const Nav = (props) => {
  const [active, setActive] = React.useState(false);

  const hamburgerMenuRef = React.useRef();

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  const handleOutsideClick = (e) => {
    if (!e.path.includes(hamburgerMenuRef.current)) {
      setActive(false);
    }
  };

  return (
    <>
      <nav className={`${styles.nav} ${styles[`nav--${props.theme}`]}`}>
        <Link
          href="#"
          className={styles.logo}
          to="header"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}>
          <Logo />
        </Link>

        <ul className={`${styles.navMenu} ${active ? styles.navMenuActive : ''}`}>
          <li>
            <Link href="about" to="about" spy={true} smooth={true} offset={-50} duration={500}>
              О нас
            </Link>
          </li>
          <li>
            <Link
              href="assortment"
              to="assortment"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}>
              Ассортимент
            </Link>
          </li>
          <li>
            <Link
              href="feedback"
              to="feedback"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}>
              Отзывы
            </Link>
          </li>
          <li>
            <Link
              href="advantages"
              to="advantages"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
              Доставка
            </Link>
          </li>
          <li>
            <Link href="order" to="order" spy={true} smooth={true} offset={-50} duration={500}>
              Контакты
            </Link>
          </li>
        </ul>

        <div className={`${styles.callbackBlock} ${styles[`callbackBlock--${props.theme}`]}`}>
          <a
            href="tel:88009998877"
            className={`${styles.phoneWrapp} ${props.theme === 'footer' ? styles.number : ''}`}>
            {props.theme === 'header' && <Phone className={styles.phone} />}8 (800) 999 88 77
          </a>
          {props.theme === 'header' && (
            <div className={styles.alert}>
              <Link href="order" to="order" spy={true} smooth={true} offset={-50} duration={500}>
                Заказать бесплатный звонок
              </Link>
            </div>
          )}
          {props.theme === 'footer' && (
            <div className={styles.socialIcons}>
              <a target="_blank" href="https://twitter.com/" rel="noreferrer">
                <Twitter className={styles.icon} />
              </a>
              <a target="_blank" href="https://ru-ru.facebook.com/" rel="noreferrer">
                <Facebook className={styles.icon} />
              </a>
              <a target="_blank" href="https://web.telegram.org/" rel="noreferrer">
                <Telegramm className={styles.icon} />
              </a>
            </div>
          )}
        </div>
        {props.theme === 'header' && (
          <div
            ref={hamburgerMenuRef}
            className={`${styles.hamburger} ${active ? styles.hamburgerActive : ''}`}
            onClick={() => setActive(!active)}>
            <div className={styles.centerLine}></div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
