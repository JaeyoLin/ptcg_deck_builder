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
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';


import CardSearch from '../CardSearch';
import ToolBar from '../ToolBar';
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
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    // 如果關閉 Dialog，要清空選擇的卡片
    if (open) {
      setSelectCard(null);
    }
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

  /**
   * getDeckList
   * 根據搜尋條件 filter 卡片
   *
   */
  const getDeckList = React.useMemo(() => {
    return CARD_LIST.filter((tmp1) => {
      // 過濾彈數
      if (queryCondition.set === '') {
        return true;
      } else {
        return tmp1.set === queryCondition.set;
      }
    }).filter((tmp2) => {
      // 過濾卡片 type
      if (queryCondition.type === '') {
        return true;
      } else {
        return tmp2.type === queryCondition.type;
      }
    }).filter((tmp3) => {
      // 過濾關鍵字
      return tmp3.name.search(queryCondition.searchText) !== -1;
    });
  }, [queryCondition]);

  /**
   * handelSearch
   * 查詢
   *
   */
  const handelSearch = () => {
    // 打開 Dialog 預設帶第一張卡片
    if (selectCard === null) {
      if (getDeckList.length > 0) {
        setSelectCard(getDeckList[0]);
      }
    }
    toogleDialog();
  };

  /**
   * couldClickPrev
   * 是否可以點選前一張
   *
   */
  const couldClickPrev = React.useMemo(() => {
    if (selectCard === null || getDeckList.length === 0) {
      return true;
    } else if (selectCard.set === getDeckList[0].set && selectCard.id === getDeckList[0].id) {
      return true;
    } else {
      return false;
    }
  }, [selectCard, getDeckList]);

  /**
   * couldClickNext
   * 是否可以點選後一張
   *
   */
  const couldClickNext = React.useMemo(() => {
    if (selectCard === null || getDeckList.length === 0) {
      return true;
    } else if (selectCard.set === getDeckList[getDeckList.length -1].set && selectCard.id === getDeckList[getDeckList.length -1].id) {
      return true;
    } else {
      return false;
    }
  }, [selectCard, getDeckList]);

  /**
   * handlePrevCard
   * 往前一張卡片
   *
   */
  const handlePrevCard = () => {
    // 取得目前是第幾張
    let selectCardIndex = 0;
    getDeckList.some((tmp, index) => {
      if (tmp.id === selectCard.id && tmp.set === selectCard.set) {
        selectCardIndex = index;
        return true;
      } else {
        return false;
      }
    });

    if (selectCardIndex > 0) {
      setSelectCard(getDeckList[selectCardIndex - 1]);
    }
  };

  /**
   * handleNextCard
   * 往後一張卡片
   *
   */
  const handleNextCard = () => {
    // 取得目前是第幾張
    let selectCardIndex = 0;
    getDeckList.some((tmp, index) => {
      if (tmp.id === selectCard.id && tmp.set === selectCard.set) {
        selectCardIndex = index;
        return true;
      } else {
        return false;
      }
    });

    if (selectCardIndex !== getDeckList.length - 1) {
      setSelectCard(getDeckList[selectCardIndex + 1]);
    }
  };

  /**
   * handleAdd
   * 加入卡片
   *
   */
  const handleAdd = () => {
    setDeckList([
      ...deckList,
      selectCard,
    ]);
  };

  /**
   * handleRemove
   * 移除卡片
   *
   */
  const handleRemove = () => {
    console.log('handleRemove', handleRemove);
  };

  /**
   * couldClickAdd
   * 是否可以點選加入
   *
   */
  const couldClickAdd = React.useMemo(() => {
    // 牌組只能 60 張
    if (deckList.length === 60) {
      return true;
    } else {
      return false;
    }
  }, [deckList]);

  /**
   * couldClickRemove
   * 是否可以點選移除
   *
   */
  const couldClickRemove = React.useMemo(() => {
    return false;
  }, [deckList]);

  /**
   * handleClearDecker
   * 清空卡表
   *
   */
  const handleClearDecker = () => {
    setDeckList([]);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <CardSearch
            handelSearch={handelSearch}
            queryCondition={queryCondition}
            handleChangeQuery={handleChangeQuery}
            clearQuery={clearQuery}
          />
          <ToolBar
            handleClearDecker={handleClearDecker}
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
          {
            (getDeckList.length > 0) ? (
              <>
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
                      getDeckList.map((card) => {
                        return (
                          <MenuItem key={`${card.set}-${card.id}`} value={card}>{`${card.name}`}</MenuItem>
                        );
                      })
                    }
                  </Select>
                </FormControl>
                <div>
                  <IconButton
                    aria-label="remove"
                    size="large"
                    disabled={couldClickRemove}
                    onClick={handleRemove}
                  >
                    <RemoveCircleIcon fontSize="large" style={{ color: red[500] }}/>
                  </IconButton>
                  <IconButton
                    aria-label="add"
                    size="large"
                    disabled={couldClickAdd}
                    onClick={handleAdd}
                  >
                    <AddCircleIcon fontSize="large" style={{ color: green[500] }} />
                  </IconButton>
                </div>
                <div className={classes.cardContainer}>
                  <div>
                    <IconButton
                      aria-label="prev"
                      size="large"
                      disabled={couldClickPrev}
                      onClick={handlePrevCard}
                    >
                      <ChevronLeftIcon fontSize="large" />
                    </IconButton>
                  </div>
                  <div>
                    {
                      (selectCard !== null) && (
                        <img src={selectCard.imgSrc} width="70%" />
                      )
                    }
                  </div>
                  <div>
                    <IconButton
                      aria-label="next"
                      size="large"
                      disabled={couldClickNext}
                      onClick={handleNextCard}
                    >
                      <ChevronRightIcon fontSize="large" />
                    </IconButton>
                  </div>
                </div>
              </>
            ) : (
              <Typography
                variant="h5"
                color="initial"
                align="center"
                // style={{ height: '50px', color: '#000000' }}
              >
                { `無查詢結果。` }
              </Typography>
            )
          }
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
