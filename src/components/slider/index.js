import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Image from "../../images/main-background.jpg";
import styles from "./index.module.css";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import LostForm from "../dialogs/lostForm";
import FoundtForm from "../dialogs/foundForm";
import DialogActions from "@material-ui/core/DialogActions";
import { StylesContext } from "@material-ui/styles/StylesProvider";



function ImageGridList() {
  return (
      <div
        className={styles.kassem}
        style={{ background: `url('${Image}') center center` }}
      >
        <Box display="inline-block">
          <div className={styles.center}>
            <h1 className={styles.textColor}>LOST & FOUND</h1>
            <p className={styles.textColor}>We will help you to find your missing things</p>
            <DialogActions>
              <LostForm />
              <FoundtForm />
            </DialogActions>
          </div>
        </Box>
      </div>
  );
}

export default ImageGridList;
