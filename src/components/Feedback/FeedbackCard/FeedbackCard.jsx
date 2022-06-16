import Star from '../../../img/star.png';
import styles from './FeedbackCard.module.scss';

const FeedbackCard = (props) => {
  return (
    <div className={styles.feedbackCard}>
      <div className={styles.left}>
        <img src={props.item.img} alt="photo Client" />
      </div>
      <div className={styles.body}>
        <h4 className={styles.name}>{props.item.name}</h4>
        <p className={styles.text}>{props.item.text}</p>
        <ul className={styles.list}>
          {props.item.stars.map((item, index) => (
            <li key={index} className={styles.item}>
              <img src={Star} alt="Star" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeedbackCard;
