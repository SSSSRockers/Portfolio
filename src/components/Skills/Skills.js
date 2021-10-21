import clsx from 'clsx';
import React from 'react';
import Step from '@material-ui/core/Step';
import Stepper from '@material-ui/core/Stepper';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const CustomSkills = withStyles({
    alternativeLabel: {
        top: 22,
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);

const CustomSkillsStyles = makeStyles({
    root: {
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        margin: "auto",
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%",
        borderRadius: "50%"
    }
});

function customSkills(props) {
    const classes = CustomSkillsStyles();
    const { active, completed } = props;

    const icons = {
        1:  'https://i.imgur.com/2mIQwwa.png',
        2:  'https://i.imgur.com/YDOeByd.png',
        3:  'https://i.imgur.com/BNv4bzz.png',
        4:  'https://i.imgur.com/2F9y2CO.png',
        5:  'https://i.imgur.com/AOW9XTD.png',
        6:  'https://i.imgur.com/qVfhAs4.png',
        7:  'https://i.imgur.com/gxL7keQ.png',
        8:  'https://i.imgur.com/xS8Qsj0.png',
        9:  'https://i.imgur.com/orwUGNS.png',
        10:  'https://i.imgur.com/x3mQjrm.png',
        11:  'https://i.imgur.com/gOgKa84.png',
        12: 'https://i.imgur.com/Aof901R.png',
        13: 'https://i.imgur.com/3xLjLXX.png',
        14: 'https://i.imgur.com/q1gnvWC.png'
    };

    return (
        <div
        className={clsx(classes.root, {
            [classes.active]: active,
            [classes.completed]: completed,
        })}
        >
            <img
                className={classes.img}
                alt={icons[String(props.icon)]}
                src={icons[String(props.icon)]}
            />
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: 1,
        width: '100%',
        backgroundColor: '#fff',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['React JS', 'JavaScript', 'TypeScript', 'StoryBook', 'HTML5', 'CSS3', 'Bootstrap 4', 'Material-UI', 'jQuery', 'PHP', 'Git', 'AngularJS', 'MySQL', 'FireBase'];
}

export default function Skills() {
    const classes = useStyles();
    const steps = getSteps();

    return (
        <div className={`${classes.root} Skills`}>
            <Stepper alternativeLabel activeStep={10} connector={<CustomSkills />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={customSkills}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}
