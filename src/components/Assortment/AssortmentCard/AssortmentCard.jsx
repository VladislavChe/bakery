import { Link } from 'react-scroll';
import Button from '../../aditional/Button/Button';
import styles from './AssortmentCard.module.scss';

const AssortmentCard = ({ img, title, description, price }) => {
  return (
    <div className={styles.assortmentCard}>
      <div className={styles.top}>
        <img src={img} alt="photoCake" />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{description}</p>
        <div className={styles.price}>
          <span>{price} руб.</span>
          <div className={styles.button}>
            <Link to="order" spy={true} smooth={true} offset={0} duration={500}>
              <Button />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssortmentCard;
