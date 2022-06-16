import Nav from '../Nav/Nav';
import styles from './Footer.module.scss';

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <Nav socialIcons={true} />
      <div className={styles.copyright}>
        <img
          className={styles.icon}
          src={require('../../img/copyright-icon.png')}
          alt="copyright-icon"
        />
        <p className={styles.text}>2022 Кондитерская «Bakery». Все права защищены. </p>
      </div>
    </div>
  );
};

export default Footer;
