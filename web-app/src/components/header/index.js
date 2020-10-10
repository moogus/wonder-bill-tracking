import React, { useState } from 'react';
import { navigate } from 'gatsby';
import root from 'window-or-global';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';

import useStyles from './styles';

const HOME = 'Regular Payments';
const ADD = 'Add A Bill';
const EDIT = 'Edit A Bill';

const Header = () => {
  const styles = useStyles();
  const [open, setOpen] = useState(false);

  const { location = {} } = root;
  const { pathname = '' } = location;

  return (
    <>
        <AppBar
          elevation={0}
          style={{ background: '#00b3f5' }}
          >
        <Toolbar>
        <IconButton
          className={styles.menuButton}
          onClick={() => setOpen(!open)}>
            <MenuIcon />
          </IconButton>
          <Typography className={styles.pageHeader} variant="h4" component="p">
            {pathname === '/' ? HOME : `${pathname.includes('add') ? ADD : EDIT}`}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={styles.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: styles.drawerPaper,
        }}
      >
      <div className={styles.drawerHeader}>
        <IconButton onClick={() => setOpen(false)}>
         <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
      <ListItem button onClick={() => navigate('/')}>
        <ListItemIcon> <HomeIcon /> </ListItemIcon>
        <ListItemText primary={HOME} />
      </ListItem>
      <ListItem button onClick={() => navigate('/add')}>
        <ListItemIcon> <AddBoxIcon /> </ListItemIcon>
        <ListItemText primary={ADD} />
      </ListItem>
      </List>
    </Drawer>
  </>
  );
};

export default Header;
