import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
  return (
    <div className={styles.btn}>
      <button type="submit">Заказать</button>
    </div>
  );
};

export default Button;
