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
    boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
  },
  pokemonInfo: {
    backgroundColor: '#f44336',
  },
  trainerInfo: {
    backgroundColor: '#ff9800',
  },
  itemInfo: {
    backgroundColor: '#2196f3',
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
const Decker = (props) => {
  const classes = useStyles();
  const { deckList } = props;

  /**
   * deckInfo
   * 牌組資訊
   *
   */
  const deckInfo = React.useMemo(() => {
    let pokemonCount = 0;
    let trainerCount = 0;
    let itemCount = 0;
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
        case CardTypes.ENERGY.value:
          energyCount += 1;
          break;
        default:
      }
    });

    return {
      pokemonCount,
      trainerCount,
      itemCount,
      energyCount,
    };
  }, [deckList]);

  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6} md={3} lg={3}><Alert severity="info" className={classes.pokemonInfo}>{`寶可夢: ${deckInfo.pokemonCount}`}</Alert></Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}><Alert severity="info" className={classes.trainerInfo}>{`訓練家: ${deckInfo.trainerCount}`}</Alert></Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}><Alert severity="info" className={classes.itemInfo}>{`物品: ${deckInfo.itemCount}`}</Alert></Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}><Alert severity="info" className={classes.energyInfo}>{`能量: ${deckInfo.energyCount}`}</Alert></Grid>
      </Grid>
      <Grid container spacing={3}>
        {
          deckList.map((card) => {
            return (
              <Grid item xs={6} sm={4} md={3} lg={2}>
                <div className={classes.card}>
                  <img src={card.imgSrc} width="100%" />
                </div>
              </Grid>
            );
          })
        }
        {
          (deckList.length === 0) && (
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
        }
      </Grid>
    </div>
  );
};

export default Decker;