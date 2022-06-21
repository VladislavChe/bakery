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
        <div>
          <a
            target="_blank"
            href="https://t.me/TatyanaDesign"
            className={styles.text}
            rel="noreferrer">
            Designed by @tatyana.shillova
          </a>
          <a
            target="_blank"
            href="https://t.me/che_vladislav"
            className={styles.textDev}
            rel="noreferrer">
            Development by @che_vladislav
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
