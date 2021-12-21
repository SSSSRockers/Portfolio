import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Contacts from '@material-ui/icons/Contacts';
import MoreIcon from '@material-ui/icons/MoreVert';
import Bookmarks from '@material-ui/icons/Bookmarks';
import AccountTree from '@material-ui/icons/AccountTree';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles((theme) => ({
  appBarColor: {
    backgroundColor: '#7a19f1',
    '&::before': {
    content: '" "',
    right: 0,
    top: 0,
    opacity: .2,
    left: 0,
    height: '64px',
    position: 'absolute',
    zIndex: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNDQwIDMyMCc+PHBhdGggZmlsbD0nIzUwMDBjYScgZmlsbC1vcGFjaXR5PScwLjknIGQ9J00wLDY0TDYwLDU4LjdDMTIwLDUzLDI0MCw0MywzNjAsODBDNDgwLDExNyw2MDAsMjAzLDcyMCwyNTAuN0M4NDAsMjk5LDk2MCwzMDksMTA4MCwzMTQuN0MxMjAwLDMyMCwxMzIwLDMyMCwxMzgwLDMyMEwxNDQwLDMyMEwxNDQwLDBMMTM4MCwwQzEzMjAsMCwxMjAwLDAsMTA4MCwwQzk2MCwwLDg0MCwwLDcyMCwwQzYwMCwwLDQ4MCwwLDM2MCwwQzI0MCwwLDEyMCwwLDYwLDBMMCwwWic+PC9wYXRoPjwvc3ZnPg==)',
    },
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '18px',
      display: 'block',
    },
  },
  subTitle: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '15px',
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
  
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Header(props) {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleScrollMenu = (item, event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#'+item+'Section');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={(event) =>handleScrollMenu('about', event)}>
        <IconButton aria-label="about me" color="inherit">
          <Bookmarks />
        </IconButton>
        <p>About</p>
      </MenuItem>
      <MenuItem onClick={(event) =>handleScrollMenu('projects', event)}>
        <IconButton aria-label="project information" color="inherit">
          <AccountTree />
        </IconButton>
        <p>Projects</p>
      </MenuItem>
      <MenuItem onClick={(event) =>handleScrollMenu('contact', event)}>
        <IconButton aria-label="contact me" color="inherit">
          <Contacts />
        </IconButton>
        <p>Contact</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow} id="back-to-top-anchor">
      <HideOnScroll {...props}>
        <AppBar className={classes.appBarColor}>
          <Toolbar>
            <Typography className={classes.title} noWrap>
              Shushant Arora
              <Typography className={classes.subTitle} noWrap component={'span'}>
                Web Designer & Front End Developer
              </Typography>
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <MenuItem onClick={(event) =>handleScrollMenu('about', event)}>About</MenuItem>
              <MenuItem onClick={(event) =>handleScrollMenu('projects', event)}>Projects</MenuItem>
              <MenuItem onClick={(event) =>handleScrollMenu('contact', event)}>Contact</MenuItem>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
          {renderMobileMenu}
        </AppBar>
      </HideOnScroll>
    </div>
  );
}

export default Header