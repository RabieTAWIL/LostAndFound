// import "date-fns";
// import React from "react";
// import Grid from "@material-ui/core/Grid";
// import { makeStyles } from "@material-ui/core/styles";
// import DateFnsUtils from "@date-io/date-fns";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker
// } from "@material-ui/pickers";

// const useStyles = makeStyles({
//   grid: {
//     width: "60%"
//   }
// });

// export default function DataField() {
//   // The first commit of Material-UI
//   const [selectedDate, setSelectedDate] = React.useState(
//     new Date("2014-08-18T21:11:54")
//   );

//   const classes = useStyles();

//   function handleDateChange(date) {
//     setSelectedDate(date);
//   }

//   return (
//     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <Grid container className={classes.grid} justify="space-around">
//         <KeyboardDatePicker
//           margin="normal"
//           id="mui-pickers-date"
//           label="Date picker"
//           value={selectedDate}
//           onChange={handleDateChange}
//           KeyboardButtonProps={{
//             "aria-label": "change date"
//           }}
//         />
//       </Grid>
//     </MuiPickersUtilsProvider>
//   );
// }
