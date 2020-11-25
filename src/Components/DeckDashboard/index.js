import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
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

import CARD_LIST from '../../CardList';

/**
 * useStyles
 *
 */
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '95%',
  },
}));

/**
 * DeckDashBoard
 *
 */
const DeckDashBoard = () => {
  const classes = useStyles();

  // 查詢條件
  const [queryCondition, setQueryCondition] = React.useState({
    set: '', // 彈數
    type: '', // 種類
    searchText: '', // 關鍵字
  });

  const [selectCard, setSelectCard] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [deckList, setDeckList] = React.useState([]);

  /**
   * toogleDialog
   *
   */
  const toogleDialog = () => {
    setOpen(!open);
  };

  /**
   * handleChangeQuery
   * 更新查詢條件
   *
   * @param {*} key
   * @param {*} value
   */
  const handleChangeQuery = (key, value) => {
    setQueryCondition({
      ...queryCondition,
      [key]: value,
    });
  };

  /**
   * clearQuery
   * 清空所有查詢條件
   *
   */
  const clearQuery = () => {
    setQueryCondition({
      set: '', // 彈數
      type: '', // 種類
      searchText: '', // 關鍵字
    });
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <CardSearch
            toogleDialog={toogleDialog}
            queryCondition={queryCondition}
            handleChangeQuery={handleChangeQuery}
            clearQuery={clearQuery}
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
        onClose={toogleDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">查詢結果</DialogTitle> */}
        <DialogContent align="center">
          <FormControl className={classes.formControl}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectCard}
              onChange={(e) => {
                setSelectCard(e.target.value);
              }}
            >
              {
                CARD_LIST.map((card) => {
                  return (
                    <MenuItem key={`${card.set}-${card.id}`} value={card}>{`${card.name}`}</MenuItem>
                  );
                })
              }
            </Select>
          </FormControl>
          <div>
            <RemoveCircleIcon fontSize="large" style={{ color: red[500] }}/>
            <AddCircleIcon fontSize="large" style={{ color: green[500] }} />
          </div>
          <ChevronLeftIcon fontSize="large" />
          {
            (selectCard === null) ? (
              <div>No Card</div>
            ) : (
              <img src={selectCard.imgSrc} width="70%" />
            )
          }
          <ChevronRightIcon fontSize="large" />
        </DialogContent>
        <DialogActions>
          <Button onClick={toogleDialog} color="primary">
            關閉
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeckDashBoard;
