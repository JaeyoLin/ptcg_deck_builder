import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
}));

const Decker = (props) => {
  const classes = useStyles();
  const { deckList } = props;

  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        {
          deckList.map((card) => {
            return (
              <Grid item xs={6} sm={4} md={3} lg={2}>
                <div className={classes.card}>
                  <img src="https://ptcgcard.com/img/173.cb2d1b04.jpg" width="100%" />
                </div>
              </Grid>
            );
          })
        }
        {
          (deckList.length === 0) && (
            <Box my={2}>
              <Typography
                variant="h5"
                color="initial"
                align="center"
                // style={{ height: '50px', color: '#000000' }}
              >
                { `目前牌組沒有卡片。` }
              </Typography>
            </Box>
          )
        }
      </Grid>
    </div>
  );
};

export default Decker;