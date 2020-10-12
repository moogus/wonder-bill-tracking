import { connect } from 'react-redux';
import { navigate } from 'gatsby';
import { updatePayment, deletePayment, getPaymentsSelector } from 'state/payments';
import EditView from './edit';

const mapStateToProps = (state, { id }) => ({
  payment: getPaymentsSelector(state, id),
});

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
