import React, { useState, useEffect } from 'react';
import { func, string, shape } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import classnames from 'classnames';
import TextField from '@material-ui/core/TextField';
import StyledButton from 'components/styled-button';

import paymentModel from 'models/payment';

import useStyles from './styles';

const PaymentForm = ({
  onClick,
  onDelete = () => {},
  title,
  description,
  buttonMessage,
  payment = null,
}) => {
  const styles = useStyles();
  const [fieldError, setFieldError] = useState(false);
  const [canDelete, setCanDelete] = useState(false);
  const [form, setForm] = useState({
    name: '',
    amount: '',
    startDate: '',
    frequency: '',
  });

  useEffect(() => {
    if (payment) {
      setForm(payment);
      setCanDelete(true);
    }
    // eslint-disable-next-line
  }, []);

  const {
    name,
    amount,
    startDate,
    frequency,
  } = form;

  const formIsValid = () => name && amount && startDate && frequency;

  return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
      <Grid item className={styles.gridItem}>
        <TextField
          required
          type="text"
          label="Name"
          fullWidth
          margin="normal"
          autoComplete="off"
          aria-label="bill name"
          error={fieldError && !name}
          onChange={(e) => {
            const { target: { value = '' } } = e;
            value.trim();
            setForm({
              ...form,
              name: value,
            });
          }}
          value={name}/>
      </Grid>

      <Grid item className={styles.gridItem}>
        <TextField
          required
          type="text"
          label="Amount"
          fullWidth
          margin="normal"
          autoComplete="off"
          aria-label="bill amount"
          error={fieldError && !amount}
          onChange={(e) => {
            const { target: { value = '' } } = e;
            value.trim();
            setForm({
              ...form,
              amount: value,
            });
          }}
          value={amount}/>
      </Grid>

      <Grid item className={styles.gridItem}>
        <TextField
          required
          type="text"
          label="Start date"
          fullWidth
          margin="normal"
          autoComplete="off"
          aria-label="bill strt date"
          error={fieldError && !startDate}
          onChange={(e) => {
            const { target: { value = '' } } = e;
            value.trim();
            setForm({
              ...form,
              startDate: value,
            });
          }}
          value={startDate}/>
      </Grid>

      <Grid item className={classnames(styles.gridItem, styles.bottomMargin)}>
        <TextField
          required
          type="text"
          label="Frequency"
          fullWidth
          margin="normal"
          autoComplete="off"
          aria-label="bill frequency"
          error={fieldError && !frequency}
          onChange={(e) => {
            const { target: { value = '' } } = e;
            value.trim();
            setForm({
              ...form,
              frequency: value,
            });
          }}
          value={frequency}/>
      </Grid>

      <Grid item className={styles.gridItem}>
        <StyledButton message={buttonMessage}
        onClick={() => {
          if (formIsValid()) {
            setFieldError(false);
            onClick(form);
          } else {
            setFieldError(true);
          }
        }}
        aria={buttonMessage}/>
      </Grid>

      {canDelete && (
        <Grid item className={classnames(styles.gridItem, styles.topMargin)}>
          <StyledButton message="Delete"
          onClick={() => onDelete(payment)}
          aria="delete bill"
          isDelete/>
        </Grid>
      )}
    </Grid>
  );
};

PaymentForm.propTypes = {
  onClick: func.isRequired,
  onDelete: func,
  title: string.isRequired,
  description: string.isRequired,
  buttonMessage: string.isRequired,
  payment: shape(paymentModel),
};

export default PaymentForm;
