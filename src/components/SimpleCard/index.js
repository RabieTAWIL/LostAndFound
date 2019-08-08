import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Styles from "./styles.module.css";
import { Container } from "@material-ui/core";

export default function SimpleCard() {
  const bull = <span className={Styles.bullet}>•</span>;

  const arr = [
    {
      title: "Iphone",
      description: "50$",
      date: "12.Agu.2018"
    },
    {
      title: "LG",
      description: "50$",
      date: "12.Agu.2018"
    },
    {
      title: "Samsung",
      description: "50$",
      date: "12.Agu.2018"
    },

    {
      title: "Ipad",
      description: "50$",
      date: "12.Agu.2018"
    }
  ];

  return (
    <Container>
      <div className={Styles.flex}>
        {arr.map(item => (
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
        ;
      </div>
      <div className={Styles.flex}>
        <Button variant="outlined" color="secondary" href="rewards">
          View All Reward Items
        </Button>
      </div>
    </Container>
  );
}
