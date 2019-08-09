import React,{useEffect,useState} from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Container } from "@material-ui/core";
import SimpleAppBar from "../searchbar";
import Styles from './index.module.css';

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
