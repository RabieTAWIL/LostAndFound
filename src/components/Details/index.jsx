import React, { useEffect } from "react";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Styles from "./styles.module.css";

const detailsData = [
  {
    tarih: "Date of found:",
    color: "Color:",
    location: "Location:",
    img: "./images/cuzdan.jpg",
    description: "Description:",
    item: "Item:"
  }
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: 75,
    marginBottom: 75
  }
}));

export default function DetailsPage(props) {
  const classes = useStyles();

  const [valuess, setvaluess] = React.useState({
    lost: "",
    location: "",
    url: "http://visiontr.org/lo/api.php",
    itemDitels: []
  });

  useEffect(() => {
    getData();
  }, []);
  const id = props.location.id;

  const getData = async () => {
    const url = `${valuess.url}?data=id&id=${id}`;

    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    setvaluess({ itemDitels: data });
  };
  const webimages = `http://visiontr.org/lo/`;

  console.log(valuess.itemDitels);

  return (
    <Container className={classes.root}>
      <AppBar position="static">
        <Tabs aria-label="wrapped label tabs example">
          <Tab label="Item ID and Name" wrapped {...a11yProps("one")} />
        </Tabs>
      </AppBar>

      <div className={Styles.detailsFlex}>
        <TabPanel value="one" index="one">
          <img src={webimages+valuess.itemDitels.image} className={Styles.imgDiv} />
        </TabPanel>
        <TabPanel value="one" index="one">
          <p>
            <b>Category: </b> {valuess.itemDitels.cat}
          </p>
          <p>
            <b>Color: </b> {valuess.itemDitels.color}
          </p>
          <p>
            <b>City: </b> {valuess.itemDitels.city}
          </p>
          <p>
            <b>Address: </b> {valuess.itemDitels.location}
          </p>
          <p>
            <b>Found Date: </b> {valuess.itemDitels.fldate}
          </p>
          <p>
            <b>Rewards: </b> {valuess.itemDitels.rewards} <b><em>tl</em></b>
          </p>
          <p>
            <b>Description: </b> {valuess.itemDitels.description}
          </p>
        </TabPanel>
      </div>
    </Container>
  );
}
