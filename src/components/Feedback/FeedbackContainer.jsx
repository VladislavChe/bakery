import React from 'react';
import { connect } from 'react-redux';
import { setTest } from './../../redux/main-reducer';
import Feedback from './Feedback';

const FeedbackContainer = () => {
  return <Feedback />;
};

let mapStateToProps = (state) => {
  return {
    test: state.mainPage.test,
    assortment: state.mainPage.assortment,
  };
};

export default connect(mapStateToProps, { setTest })(FeedbackContainer);
