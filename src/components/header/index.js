import React from "react";
import Styles from "./index.module.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";


export default function ButtonAppBar() {
  return (
    <div className={Styles.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
          </IconButton> */}
          <Typography className={Styles.title}>
          {/* <img src='https://demos.creative-tim.com/paper-dashboard/assets/img/logo-small.png' width="3.5%"/> */}
           <Button href='/' ><h4 className={Styles.title}><b> Lost & Found </b></h4></Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
