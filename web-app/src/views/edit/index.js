import { connect } from 'react-redux';
import { navigate } from 'gatsby';
import { updatePayment, deletePayment } from 'state/payments';
import EditView from './edit';

const mapStateToProps = ({ payments }, { id }) => {
  const payment = payments.find((p) => p.id === parseInt(id, 10));

  return {
    payment,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updatePayment: (payment) => {
    dispatch(updatePayment(payment));
    navigate('/');
  },
  deletePayment: ({ id }) => {
    dispatch(deletePayment(id));
    navigate('/');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditView);
