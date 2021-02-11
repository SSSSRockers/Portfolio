import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
    hidden: {
        display: 'none'
    }
});

function SimpleDialog(props) {
    const textRef = useRef();
    const classes = useStyles();
    const [openSackBar, setOpenSackBar] = React.useState(false);
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        textRef.current.select();
        document.execCommand('copy');
        onClose(value);
        setOpenSackBar(true);
    };

  return (
        <>
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title">Email</DialogTitle>
                <TextField
                    className={classes.hidden}
                    inputRef={textRef}
                    id="emailTextField"
                    value="shushant.f1@gmail.com"
                />
                <List>
                    <ListItem button onClick={() => handleClose()} key="Email" component="a" href="mailto:shushant.f1@gmail.com">
                        <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <img width="100%" src="https://media-exp1.licdn.com/dms/image/C4D03AQH4G6xrMi-aGw/profile-displayphoto-shrink_200_200/0/1609467866484?e=1618444800&v=beta&t=lDarplsYqEIEqCfmtA8NjKlbNaGqkI_cSQ9nEEQoyFw" alt="Avtar" />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='shushant.f1@gmail.com' />
                    </ListItem>

                    <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
                    <ListItemAvatar>
                        <Avatar>
                        <FileCopyIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Copy Email" />
                    </ListItem>
                </List>
            </Dialog>
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={openSackBar}
                autoHideDuration={2000}
                onClose={() => setOpenSackBar(false)}
                message="Email Copied"
                action={
                <React.Fragment>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={() => setOpenSackBar(false)}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
                }
            />
        </>
    );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default function SimpleDialogDemo(props) {
  const { closeModal, modalOpen } = props;

  return (
    <div>
      <SimpleDialog open={modalOpen} onClose={closeModal} />
    </div>
  );
}
