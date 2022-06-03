import React from 'react';
import Cake from '../../../img/assortmentCake1.png';
import Button from '../../aditional/Button/Button';
import styles from './AssortmentCard.module.scss';

const AssortmentCard = (props) => {
  return (
    <div className={styles.assortmentCard}>
      <div className={styles.top}>
        <img src={Cake} alt="photoCake" />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>Творожный с вишней </h3>
        <p className={styles.text}>
          Легкий творожный чизкейк с нежным ванильным вкусом и ярким слоем вишни
        </p>
        <div className={styles.price}>
          <span>500 руб.</span>
          <div className={styles.button}>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssortmentCard;
