import React from 'react';
import Cake from '../../img/photo-cake.png';
import Girl from '../../img/photo-girl.png';
import styles from './About.module.scss';

const About = (props) => {
  return (
    <div className={styles.about}>
      <div className={styles.info}>
        <h2 className={styles.title}>О нас</h2>
        <p className={styles.text}>
          Наша кондитерская специализируется на приготовлении вкусных и полезных чизкейков
          собственного приготовления уже 5 лет. У нас только профессиональные кондитеры с богатым
          опытом. Мы используем в приготовлении только качественные, экологичные и свежие продукты.
        </p>
        <p className={styles.text}>
          У нас вы всегда можете заказать аппетитные чизкейки, отличающееся великолепным вкусом и
          ароматом. Нас рекомендуют друзьям и знакомым: мы делаем кондитерские изделия с особой
          любовью, отличающиеся великолепным вкусом и приемлемой ценой.
        </p>
      </div>
      <div className={styles.photos}>
        <img className={styles.photoCake} src={Cake} alt="Cake" />
        <img className={styles.photoGirl} src={Girl} alt="Girl" />
      </div>
    </div>
  );
};

export default About;
