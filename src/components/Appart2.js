import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardMedia from "@material-ui/core/CardMedia";

import StarIcon from "@material-ui/icons/Star";
import AppartPhoto from "./AppartPhoto";

const useStyles = makeStyles({
  root: {
    maximumWidth: 387,
  },
  media: {
    height: 259,
    borderRadius: 8,
    border: 0,
    boxShadow: 0,
  },
  starIcon: {
    marginTop: 15,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720"
          title="Contemplative Reptile"
        />
        <ul className="starIcon">
          <li>
            <StarIcon className="starIcon" />
          </li>
          <li>
            <StarIcon className="starIcon" />
          </li>
          <li>
            <StarIcon className="starIcon" />
          </li>
          <li>
            <StarIcon className="starIcon" />
          </li>
          <li>
            <StarIcon className="starIcon" />
          </li>
        </ul>

        <p className="appart__desc">
          Un endroit magique au coeur de Bordeaux…Tout était parfait…sauf la
          pluie…mais ça Antoine n'y pouvait rien ! Un appartement où il fait bon
          vivre et tout là…même plus… Nous recommandons chaudement et
          reviendrons certainement. Un grand merci à Antoine qui est un hôte ...
        </p>
        <AppartPhoto />
      </CardActionArea>
    </Card>
  );
}
