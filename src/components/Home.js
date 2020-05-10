import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import SearchInput from './SearchInput';
import MainLogo from '../images/yelpMeHorz.svg'



const Home = ({ placeholder }) => {
  let defaultHomepagePlaceholder = 'Tell us where you are Bud...'
  return (
    <div className="App">
      <Grid container alignItems='center' direction='column' justify='center' style={{background: 'linear-gradient(to right, #4BC0C8, #C779D0, #FEAC5E)', minHeight: '100vh', height:'100%', minWidth: '100vw', width: '100%', padding: '1em',}} >
        <Grid item >
          <img src={MainLogo} alt='Yelp me logo' style={{minWidth: 200, width: 400,  marginBottom: '5em'}} />
        </Grid>
        <Typography variant='h1' style={{marginBottom: '1em', color: '#ffffff', padding: '0 0.5em' }}>
            Whadda Ya Wanna eat Bud?
        </Typography>
        <SearchInput placeholder={defaultHomepagePlaceholder}/>
      </Grid>
    </div>
  );
}

export default Home;
