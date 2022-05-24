import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Link from '@material-ui/core/Link';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import mockProjectData from '../../mocks/projectsMock.json';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        margin: "auto",
        flex: '0 0 47%',
        minHeight: "250px",
        marginBottom: "3%"
    },
    image: {
        width: 128,
        height: 128,
    },
    imageBlack: {
        width: 128,
        height: 128,
        backgroundColor: 'black',
    },
    img: {
        margin: "auto",
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%",
    },
    marginAuto: {
        margin: 'auto',
    },
    bodyBox: {
        minHeight: '120px',
    }
}));

function Projects() {
  const classes = useStyles();

  return (
    <Grid flexWrap="wrap">
        <Box pb="2rem">
            <Typography variant="h3" mb="3" id="projectsSection">
                Projects
            </Typography>
        </Box>
        {
            mockProjectData.map(item => (
                <Grid key={`grid` + item.companyName} flexWrap="wrap">
                    <Box pb="2rem">
                        <Typography variant="h5" mb="3">
                            {item.companyName}
                        </Typography>
                    </Box>
                    <Grid
                        container
                        justify="center"
                        alignItems="center"
                    >
                        {item.projects.map(data => (
                            <Paper className={`${classes.paper} projectPaperBox`} key={`paper` + data.title}>
                                <Grid container spacing={2}>
                                    <Grid item className={classes.marginAuto}>
                                        <Link href={data.url} color="inherit">
                                            <ButtonBase className={data.url !== 'https://www.cdcit.co.uk/' ? classes.image : classes.imageBlack}>
                                                <img
                                                    className={classes.img}
                                                    alt={data.title}
                                                    src={data.imageUrl}
                                                />
                                            </ButtonBase>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                                {data.title}
                                            </Typography>
                                            <Box className={classes.bodyBox}>
                                                <Typography variant="body2" gutterBottom>
                                                    {data.description}
                                                </Typography>
                                            </Box>
                                            <Typography variant="body2" color="textSecondary">
                                                {data.workingLanguages}
                                            </Typography>
                                        </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        ))}
                    </Grid>
                </Grid>
            ))
        }
    </Grid>
  );
}

export default Projects;
