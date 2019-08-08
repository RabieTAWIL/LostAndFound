import React from "react";
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
    marginBottom: 75,
  }
}));

export default function DetailsPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState("one");

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Container className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          <Tab
            value="one"
            label="Item ID and Name"
            wrapped
            {...a11yProps("one")}
          />
        </Tabs>
      </AppBar>
      {detailsData.map(details => (
        <div className={Styles.detailsFlex}>
          <TabPanel value={value} index="one">
              <img src={details.img} className={Styles.imgDiv}/>
          </TabPanel>
          <TabPanel value={value} index="one">
              <p>{details.item}</p>
              <p>{details.color}</p>
              <p>{details.location}</p>
              <p>{details.tarih}</p>
              <p>{details.description}</p>
          </TabPanel>
        </div>
      ))}
    </Container>
  );
}
