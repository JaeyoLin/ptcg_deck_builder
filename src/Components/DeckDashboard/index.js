import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { green, red } from '@material-ui/core/colors';

import CardSearch from '../CardSearch';
import Decker from '../Decker';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '95%',
  },
}));

const DeckDashBoard = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [deckList, setDeckList] = React.useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9 , 10,
  ]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <CardSearch
            openDialog={handleClickOpen}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={9} lg={9}>
          <Decker
            deckList={deckList}
          />
        </Grid>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">查詢結果</DialogTitle> */}
        <DialogContent align="center">
          <FormControl className={classes.formControl}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value="1"
              // onChange={handleChange}
            >
              <MenuItem value="1">噴火龍</MenuItem>
              <MenuItem value="2">水劍龜</MenuItem>
              <MenuItem value="3">妙娃花</MenuItem>
            </Select>
          </FormControl>
          <div>
            <RemoveCircleIcon fontSize="large" style={{ color: red[500] }}/>
            <AddCircleIcon fontSize="large" style={{ color: green[500] }} />
          </div>
          <ChevronLeftIcon fontSize="large" />
          <img src="https://ptcgcard.com/img/173.cb2d1b04.jpg" width="70%" />
          <ChevronRightIcon fontSize="large" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            關閉
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeckDashBoard;
