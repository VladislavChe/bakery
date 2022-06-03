import { connect } from 'react-redux';
import { setTest } from '../../redux/main-reducer';
import Assortment from './Assortment';

let mapStateToProps = (state) => {
  return {
    test: state.mainPage.test,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    clearText: (newText) => {
      dispatch(setTest(newText));
    },
  };
};

const AssortmentContainer = connect(mapStateToProps, mapDispatchToProps)(Assortment);

export default AssortmentContainer;
