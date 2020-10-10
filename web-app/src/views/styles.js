import theme from 'theme';
import { makeStyles } from '@material-ui/core/styles';

export const viewStyles = {
  gridItem: {
    width: '40%',
  },
  gridItemWide: {
    width: '45%',
  },
  bottomMargin: {
    marginBottom: theme.spacing(2),
  },
  topMargin: {
    marginTop: theme.spacing(2),
  },
};

export default makeStyles(viewStyles);
