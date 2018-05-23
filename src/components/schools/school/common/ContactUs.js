import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import classNames from 'classnames';
import Dialog from 'material-ui/Dialog';
import DialogActions from 'material-ui/Dialog/DialogActions';
import DialogContent from 'material-ui/Dialog/DialogContent';
import DialogContentText from 'material-ui/Dialog/DialogContentText';
import DialogTitle from 'material-ui/Dialog/DialogTitle';
import {withStyles} from "material-ui/styles/index";
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import Input from "@material-ui/core/es/Input/Input";
import Grid from "@material-ui/core/es/Grid/Grid";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        fontSize: 13,
        fontWeight: 'bold',
        marginRight: 20,
        fontFamily: '"BlissPro",sans-serif',
    },
    iconbtn: {
        margin: 0,
        fontSize: 24,
        marginLeft: 'auto',
        fontWeight: 'bold',
        fontFamily: '"BlissPro",sans-serif',
        color: 'rgba(36,36,33,.54)',
        background: 'transparent',
        padding: 0,
        width: 24,
        height: 24,
        marginTop: -3

    },
    margin: {
        margin: theme.spacing.unit,
        marginLeft:0,
        marginBottom:0
    },
    textGray: {
        color: 'rgba(36,36,33,0.6)'
    },
    dialogWindow: {
        borderRadius: 12
    },
    dialogTitle: {
        color: '#242421',
        fontSize: 20,
        display: 'flex',
        fontWeight:'bold',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(36,36,33,.04)',
        paddingTop: 24,
        paddingBottom: 21

    },
    cssLabel: {
        color: 'rgba(36,36,33,1)',
        fontWeight:'bold',
        '&$cssFocused': {
            color: '#00755E',
        },
        fontSize: 16
    },
    cssFocused: {},
    cssUnderline: {
        '&:after': {
            borderBottomColor: '#00755E',
        },
    },
    inputRoot: {
        fontSize: 16
    },
    dialogContent:{
        maxWidth:360,
        paddingBottom:8
    }
});


class ContactUs extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const {classes} = this.props;
        return (
            <div style={{display: 'inline-block'}}>
                <Button onClick={this.handleClickOpen} color='primary' className={classes.button}>Написать
                    сообщение</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    classes={{
                        paper: classes.dialogWindow
                    }}
                >
                    <DialogTitle id="form-dialog-title"
                                 disableTypography
                                 classes={{
                                     root: classes.dialogTitle,
                                 }}
                    ><span>Написать сообщение</span>
                        <IconButton onClick={this.handleClose} className={classes.iconbtn} aria-label="Delete">
                            <CloseIcon/>
                        </IconButton>
                    </DialogTitle>
                    <DialogContent classes={{
                        root:classes.dialogContent
                    }}>
                        <Grid container spacing={16}>
                            <Grid item xs={12}>
                                <FormControl fullWidth className={classes.margin}>

                                    <InputLabel
                                        FormLabelClasses={{
                                            root: classes.cssLabel,
                                            focused: classes.cssFocused,
                                        }}
                                        htmlFor="name"
                                    >
                                        Имя
                                    </InputLabel>
                                    <Input
                                        fullwidth
                                        classes={{
                                            root: classes.inputRoot,
                                            underline: classes.cssUnderline,
                                        }}
                                        id="name"
                                    />
                                </FormControl>

                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel
                                        FormLabelClasses={{
                                            root: classes.cssLabel,
                                            focused: classes.cssFocused,
                                        }}
                                        htmlFor="phone"
                                    >
                                        Телефон
                                    </InputLabel>
                                    <Input
                                        fullwidth
                                        classes={{
                                            root: classes.inputRoot,
                                            underline: classes.cssUnderline,
                                        }}
                                        id="phone"
                                    />
                                </FormControl>

                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel
                                        FormLabelClasses={{
                                            root: classes.cssLabel,
                                            focused: classes.cssFocused,
                                        }}
                                        htmlFor="msg"
                                    >
                                        Сообщение
                                    </InputLabel>
                                    <Input multiline
                                        fullwidth
                                        classes={{
                                            root: classes.inputRoot,
                                            underline: classes.cssUnderline,
                                        }}
                                        id="msg"
                                    />
                                </FormControl>

                            </Grid>
                        </Grid>

                    </DialogContent>
                    <DialogActions
                        style={{
                            justifyContent: 'start',
                            padding: 14,
                            paddingTop: 0
                        }}>
                        <Button variant="raised" color='primary' onClick={this.handleClose} className={classes.button}>
                            Отправить</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(ContactUs);

