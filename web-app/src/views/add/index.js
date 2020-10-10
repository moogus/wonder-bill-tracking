import { connect } from 'react-redux';
import { navigate } from 'gatsby';
import { createPayment } from 'state/payments';
import AddView from './add';

const mapDispatchToProps = (dispatch) => ({
  createPayment: (payment) => {
    dispatch(createPayment(payment));
    navigate('/');
  },
});

export default connect(null, mapDispatchToProps)(AddView);
