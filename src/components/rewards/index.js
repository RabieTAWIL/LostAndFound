import React, { useEffect } from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Styles from './index.module.css';

  

export default function Rewards(props) {
  const [state, setState] = React.useState({
    
    lost: '',
    location: '',
    url: 'https://codediscovery.site/lo/api.php',
    re: [],
  });

  const location = props.location.loc;
  const lost = props.location.los ;
   useEffect ( () => {
    getData();
  },[]);

  const getData = async() =>{
    const url = `${state.url}?data=get&cat=${lost}&lo=${location}`;
    console.log(url);
    const response = await fetch(url);
  
    const data = await response.json();
    setState({ re: data });
    
    

  }
  /**  async function fetchProjects() {
    const url = `${state.url}?lo=${lost}&lo${location}`
    const response = await fetch(url);
    const json = await response.json();
    this.setState({ re: json });
  } */




 

  
console.log(location);
console.log(lost);
console.log(state.re);
  return (
   
    <Container>
      
      <Paper className={Styles.paperp}>
        <Typography variant="h5" component="h3">
          uhuhuhuhuhu
         
        </Typography>
        <Typography component="p">
        jhjhygtfr
        </Typography>
      </Paper>
    </Container>
  );
}