import Nav from '../Nav/Nav';
import styles from './Footer.module.scss';

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <Nav theme={'footer'} />
      <div className={styles.copyright}>
        <img
          className={styles.icon}
          src={require('../../img/copyright-icon.png')}
          alt="copyright-icon"
        />
        <div>
          <div className={styles.links}>
            <a
              target="_blank"
              href="https://instagram.com/tatyana.shillova/"
              className={styles.text}
              rel="noreferrer">
              Designed by @tatyana.shillova
            </a>
            <a
              target="_blank"
              href="https://vk.com/vladislav___che"
              className={styles.textDev}
              rel="noreferrer">
              Development by @che_vladislav
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
