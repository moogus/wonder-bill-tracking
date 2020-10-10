import React from 'react';
import { bool, func, string } from 'prop-types';
import Button from '@material-ui/core/Button';

import useStyles from './styles';

const StyledButton = ({
  aria = 'perform action',
  isDelete = false,
  message,
  onClick,
}) => {
  const styles = useStyles();

  return (
    <Button
      aria-label={aria}
      variant="contained"
      color="secondary"
      fullWidth
      className={isDelete ? styles.deleteButton : styles.button}
      onClick={onClick}>
        {message}
    </Button>
  );
};

StyledButton.propTypes = {
  aria: string,
  isDelete: bool,
  color: string,
  message: string.isRequired,
  onClick: func.isRequired,
};

export default StyledButton;
