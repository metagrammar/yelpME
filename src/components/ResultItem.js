import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory, useParams } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 300,
    minWidth: 275,
    margin: '0.5em 1em',
    height: 'fit-content',
  },
  content: {
    minHeight: 100,
    background: '#f5f5f5'
  },
});


 function ResultItem({ restaurantList }) {


  const classes = useStyles();
  console.log('restaurants as props :' + restaurantList)

  const history = useHistory();

  const { city } = useParams() // Comes from the :city in the route set in App.js

  const returnRestaurant = e => {
    history.push(`${city}/${restaurantList.name}`)
}
  return (
      <>
        <Card className={classes.root} >
          <CardActionArea>
            <Link 
              to={`/${city}/${restaurantList.name}`}
              style={{textDecoration: 'none'}}
              onClick={() => returnRestaurant()}
              >
              <CardContent className={classes.content}>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="h2"
                    style={{color: '#333'}}
                    >
                      {restaurantList.name}
                  </Typography>

                  <Typography 
                    variant="body2" 
                    color="textSecondary" 
                    component="p" 
                    style={{textTransform: 'uppercase'}}
                    >
                      {restaurantList.cuisine}
                  </Typography>

                  <Typography 
                    variant="body2" 
                    color="textSecondary" 
                    component="p" 
                    >
                      {restaurantList.address}
                </Typography>

              </CardContent>
            </Link>
          </CardActionArea>
          <CardActions >
            <Button size="small" color="primary" onClick={() => returnRestaurant()}>
              Restaurant
            </Button>
            <Button  size="small" color="primary">
              Comments
            </Button>
          </CardActions>
        </Card>
      </>


  );
}

export default ResultItem