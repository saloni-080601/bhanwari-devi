import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AlertDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [userDetails, setUserDetails] = useState({});



  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Class
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Container component="main" maxWidth="xs">
        <Typography variant="h5" >   CREATE  A CLASS</Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="title"
            name="title"
            autoComplete="title"
            autoFocus
          />
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="description"
            label="description"
            name="description"
            autoComplete="description"
            autoFocus
          />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="facilitator_name"
            label="Facilitator Name"
            name="facilitator_name"
            autoComplete="facilitator_name"
            autoFocus
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="facilitator_email"
            label="Facilitator Email"
            name="facilitator_emai"
            autoComplete="facilitator_email"
            autoFocus
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
             id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
         
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="video_id"
            label="video id"
            name="video_id"
            autoComplete="video_id"
            autoFocus
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
       
            id="exercise_id"
            label="exercise_id"
            name="exercise_id"
            autoComplete="exercise_id"
            autoFocus
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
          
            id="course_id"
            label="course_id"
            name="course_id"
            autoComplete="course_id"
            autoFocus
          />
            <TextField
            variant="outlined"
            margin="normal"
            required
            id="category_id"
            label="category_id"
            name="category_id"
            autoComplete="category_id"
            autoFocus
          />
            <TextField
            variant="outlined"
            margin="normal"
            required
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            CREATE CLASS
          </Button>
         
        </form>
        </Container>

        {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
