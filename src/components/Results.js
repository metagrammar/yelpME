import React from 'react';
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden, Typography } from '@material-ui/core';
import Navbar from './Navbar'
import ResultItem from './ResultItem';
import MyMap from './MyMap'
// import ImageGrid from './ImageGrid';

const useStyles = makeStyles((theme) => ({
    mediaMap: {
        width: '100%',
        height: 500,
        paddingTop: '56.25%', // 16:9
        backgroundSize: 'cover',
        overflow: 'hidden'
    },
  }));

  const restaurantList = [
    {
    id: 'ay012',
    name: 'Hans Im Glück',
    address: 'Mercedes Platz, Hedwig-Wachenheim-Straße 12, 10243 Berlin',
    cuisine: 'Hamburgers',
    price: '$',
    rating: '5',
    coordinates: [52.504859, 13.442797],
    lat: 52.504859,
    long: 13.442797,
   },
   {
    id: 'fg854',
    name: 'Barcomi’s Kaffeerösterei',
    address: 'Bergmannstraße 21, 10961 Berlin',
    cuisine: 'Coffee and Snacks',
    price: '$$',
    rating: '4.5',
    coordinates: [52.489123, 13.393547],
    lat: 52.489123,
    long: 13.393547,
   },
   {
    id: 'rt346',
    name: 'Café BilderBuch',
    address: 'Akazienstraße 28, 10823 Berlin',
    cuisine: 'Cafe Restaurant',
    price: '$$$',
    rating: '4.7',
    coordinates: [52.487319, 13.355234],
    lat: 52.487319,
    long: 13.355234,
   },
   {
    id: 'nm482',
    name: 'Bekarei',
    address: 'Dunckerstaße 23, 10437 Berlin',
    cuisine: 'Portuguese Bakery',
    price: '$$',
    rating: '4.8',
    coordinates: [52.544572, 13.422636],
    lat: 52.487319,
    long: 13.355234,
  },
  {
    id: 'mf394',
    name: 'Zwipf Coffee',
    address: 'Charlottenstraße 75, 10117 Berlin',
    cuisine: 'Coffee Shop',
    price: '$$',
    rating: '4.6',
    coordinates: [52.510071, 13.391819],
    lat: 52.510071,
    long: 13.391819,
  },
  {
    id: 'bf963',
    name: 'Westberlin',
    address: 'Friedrichstraße 215, 10969 Berlin',
    cuisine: 'Coffee Shop',
    price: '$',
    rating: '4.6',
    coordinates: [52.506882, 13.390360],
    lat: 52.506882,
    long: 13.390360,
  },
   ]
	

function Results() {
    const classes = useStyles();

    let { city } = useParams();


    /* let newResultsPlaceholder = {citySearched} */
    
    let mapData = restaurantList.map(item =>{return item})

  return (
    <>
        <Navbar placeholder={ city } />
        <Grid container justify='center' style={{marginTop: '11em'}}>
          <Typography variant='h2'>
            Restaurants in { city }
          </Typography>
        </Grid>
        <Grid container spacing={3} style={{padding: 24}}>
            <Grid item container  xs={12} sm={6} lg={6} style={{ width: '50%', height: 'fit-content' }}>
              {restaurantList.map(item => {
                return (
                  <ResultItem restaurantList={item} key={item.id}/>
                )
              })}
            </Grid>
            <Hidden smDown>
            <Grid item container lg={6} style={{ height: 650, width: '50%', overflow: 'hidden' }} >
            <MyMap className={classes.mediaMap} mapData={mapData}> </MyMap>
            </Grid>
            </Hidden>
        </Grid>
    </>
  );
}

export default Results