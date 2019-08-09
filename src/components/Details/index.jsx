import React,{useEffect} from "react";
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




export default function DetailsPage(props) {
  const classes = useStyles();
  

  

  const [values, setvalues] = React.useState({
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
    const url = `${values.url}?data=id&id=${id}`;
    
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    setvalues({ itemDitels: data });
  };
  const webimages = `http://visontr.org/lo/`;


  

console.log(values.itemDitels);



  return (
    <Container className={classes.root}>
      <AppBar position="static">
        <Tabs
         
          aria-label="wrapped label tabs example"
        >
          <Tab
            
            label="Item ID and Name"
            wrapped
            {...a11yProps("one")}
          />
        </Tabs>
      </AppBar>
     
        <div className={Styles.detailsFlex}>
          <TabPanel value="one" index="one">
              <img src={values.itemDitels.image} className={Styles.imgDiv}/>
          </TabPanel>
          <TabPanel value="one" index="one">
              <p>{values.itemDitels.cat}</p>
              <p>{values.itemDitels.color}</p>
              <p>{values.itemDitels.location}</p>
              <p>{values.itemDitels.fldate}</p>
              <p>{values.itemDitels.description}</p>
          </TabPanel>
        </div>
    
    </Container>
  );
}
