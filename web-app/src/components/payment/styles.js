import theme from 'theme';
import { makeStyles } from '@material-ui/core/styles';

import { viewStyles } from 'views/styles';

export default makeStyles({
  ...viewStyles,
  divider: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  greyText: {
    color: theme.palette.greys.two,
  },
  darkGreyText: {
    color: theme.palette.greys.one,
  },
  rightAlign: {
    textAlign: 'right',
  },
  link: {
    textDecoration: 'none',
  },
});
