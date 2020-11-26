import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';

import DeckDashboard from '../Components/DeckDashboard';
import Copyright from '../Components/Copyright';
import ScrollTop from '../Components/ScrollTop';

import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const App = (props) => {
  return (
    <div className="App">
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6">PTCG 卡表產生器</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container maxWidth={false}>
        <Box my={2}>
          <DeckDashboard />
        </Box>
      </Container>
      <Box mt={8}>
          <Copyright />
        </Box>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}

export default App;
