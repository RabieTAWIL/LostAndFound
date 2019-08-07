import React, { Component, useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Styles from './index.module.css';
import{ Link } from 'react-router-dom';

 function LostForm() {
  const [state, setState] = React.useState({
    open: false,
    url: 'https://codediscovery.site/lo/api.php',
    searchedThing: '',
    location: '',
    results: [],
    jsson: [],
    });



/*
 handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.value });
  };


  e =>{this.setState({[e.target.name]: e.target.value})}


fetchProjects = async () => {
  const url = `${this.state.url}?lost=${this.state.searchedThing}&loc=${this.state.location}`
  const response = await fetch(url);
  const data = await response.json();
  this.setState({ images: data });
}


*/
  

const handleChange = name => event => {
  setState({ ...state, [name]: Number(event.target.value) });
};

function handleClickOpen() {
  setState({ ...state, open: true });
};

function handleClose() {
  setState({ ...state, open: false });
};

const newTo = { 
  pathname: "/lost", 
  los: state.searchedThing,
  loc: state.location
};
  
useEffect(()=>{
console.log('usreeeeee');
},[]);



console.log(state);
  return (
    
    <div>
      <Button onClick={handleClickOpen}>Lost Something</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={state.open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <form className={Styles.container} >
            <FormControl className={Styles.formControl}>
              <InputLabel htmlFor="age-native-simple">What did you lost?</InputLabel>
              <Select
                native
                name='searchedThing'
                value={state.searchedThing}
                onChange={handleChange('searchedThing')}
                input={<Input id="age-native-simple" />}
              >
                <option value="" />
                <option value={2}>Mobile</option>
                <option value={3}>Computer</option>
                <option value={4}>Bags</option>
              </Select>
            </FormControl>
            <br/>
            <FormControl className={Styles.formControl}>
              <InputLabel htmlFor="age-simple">Choose the location</InputLabel>
              <Select
              name='location'
                value={state.location}
                onChange={handleChange('location')}
                input={<Input id="age-simple" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={2}>Istanbul</MenuItem>
                <MenuItem value={1}>Gaziantep</MenuItem>
                <MenuItem value={3}>Mersin</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary"> 
          <Link
           to={newTo}>
          
           Search</Link> 
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
 

export default LostForm;
