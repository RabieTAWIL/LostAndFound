import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Styles from './index.module.css';

export default function FoundForm() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
  
   

    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Found something
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">LOST</DialogTitle>
        <DialogContent>
        <FormControl className={Styles.formControl} >
        <InputLabel htmlFor="age-native-simple">What did you Found?</InputLabel>
        <Select
          native
         >
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
         
        </DialogContent>
        <DialogContent > 
       
      <FormControl className={Styles.formControl} >
        <InputLabel htmlFor="age-native-simple">Location</InputLabel>
        <Select
          native
         >
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>


     

        </DialogContent>
<DialogContent>
<TextField
        id="standard-with-placeholder"
        label="Color"
        placeholder="Placeholder"
        className={Styles.textField}
        margin="normal"
      />
      <TextField
        id="standard-with-placeholder"
        label="Address"
        placeholder="Placeholder"
        className={Styles.textField}
        margin="normal"
      />
</DialogContent>
<DialogContent>
<TextField
        id="standard-with-placeholder"
        label="Address"
        placeholder="Placeholder"
        className={Styles.textField}
        margin="normal"
      />
</DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button to="rewards/index" color="primary">
            Search
          </Button>
        </DialogActions>

        

      </Dialog>
    
      
     

    </div>
  );
}


