import './App.css';
import Divider from '@material-ui/core/Divider';
import Slider from './components/Slider';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer';
import Projects from './components/Projects/Projects';

import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '3% 0'
  },
  scrollToTopArrow: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleAnchorClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleAnchorClick} role="presentation" className={classes.scrollToTopArrow}>
        {children}
      </div>
    </Zoom>
  );
}

function App(props) {
  const classes = useStyles();

  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Toolbar />
      <Banner />
      <Slider />
      <Skills />
      <Divider className={classes.root} />
      <Projects />
      <Divider className={classes.root} />
      <Footer />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}

export default App;
