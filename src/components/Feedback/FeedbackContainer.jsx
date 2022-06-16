import { connect } from 'react-redux';
import { setTest } from './../../redux/main-reducer';
import Feedback from './Feedback';

const FeedbackContainer = ({ feedback }) => {
  return <Feedback feedback={feedback} />;
};

let mapStateToProps = (state) => {
  return {
    test: state.mainPage.test,
    feedback: state.mainPage.feedback,
  };
};

export default connect(mapStateToProps, { setTest })(FeedbackContainer);
