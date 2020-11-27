import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MuiAlert from '@material-ui/lab/Alert';

import {
  CardTypes,
} from '../../Config';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  container: {
    // height: '100%',
    // minHeight: '300px',
    // display: 'flex',
    // boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
  },
  card: {
    // width: '100%',
    // height: '200px',
    // boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
    padding: '5px',
    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
  },
  deckInfo: {
    backgroundColor: '#f44336',
  },
  pokemonInfo: {
    backgroundColor: '#9c27b0',
  },
  trainerInfo: {
    backgroundColor: '#ff9800',
  },
  itemInfo: {
    backgroundColor: '#2196f3',
  },
  stadiumInfo: {
    backgroundColor: '#4F9D9D',
  },
  energyInfo: {
    backgroundColor: '#4caf50',
  },
  contentText: {
    marginTop: '20px',
    marginLeft: '10px',
  },
}));

/**
 * Decker
 *
 * @param {*} props
 */
const Decker = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const {
    deckList,
  } = props;

  /**
   * deckInfo
   * 牌組資訊
   *
   */
  const deckInfo = React.useMemo(() => {
    let pokemonCount = 0;
    let trainerCount = 0;
    let itemCount = 0;
    let stadiumConut = 0;
    let energyCount = 0;

    deckList.forEach(card => {
      switch (card.type) {
        case CardTypes.POKEMON.value:
          pokemonCount += 1;
          break;
        case CardTypes.TRAINER.value:
          trainerCount += 1;
          break;
        case CardTypes.ITEM.value:
          itemCount += 1;
          break;
        case CardTypes.STADIUM.value:
          stadiumConut += 1;
          break;
        case CardTypes.ENERGY.value:
          energyCount += 1;
          break;
        default:
      }
    });

    return {
      total: deckList.length,
      pokemonCount,
      trainerCount,
      itemCount,
      stadiumConut,
      energyCount,
    };
  }, [deckList]);

  /**
   * generateDeckList
   */
  const generateDeckList = React.useMemo(() => {
    if (deckList.length === 0) {
      return (
        <>
          <Typography
            variant="h5"
            color="secondary"
            align="center"
            // style={{ height: '50px', color: '#000000' }}
            className={classes.contentText}
          >
            { `目前牌組沒有卡片。` }
          </Typography>
        </>
      )
    } else {
      // 先重新排序所有卡片
      const sortDeck = deckList.sort((a, b) => {
        // 取得 a, b 的排序順序
        const aSort = Object.keys(CardTypes).find((type) => { return CardTypes[type].value === a.type; });
        const bSort = Object.keys(CardTypes).find((type) => { return CardTypes[type].value === b.type; });

        return CardTypes[aSort].sort > CardTypes[bSort].sort ? 1 : -1;
      });

      // 處理相同卡片要放一起
      const cardCount = [];
      sortDeck.forEach((card) => {
        // 判斷卡片是否已在陣列中
        let tmpIndex = null;
        const isExist = cardCount.some((tmp, index) => {
          if (tmp.set === card.set && tmp.id === card.id) {
            tmpIndex = index;
            return true;
          } else {
            return false;
          }
        });

        if (isExist) {
          cardCount[tmpIndex].total += 1;
        } else {
          cardCount.push({
            ...card,
            total: 1,
          });
        }
      });

      return (
        cardCount.map((card) => {
          return (
            <Grid item xs={6} sm={4} md={3} lg={2}>
              <div className={classes.card}>
                <img src={card.imgSrc} width="100%" />
                <Typography
                  variant="h6"
                  color="textPrimary"
                  align="center"
                >
                  {card.total }
                </Typography>
              </div>
            </Grid>
          );
        })
      )
    }
  }, [deckList]);

  return (
    <div className={classes.container} ref={ref}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6} md={4} lg={2}><Alert severity="info" className={classes.deckInfo}>{`總數: ${deckInfo.total}`}</Alert></Grid>
        <Grid item xs={6} sm={6} md={4} lg={2}><Alert severity="info" className={classes.pokemonInfo}>{`寶可夢: ${deckInfo.pokemonCount}`}</Alert></Grid>
        <Grid item xs={6} sm={6} md={4} lg={2}><Alert severity="info" className={classes.trainerInfo}>{`訓練家: ${deckInfo.trainerCount}`}</Alert></Grid>
        <Grid item xs={6} sm={6} md={4} lg={2}><Alert severity="info" className={classes.itemInfo}>{`物品: ${deckInfo.itemCount}`}</Alert></Grid>
        <Grid item xs={6} sm={6} md={4} lg={2}><Alert severity="info" className={classes.stadiumInfo}>{`競技場: ${deckInfo.stadiumConut}`}</Alert></Grid>
        <Grid item xs={6} sm={6} md={4} lg={2}><Alert severity="info" className={classes.energyInfo}>{`能量: ${deckInfo.energyCount}`}</Alert></Grid>
      </Grid>
      <Grid container spacing={3}>
        {
          generateDeckList
        }
      </Grid>
    </div>
  );
});

export default Decker;