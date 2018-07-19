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
import Select from 'material-ui/Select';
import {MenuItem} from 'material-ui/Menu';
import {FormControl} from 'material-ui/Form';
import styles from '../styles'
import Typography from "@material-ui/core/es/Typography/Typography";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import Input from "@material-ui/core/es/Input/Input";
import FormLabel from "@material-ui/core/es/FormLabel/FormLabel";
import RadioGroup from "@material-ui/core/es/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/es/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/es/Radio/Radio";
import AvatarLoader from "./AvatarLoader";
import ThankModal from "./ThankModal";


class RegModal extends React.Component {
    state = {
        open: false,
        gender: 'female',

    };

    handleChangeRadio = event => {
        this.setState({gender: event.target.value});
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
                <a role='button' onClick={this.handleClickOpen} className={classes.link}
                   style={{fontSize: 14, textTransform: 'none'}}>Регистрация</a>


                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    classes={{
                        paper: classes.dialogWindow
                    }}
                >


                    <DialogContent classes={{
                        root: classes.regDialog
                    }}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} className={classes.authDialogHeader}>
                                <IconButton onClick={this.handleClose} className={classes.iconbtn}
                                            style={{float: 'right'}} aria-label="Delete">
                                    <CloseIcon/>
                                </IconButton>
                                <Typography className={classes.authTitle}>
                                    Регистрация
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={0} className={classes.authDialogContent}>
                            <Grid item xs={12}>
                                <FormControl className={classes.formControl} style={{marginBottom: 16}}>
                                    <InputLabel htmlFor="name-error" classes={{
                                        root: classes.inputLabel,
                                        shrink: classes.inputLabelShrink
                                    }}>Фамилия</InputLabel>
                                    <Input onChange={this.handleChange} className={classes.inputRoot}/>
                                </FormControl>
                                <FormControl className={classes.formControl} style={{marginBottom: 16}}>
                                    <InputLabel htmlFor="name-error" classes={{
                                        root: classes.inputLabel,
                                        shrink: classes.inputLabelShrink
                                    }}>Имя</InputLabel>
                                    <Input onChange={this.handleChange} className={classes.inputRoot}/>
                                </FormControl>
                                <FormControl className={classes.formControl} style={{marginBottom: 16}}>
                                    <InputLabel htmlFor="name-error" classes={{
                                        root: classes.inputLabel,
                                        shrink: classes.inputLabelShrink
                                    }}>Отчество</InputLabel>
                                    <Input onChange={this.handleChange} className={classes.inputRoot}/>
                                </FormControl>
                                <FormControl className={classes.formControl} style={{marginBottom: 16}}>
                                    <InputLabel htmlFor="name-error" classes={{
                                        root: classes.inputLabel,
                                        shrink: classes.inputLabelShrink
                                    }}>Должность</InputLabel>
                                    <Input onChange={this.handleChange} className={classes.inputRoot}/>
                                </FormControl>
                                <FormControl className={classes.formControl} style={{marginBottom: 32}}>
                                    <InputLabel htmlFor="name-error" classes={{
                                        root: classes.inputLabel,
                                        shrink: classes.inputLabelShrink
                                    }}>Дата рождения</InputLabel>
                                    <Input onChange={this.handleChange} className={classes.inputRoot}/>
                                </FormControl>

                            </Grid>
                            <Grid item xs={12}>
                                <FormControl component="fieldset" className={classes.formControl}
                                             style={{marginBottom: 37}}>
                                    <FormLabel component="legend" style={{
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                        color: 'rgba(36,36,33)',
                                        marginBottom: 16
                                    }}>Пол</FormLabel>
                                    <RadioGroup
                                        aria-label="Gender"
                                        name="gender1"
                                        value={this.state.gender}
                                        onChange={this.handleChangeRadio}
                                    >
                                        <FormControlLabel value="male" control={<Radio color='primary'/>}
                                                          label="Мужской"
                                                          classes={{
                                                              label: classes.radioLabel
                                                          }}
                                                          style={{height: 36}}/>
                                        <FormControlLabel value="female" control={<Radio color='primary'/>}
                                                          label="Женский"
                                                          classes={{
                                                              label: classes.radioLabel
                                                          }}
                                                          style={{height: 36}}/>
                                    </RadioGroup>
                                </FormControl>

                            </Grid>
                            <Grid item xs={12} style={{marginBottom: 16}}>
                                <Typography style={{
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: 'rgba(36,36,33)',
                                    marginBottom: 16
                                }}>Добавить фото</Typography>
                                <AvatarLoader/>
                            </Grid>

                            <Grid item xs={12}>
                                <FormControl className={classes.formControl} style={{marginBottom: 16}}>
                                    <InputLabel htmlFor="name-error" classes={{
                                        root: classes.inputLabel,
                                        shrink: classes.inputLabelShrink
                                    }}>Страна</InputLabel>
                                    <Input onChange={this.handleChange} className={classes.inputRoot}/>
                                </FormControl>
                                <FormControl className={classes.formControl} style={{marginBottom: 16}}>
                                    <InputLabel htmlFor="name-error" classes={{
                                        root: classes.inputLabel,
                                        shrink: classes.inputLabelShrink
                                    }}>Город/Населённый пункт</InputLabel>
                                    <Input onChange={this.handleChange} className={classes.inputRoot}/>
                                </FormControl>
                                <FormControl className={classes.formControl} style={{marginBottom: 16}}>
                                    <InputLabel htmlFor="name-error" classes={{
                                        root: classes.inputLabel,
                                        shrink: classes.inputLabelShrink
                                    }}>Телефон</InputLabel>
                                    <Input onChange={this.handleChange} className={classes.inputRoot}/>
                                </FormControl>
                                <FormControl className={classes.formControl} style={{marginBottom: 32}}>
                                    <InputLabel htmlFor="name-error" classes={{
                                        root: classes.inputLabel,
                                        shrink: classes.inputLabelShrink
                                    }}>Email</InputLabel>
                                    <Input onChange={this.handleChange} className={classes.inputRoot}/>
                                </FormControl>
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
                        <ThankModal/>
                    </DialogActions>

                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(RegModal);

