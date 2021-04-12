import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { shadows } from '@material-ui/system';
//import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles({
  root: {
    maximumWidth: 387,
  },
  media: {
    height: 259,
    borderRadius: 8,
    border: 0,
    boxShadow:0,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://a0.muscache.com/im/pictures/69556101/41a4a2be_original.jpg?im_w=480"
          title="Contemplative Reptile"
        />
        les 5 étoiles
      </CardActionArea>
    </Card>
  );
}

