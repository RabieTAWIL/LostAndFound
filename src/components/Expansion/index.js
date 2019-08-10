import React, { useEffect, useState } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Container } from "@material-ui/core";
import SimpleAppBar from "../searchbar";
import Styles from "./index.module.css";
import Avatar from '@material-ui/core/Avatar';

const imgArr = ["./images/anahtar.jpg","./images/cuzdan.jpg","./images/mobile.jpeg","./images/pixi.jpg"];

const webimages = `http://visiontr.org/lo/`;

export default function ControlledExpansionPanels() {
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
    const res = await fetch(`${state.url}?data=all`);
    console.log(res);
    const data = await res.json();
    setState({ arre: data });
  };

  console.log(state.arre);

  return (
    <Container className={Styles.expansionP}>
      <SimpleAppBar />
      {state.arre.map(item => (
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography>{item.title}</Typography>
            <Typography>
              <br />
              {item.description}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={Styles.size1}>
              <b>Date of found:</b> {item.date}
              <br />
              <b>Color:</b> {item.color}
              <br />
              <b>City:</b> {item.city}
              <br />
              <b>Address:</b> {item.location}
              <br />
              <b>Reward Value:</b> {item.rewards}{" "}
              <b>
                <em>tl</em>
              </b>
            </Typography>
            <Typography className={Styles.size1}>
              <img src={webimages+item.image} width='40%' alt={item.cat}/>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </Container>
  );
}
