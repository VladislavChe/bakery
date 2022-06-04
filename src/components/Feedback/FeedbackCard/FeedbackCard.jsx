import React from 'react';
import Client1 from '../../../img/client1.png';
import Start from '../../../img/star.png';
import styles from './FeedbackCard.module.scss';

const FeedbackCard = (props) => {
  return (
    <div className={styles.feedbackCard}>
      <div className={styles.left}>
        <img src={Client1} alt="photo Client" />
      </div>
      <div className={styles.body}>
        <h4 className={styles.name}>Мария</h4>
        <p className={styles.text}>
          Заказала чизкейк вместо торта на день рождения. Это было лучшим решением! Чизкейк
          невероятно вкусный! Теперь буду заказывать только тут!
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <img src={Start} alt="Start" />
          </li>
          <li className={styles.item}>
            <img src={Start} alt="Start" />
          </li>
          <li className={styles.item}>
            <img src={Start} alt="Start" />
          </li>
          <li className={styles.item}>
            <img src={Start} alt="Start" />
          </li>
          <li className={styles.item}>
            <img src={Start} alt="Start" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeedbackCard;
