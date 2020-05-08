import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '100%',

    minWidth: 250,

  },
  media: {
    height: 140,
  },
});

 function ResultItem() {
  const classes = useStyles();

  return (
    
    <Grid item xs={12} sm={6} lg={4} xl={3} style={{margin: '0 1em 0 0', height: 180}}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" style={{textAlign: 'left'}}>
              Restaurant Name
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{textAlign: 'left'}}>
              Bernburger Str. 35, Kreuzberg.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{textAlign: 'left'}}>
              Cuisine: Tag here
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Restaurant
          </Button>
          <Button size="small" color="primary">
            Comments
          </Button>
        </CardActions>
      </Card>
    </Grid>
 
  );
}

export default ResultItem