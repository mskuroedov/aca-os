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


class ThankModal extends React.Component {
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
                <Button color='primary' variant='raised' onClick={this.handleClickOpen} className={classes.button}
                        style={{marginLeft: 'auto'}}>
                    Зарегистрироваться</Button>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    classes={{
                        paper: classNames(classes.dialogWindow,classes.bgTransparent)
                    }}
                    style={{background:'transparent'}}
                >


                    <DialogContent classes={{
                        root: classes.thankDialog
                    }}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} className={classes.thankDialogConatiner}>
                                <IconButton onClick={this.handleClose} className={classes.iconbtn}
                                            style={{float: 'right',color:'white',opacity:0.5}} aria-label="Delete">
                                    <CloseIcon/>
                                </IconButton>
                                <Typography className={classes.thankText}>Спасибо  за регистрацию!</Typography>
                            </Grid>
                        </Grid>

                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(ThankModal);

