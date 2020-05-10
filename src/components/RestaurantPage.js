import React from 'react';
import { useParams } from "react-router-dom";
import Navbar from './Navbar';
import ImageGrid from './ImageGrid';
import { Typography, Grid } from '@material-ui/core';
// import ImageGrid from './ImageGrid';



const RestaurantPage = () => {
    let { city, restaurant } = useParams();
    
    return (
        <>
        <Navbar placeholder={ city } />
        <ImageGrid />
        <Grid container direction="column" justify="flex-start" alignItems="center">
            <Typography variant='h2' style={{paddingTop: '0.5em'}}>
                {restaurant}
            </Typography>
            <Typography variant='caption text' style={{paddingTop: '0.5em'}}>
                {restaurant}
            </Typography>
        </Grid>
        </>
        
    )
}
export default RestaurantPage