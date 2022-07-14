import { Component } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styles from './Feedback.module.scss';
import FeedbackCard from './FeedbackCard/FeedbackCard';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      accessibility: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
            adaptiveHeight: true,
          },
        },
      ],
    };

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
