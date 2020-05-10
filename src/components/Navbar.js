import React from 'react';
import {AppBar, Grid, Link} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchInput from './SearchInput';
import SmallLogo from '../images/yelpMeVert.svg'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appbar: {
    minHeight: 128,
    alignItems: 'center',
    justify: 'center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    background: 'linear-gradient(to right, #4BC0C8, #C779D0, #FEAC5E)',
  },
  title: {
    flexGrow: 1,
    alignSelf: 'center',
    color: '#999',
  },
  hiddenMobile: {
    display: 'none',
  }
}));

function Navbar({ placeholder }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="fixed" style={{ justify: 'center' }}>
        <Grid item >
          <Link to='/'>
            <img src={SmallLogo} alt='Yelp me logo' style={{width: 200,  margin: '0.5em'}} />
          </Link>
        </Grid>
          <SearchInput 
          placeholder={placeholder} 
          />
      </AppBar>
    </div>
  );
}

export default Navbar;