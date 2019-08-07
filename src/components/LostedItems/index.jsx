import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Styles from "./styles.module.css";
import Grid from "@material-ui/core/Grid";

const lostedItmes = [
  {
    title: "pixie box",
    img: "./images/pixi.jpg",
    description:
      "Thank you very much. I now have my prized possession back after only 2 days."
  },
  {
    title: "Mobile",
    img: "./images/mobile.jpeg",
    description:
      "The customer host found and turned in my iPad. I am incredibly grateful!"
  },
  {
    title: "Cuzdan",
    img: "./images/cuzdan.jpg",
    description:
      "Thank you so much for finding my phone so thank you for being so professional and fast."
  },
  {
    title: "pixie box",
    img: "./images/pixi.jpg",
    description:
      "Thank you very much. I now have my prized possession back after only 2 days."
  },
  {
    title: "Mobile",
    img: "./images/mobile.jpeg",
    description:
      "The customer host found and turned in my iPad. I am incredibly grateful!"
  }
];

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function LostedItems() {
  const classes = useStyles();

  return (
    <Container className={Styles.flexCard}>
      <Grid container spacing={4}>
        {lostedItmes.map(losted => (
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={losted.img}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {losted.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {losted.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
