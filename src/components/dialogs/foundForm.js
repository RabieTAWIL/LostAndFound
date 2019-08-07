import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Styles from "./index.module.css";
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));



export default function FoundForm() {
  const classes = useStyles();
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">LOST</DialogTitle>
        <DialogContent>
          <FormControl className={Styles.formControl}>
            <InputLabel htmlFor="age-native-simple">
              What did you Found?
            </InputLabel>
            <Select native>
              <option value="" />
              <option value={2}>Mobile</option>
              <option value={3}>Computer</option>
              <option value={4}>Bags</option>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogContent>
          <FormControl className={Styles.formControl}>
            <InputLabel htmlFor="age-native-simple">Location</InputLabel>
            <Select native>
              <option value="" />
              <option value={2}>Istanbul</option>
              <option value={1}>Gaziantep</option>
              <option value={3}>Mersin</option>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogContent>
          <TextField
            id="standard-with-placeholder"
            label="Address"
            placeholder="Type founded location"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="standard-with-placeholder"
            label="Date"
            placeholder="Data of found"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="standard-with-placeholder"
            label="Color"
            placeholder="Placeholder"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="standard-with-placeholder"
            label="Image"
            placeholder="To be replaced with simple-image-upload"
            className={classes.textField}
            margin="normal"
          />
        </DialogContent>
        <DialogContent>
          <TextField
            id="standard-multiline-flexible"
            label="Description"
            placeholder="Describe the founded item"
            multiline
            rowsMax="2"
            className={classes.textField}
            margin="normal"
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button to="rewards/index" color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
