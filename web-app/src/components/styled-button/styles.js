import theme from 'theme';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  button: {
    color: theme.palette.common.white,
    paddingTop: theme.spacing(1.5),
    fontSize: theme.typography.fontSize * 1.5,
    borderRadius: 50,
  },
  deleteButton: {
    backgroundColor: '#c81a0d',
    color: theme.palette.common.white,
    paddingTop: theme.spacing(1.5),
    fontSize: theme.typography.fontSize * 1.5,
    borderRadius: 50,
    '&:hover': {
      backgroundColor: '#A40C00',
    },
  },
});
