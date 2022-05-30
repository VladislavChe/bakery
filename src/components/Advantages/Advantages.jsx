import React from 'react';
import { ReactComponent as Berries } from '../../img/icon-berries.svg';
import { ReactComponent as MiniCake } from '../../img/icon-cake.svg';
import { ReactComponent as Delivery } from '../../img/icon-delivery.svg';
import styles from './Advantages.module.scss';

const Advantages = (props) => {
  const advantages = [
    { img: <MiniCake />, text: ['Аппетитные румяные', 'коржи с нежной начинкой'] },
    { img: <Berries />, text: ['Только свежие', 'ягоды и фрукты'] },
    { img: <Delivery />, text: ['Доставка', 'по всему городу'] },
  ];
  return (
    <div className={styles.advantages}>
      <ul className={styles.list}>
        {advantages.map((item, index) => (
          <li key={index} className={styles.item}>
            <div className={styles.pulsar}>
              {item.img}
              <div className={styles.firstOrbite}></div>
              <div className={styles.secondOrbite}></div>
            </div>
            <p className={styles.text}>
              {item.text.map((obj, index) => (
                <React.Fragment key={index}>
                  {obj + ' '}
                  {index === 0 && <br />}
                </React.Fragment>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Advantages;
