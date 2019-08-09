import React,{useEffect} from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Styles from "./styles.module.css";
import { Container } from "@material-ui/core";
import SimpleAppBar from "../searchbar";

export default function SimpleCard() {
  const bull = <span className={Styles.bullet}>•</span>;


  const [state, setState] = React.useState({
   
    url: "http://visiontr.org/lo/api.php",
    title: "",
    description: "",
    date: "",
    color: "",
    location: "",
    arre: []
  });



  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch(`${state.url}?data=jjj`);
    console.log(res);
    const data = await res.json();
    setState({ arre: data });
  };


  console.log(state.arre);


  return (
    <Container>
      {/* <SimpleAppBar /> */}
      <br />
      <h1 className={Styles.tag1}>REWARD ITEMS NEAR YOU</h1>
      <div className={Styles.flex}>

        {state.arre.map(item => (
          <Card className={Styles.card} key={item.title}>
            <CardContent>
              <Typography
                className={Styles.title}
                color="textSecondary"
                gutterBottom
              />
              <Typography variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography className={Styles.pos} color="textSecondary" />
              <Typography variant="body2" component="p">
                {item.description}
                <br />
                {item.date}
              </Typography>
            </CardContent>
            <CardActions>
              <Button className={Styles.halili} size="small">
                Confirm
              </Button>
            </CardActions>
          </Card>
        ))}

      </div>
      <br />
      <div className={Styles.flex}>
        <Button variant="outlined" color="secondary" href="rewards">
          View All Reward Items
        </Button>
      </div>
      <br />
    </Container>
  );
}
