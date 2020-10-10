import React from 'react';
import { func } from 'prop-types';
import PaymentForm from 'components/payment-form';

const AddView = ({ createPayment }) => (
  <PaymentForm
    onClick={createPayment}
    title="Enter your details"
    description="Keep track of your household spending by adding your bills"
    buttonMessage="Add new payment"/>
);

AddView.propTypes = { createPayment: func.isRequired };

export default AddView;
