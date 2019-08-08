import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Container } from "@material-ui/core";
import SimpleAppBar from "../searchbar";

export default function ControlledExpansionPanels() {
  const arr = [
    {
      title: "Iphone",
      description: "50$",
      date: "9.Agu.2019",
      model: "5",
      color: "black",
      location: "Gaziantep"
    },

    {
      title: "Backpack",
      description: "No Reward",
      date: "12.Jun.2019",
      model: "5",
      color: "brown",
      location: "Izmir"
    },
    {
      title: "Car key",
      description: "20$",
      date: "30.Jul.2019",
      model: "--",
      color: "silver",
      location: "Istanbul"
    },
    {
      title: "Kindle",
      description: "No Reward",
      date: "8.Agu.2019",
      model: "--",
      color: "black",
      location: "Adana"
    }
  ];

  return (
    <Container>
      <SimpleAppBar />
      {arr.map(item => (
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
            <Typography>
              {item.date}
              <br />
              {item.color}
              <br />
              {item.location}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </Container>
  );
}
