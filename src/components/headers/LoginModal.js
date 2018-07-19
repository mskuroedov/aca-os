import React from 'react';
import Button from 'material-ui/Button';
import classNames from 'classnames';
import Dialog from 'material-ui/Dialog';
import DialogActions from 'material-ui/Dialog/DialogActions';
import DialogContent from 'material-ui/Dialog/DialogContent';
import {withStyles} from "material-ui/styles/index";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Grid from "@material-ui/core/es/Grid/Grid";
import {FormControl} from 'material-ui/Form';
import styles from '../styles'
import Typography from "@material-ui/core/es/Typography/Typography";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import Input from "@material-ui/core/es/Input/Input";
import RegModal from "./RegModal";


class LoginModal extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleChange = event => {
        this.setState({name: event.target.value});
    };

    render() {
        const {classes} = this.props;
        return (
            <div style={{display: 'inline-block'}}>
                <Button onClick={this.handleClickOpen}
                        style={{fontSize: 15, color: 'white', textTransform: 'capitalize'}}>Войти</Button>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    classes={{
                        paper: classes.dialogWindow
                    }}
                >


                    <DialogContent classes={{
                        root: classes.authDialog
                    }}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} className={classes.authDialogHeader}>
                                <IconButton onClick={this.handleClose} className={classes.iconbtn}
                                            style={{float: 'right'}} aria-label="Delete">
                                    <CloseIcon/>
                                </IconButton>
                                <Typography className={classes.authTitle}>
                                    Авторизация
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={0} className={classes.authDialogContent}>
                            <Grid item xs={12}>
                                <FormControl className={classes.formControl} style={{marginBottom: 16}}>
                                    <InputLabel htmlFor="name-error" classes={{
                                        root: classes.inputLabel,
                                        shrink: classes.inputLabelShrink
                                    }}>Email</InputLabel>
                                    <Input onChange={this.handleChange} className={classes.inputRoot}/>
                                </FormControl>

                                <FormControl className={classes.formControl} style={{marginBottom: 28}}>
                                    <InputLabel htmlFor="name-error" classes={{
                                        root: classes.inputLabel,
                                        shrink: classes.inputLabelShrink
                                    }}>Пароль</InputLabel>
                                    <Input type='password' onChange={this.handleChange} className={classes.inputRoot}/>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={0} justify={'space-between'}>
                                    <Grid item>
                                        <a className={classes.link} style={{fontSize: 14, textTransform: 'none'}}>Не
                                            могу войти</a>
                                    </Grid>
                                    <Grid item>
                                        <RegModal onClick={this.handleClose}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions
                        style={{
                            justifyContent: 'start',
                            padding: 14,
                            paddingTop: 17,
                            paddingRight: 32,
                            paddingBottom: 19
                        }}>
                        <Button color='primary' variant='raised' onClick={this.handleClose} className={classes.button}
                                style={{marginLeft: 'auto'}}>
                            Войти</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(LoginModal);

