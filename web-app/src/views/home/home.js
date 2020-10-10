import React from 'react';
import { arrayOf, shape } from 'prop-types';
import classnames from 'classnames';
import { navigate } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import StyledButton from 'components/styled-button';
import Payment from 'components/payment';

import paymentModel from 'models/payment';

import useStyles from 'views/styles';

const HomeView = ({ payments }) => {
  const styles = useStyles();

  return (
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
        <Grid item className={classnames(styles.gridItemWide, styles.topMargin)}>
        {payments.map((payment, index) => (<Payment key={`payment-${index}`} {...payment}/>))}
        </Grid>
        <Grid item className={styles.gridItem}>
          <StyledButton
            message="Add a bill"
            onClick={() => navigate('/add')}
            aria="add a bill"/>
        </Grid>
      </Grid>
  );
};

HomeView.propTypes = { payments: arrayOf(shape(paymentModel)) };

export default HomeView;
