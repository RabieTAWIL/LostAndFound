import React, { useEffect } from "react";
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
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function LostedItems(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    lost: "",
    location: "",
    url: "http://visiontr.org/lo/api.php",
    lostedItmes: []
  });

  const location = props.location.loc;
  const lost = props.location.los;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url = `${state.url}?data=get&cat=${lost}&lo=${location}`;
    
    const response = await fetch(url);
    const data = await response.json();
    setState({ lostedItmes: data });
  };
  const webimages = `http://visontr.org/lo/`;
  

  return (
    <Container className={Styles.flexCard}>
      <Grid container spacing={4}>
        {state.lostedItmes.map(losted => (
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={webimages + losted.image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {losted.cat}
                    {losted.id}
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
               <Button  size="small" color="primary">
                <Link to={{pathname: "/details", id:losted.id} }>Learn More</Link>
                  
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
