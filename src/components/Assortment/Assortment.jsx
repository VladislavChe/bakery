import React from 'react';
import styles from './Assortment.module.scss';
import AssortmentCard from './AssortmentCard/AssortmentCard';

const Assortment = (props) => {
  return (
    <div className={styles.assortment}>
      <h2 className={styles.title}>наш ассортимент</h2>
      <AssortmentCard />
    </div>
  );
};

export default Assortment;
