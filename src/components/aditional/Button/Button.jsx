import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
  return (
    <div className={styles.btn}>
      <a href="#">Заказать</a>
    </div>
  );
};

export default Button;
