import theme from 'theme';
import { makeStyles } from '@material-ui/core/styles';

export const viewStyles = {
  gridItem: {
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      width: '70%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  gridItemWide: {
    width: '45%',
    [theme.breakpoints.down('sm')]: {
      width: '70%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  bottomMargin: {
    marginBottom: theme.spacing(2),
  },
  topMargin: {
    marginTop: theme.spacing(2),
  },
};

export default makeStyles(viewStyles);
