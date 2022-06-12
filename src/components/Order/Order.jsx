import React from 'react';
import CheckMark from '../../img/check-mark.png';
import Cake from '../../img/order-cake.png';
import Button from '../aditional/Button/Button';
import styles from './Order.module.scss';

const Order = (props) => {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <div className={styles.order}>
      <h2 className={styles.title}>Оформить заказ</h2>
      <div className={styles.body}>
        <form className={styles.form} action="submit">
          <input type="text" placeholder="Имя" name="name" required />
          <input type="tel" placeholder="Телефон" name="phone" required />
          <input type="email" placeholder="E-mail" name="email" required />
          <label className={styles.checkboxWrapp}>
            <input type="checkbox" required onChange={() => setIsChecked(!isChecked)} />
            {isChecked ? (
              <span className={styles.checkbox}></span>
            ) : (
              <img className={styles.checked} src={CheckMark} alt="CheckMark" />
            )}
            <p className={styles.checkBoxText}>
              Я согласен(-на) на обработку моих персональных данных{' '}
            </p>
          </label>
          <Button />
        </form>
        <img className={styles.cake} src={Cake} alt="Cake" />
      </div>
    </div>
  );
};

export default Order;
