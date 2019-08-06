import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from './paper.jpg';
import styles from './index.module.css'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';



  
 
 
export default function ImageGridList() {
 

  return (
    <Container maxWidth="lg">
    <div className={styles.kassem}
    style={{ background: `url('${Image}') no-repeat center center` }}>

<Box  display="inline-block">
<div className={styles.center}>
        <h1>LOST & FOUND</h1>
        <p>We will help you to find your missing things</p>
      
        <Button variant="contained" color="secondary" className={styles.button}>
        LOST
      </Button>

        <Button variant="contained" color="primary" className={styles.button}>
        FOUND
      </Button>
      
</div>
      </Box>
    
</div>
</Container>
  );
}