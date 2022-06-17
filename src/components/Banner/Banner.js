import React from 'react'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    marginTop: {
        zIndex: '2',
        marginTop: '20px',
    },
    paddingTop: {
        zIndex: '2',
        paddingTop: '30px',
    },
    getStarted: {
        zIndex: '2',
        marginTop: '3%',
        color: 'rgba(0,0,0,.6)',
        background: 'linear-gradient(180deg, #ffdc0d 0, #ffbf0d 100%)',
    }
}));

function Banner() {
    const classes = useStyles();

    const handleScrollMenu = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#aboutSection');

        if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Box className="Banner-Box">
            <Typography className={classes.paddingTop} variant="h5">
                Front-End Developer
            </Typography>
            <Typography className={classes.marginTop}>
                4.9 years of hands-on, comprehensive knowledge of agile methodologies and web-based applications
            </Typography>
            <Typography className={classes.marginTop}>
                Proven ability to work on multiple projects while meeting challenging deadlines
            </Typography>
            <Button variant="contained" color="primary" className={`${classes.getStarted}`} onClick={handleScrollMenu}>Get Started</Button>
        </Box>
    )
}

export default Banner
