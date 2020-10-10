import React from 'react';
import { navigate } from 'gatsby';
import { func, shape } from 'prop-types';
import PaymentForm from 'components/payment-form';

import paymentModel from 'models/payment';

const EditView = ({ payment = null, updatePayment, deletePayment }) => {
  if (!payment) {
    navigate('/');
  }
  const { name = '' } = payment || {};
  return (
  <PaymentForm
    payment={payment}
    onClick={updatePayment}
    onDelete={deletePayment}
    title={name}
    description="If you'd like to edit your bill you can change the details below"
    buttonMessage="Save"/>
  );
};

EditView.propTypes = {
  payment: shape(paymentModel),
  updatePayment: func.isRequired,
  deletePayment: func.isRequired,
};

export default EditView;
