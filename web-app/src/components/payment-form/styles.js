import theme from 'theme';
import { makeStyles } from '@material-ui/core/styles';

import { viewStyles } from 'views/styles';

export default makeStyles({
  ...viewStyles,
  greyText: {
    color: theme.palette.greys.two,
  },
});
