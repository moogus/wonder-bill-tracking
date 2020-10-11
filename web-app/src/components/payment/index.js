import React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import paymentModel from 'models/payment';

import useStyles from './styles';

const PaymentItem = ({
  id,
  name,
  amount,
  startDate,
  frequency,
}) => {
  const styles = useStyles();

  return (
    <Link to={`/edit?id=${id}`} style={{ textDecoration: 'none' }}>
      <Grid spacing={0}
          container
          direction="row"
          justify="space-between"
        >
        <Grid item>
          <Typography
            variant="h4"
            component="p"
            color="inherit"
            className={styles.darkGreyText}>
            {name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h4"
            component="p"
            color="inherit"
            className={classnames(styles.darkGreyText, styles.rightAlign)}>
            {amount}
          </Typography>
        </Grid>
      </Grid>

      <Grid spacing={0}
          container
          direction="row"
          justify="space-between"
        >
        <Grid item>
          <Typography
            variant="body2"
            className={styles.greyText}>
            {frequency}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body2"
            className={classnames(styles.greyText, styles.rightAlign)}>
            {`Next: ${startDate}`}
          </Typography>
        </Grid>
      </Grid>

      <Grid item className={styles.divider}>
        <Divider />
      </Grid>
    </Link>
  );
};

PaymentItem.propTypes = paymentModel;

export default PaymentItem;
