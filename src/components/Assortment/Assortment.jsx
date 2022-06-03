import React from 'react';
import styles from './Assortment.module.scss';
import AssortmentCard from './AssortmentCard/AssortmentCard';

const Assortment = ({ assortment, limit, setLimit }) => {
  const showMore = () => {
    setLimit(limit + 3);

    console.log(assortment.slice(0, limit).length);
  };
  return (
    <div className={styles.assortment}>
      <h2 className={styles.title}>наш ассортимент</h2>
      <ul className={styles.list}>
        {assortment.slice(0, limit).map((obj, index) => (
          <li className={styles.item} key={`${obj} ${index}`}>
            <AssortmentCard
              img={obj.img}
              title={obj.title}
              description={obj.description}
              price={obj.price}
            />
          </li>
        ))}
      </ul>
      <div
        className={
          assortment.slice(0, limit).length === assortment.length
            ? `${styles.more} ${styles.noMore}`
            : styles.more
        }>
        <span onClick={showMore}>Смотреть еще</span>
      </div>
    </div>
  );
};

export default Assortment;
