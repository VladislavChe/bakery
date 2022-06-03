import React from 'react';
import styles from './Assortment.module.scss';
import AssortmentCard from './AssortmentCard/AssortmentCard';

const Assortment = (props) => {
  const clearH2 = () => {
    props.clearText('0');
  };
  return (
    <div className={styles.assortment}>
      <h2 className={styles.title}>наш ассортимент</h2>
      <h2>{props.test}</h2>
      <button onClick={clearH2}>Clear</button>
      <AssortmentCard />
    </div>
  );
};

export default Assortment;
