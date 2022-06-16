import { Component } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Client1 from '../../img/client1.png';
import Client2 from '../../img/client2.png';
import styles from './Feedback.module.scss';
import FeedbackCard from './FeedbackCard/FeedbackCard';

// const SimpleSlider2 = ({ feedback }) => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//   };

//   return (
//     <div className={styles.feedback}>
//       <h2 className={styles.title}>ОТЗЫВЫ НАШИХ КЛИЕНТОВ</h2>
//       <Slider {...settings}>
//         {feedback.map((item, index) => (
//           <div key={index}>
//             <FeedbackCard item={item} />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default SimpleSlider2;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
    };

    const clients = [
      {
        img: Client1,
        name: 'Мария',
        text: 'Заказала чизкейк вместо торта на день рождения. Это было лучшим решением! Чизкейк невероятно вкусный! Теперь буду заказывать только тут!',
        stars: [1, 2, 3, 4, 5],
      },
      {
        img: Client2,
        name: 'Анна',
        text: 'Заказала торт вместо чизкейка на день рождения. Это было лучшим решением! Торт невероятно вкусный! Теперь буду заказывать только тут!',
        stars: [1, 2, 3, 4],
      },
      {
        img: Client1,
        name: 'Мария',
        text: 'Заказала чизкейк вместо торта на день рождения. Это было лучшим решением! Чизкейк невероятно вкусный! Теперь буду заказывать только тут!',
        stars: [1, 2, 3, 4, 5],
      },
      {
        img: Client2,
        name: 'Анна',
        text: 'Заказала торт вместо чизкейка на день рождения. Это было лучшим решением! Торт невероятно вкусный! Теперь буду заказывать только тут!',
        stars: [1, 2, 3, 4],
      },
    ];

    return (
      <div className={styles.feedback}>
        <h2 className={styles.title}>ОТЗЫВЫ НАШИХ КЛИЕНТОВ</h2>
        <Slider {...settings}>
          {this.props.feedback.map((item, index) => (
            <div key={index}>
              <FeedbackCard item={item} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
