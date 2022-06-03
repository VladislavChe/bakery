import React from 'react';
import { connect } from 'react-redux';
import { setTest } from '../../redux/main-reducer';
import Assortment from './Assortment';

const AssortmentContainer = ({ assortment, test, setTest }) => {
  const [limit, setLimit] = React.useState(3);
  return (
    <Assortment
      assortment={assortment}
      test={test}
      setTest={setTest}
      limit={limit}
      setLimit={setLimit}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    test: state.mainPage.test,
    assortment: state.mainPage.assortment,
  };
};

export default connect(mapStateToProps, { setTest })(AssortmentContainer);
