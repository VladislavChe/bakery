import React, { Component } from 'react';
import Slider from 'react-slick';
import styles from './Feedback.module.scss';
import FeedbackCard from './FeedbackCard/FeedbackCard';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
    return (
      <div>
        <h2 className={styles.title}>отзывы НАШИХ КЛИЕНТОВ</h2>
        <Slider {...settings}>
          <div>
            <FeedbackCard />
          </div>
          <div>
            <FeedbackCard />
          </div>
          <div>
            <FeedbackCard />
          </div>
          <div>
            <FeedbackCard />
          </div>
          <div>
            <FeedbackCard />
          </div>
          <div>
            <FeedbackCard />
          </div>
        </Slider>
      </div>
    );
  }
}

// const Feedback = (props) => {
//   return (
//     <div className={styles.feedback}>
//       <h2 className={styles.title}>отзывы НАШИХ КЛИЕНТОВ</h2>
//       <FeedbackCard />
//     </div>
//   );
// };

// export default Feedback;
