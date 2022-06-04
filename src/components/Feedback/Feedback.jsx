import React from 'react';
import styles from './Feedback.module.scss';
import FeedbackCard from './FeedbackCard/FeedbackCard';

const Feedback = (props) => {
  return (
    <div className={styles.feedback}>
      <h2 className={styles.title}>отзывы НАШИХ КЛИЕНТОВ</h2>
      <FeedbackCard />
    </div>
  );
};

export default Feedback;
