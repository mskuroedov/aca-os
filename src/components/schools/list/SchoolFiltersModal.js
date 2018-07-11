import React from 'react';
import Button from 'material-ui/Button';
import classNames from 'classnames';
import Dialog from 'material-ui/Dialog';
import DialogActions from 'material-ui/Dialog/DialogActions';
import DialogContent from 'material-ui/Dialog/DialogContent';
import {withStyles} from "material-ui/styles/index";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TuneIcon from '@material-ui/icons/Tune';
import Grid from "@material-ui/core/es/Grid/Grid";
import Select from 'material-ui/Select';
import {MenuItem} from 'material-ui/Menu';
import {FormControl} from 'material-ui/Form';
import {schoolCityFilters, schoolFilters} from "../../../fixtures/schools";
import styles from '../../styles'


class SchoolFiltersModal extends React.Component {
    state = {
        open: false,
        schoolFilters,
        schoolCityFilters,
        selectedFilter: 1,
        selectedFilterCity: 1,
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    onFiltersChange = event => {
        this.setState({selectedFilter: event.target.value});
    };
    onFiltersChangeCity = event => {
        this.setState({selectedFilterCity: event.target.value});
    };

    render() {
        const {classes} = this.props;
        return (
            <div style={{display: 'inline-block'}}>
                <IconButton onClick={this.handleClickOpen}
                            classes={{
                                root: classes.button,
                                label: 'has-updates-yellow'
                            }}>
                    <TuneIcon/>
                </IconButton>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    classes={{
                        paper: classes.dialogWindow
                    }}
                >


                    <DialogContent classes={{
                        root: classes.dialogContent
                    }}>
                        <Grid container spacing={16}>
                            <Grid item xs={12}>
                                <IconButton onClick={this.handleClose} className={classes.iconbtn} style={{float:'right'}} aria-label="Delete">
                                    <CloseIcon/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl>
                                    <Select
                                        value={this.state.selectedFilter}
                                        onChange={this.onFiltersChange}
                                        disableUnderline={true}
                                        classes={{
                                            select: classes.select,
                                            icon: classes.selectIcon,
                                        }}
                                        autoWidth
                                    >
                                        {
                                            this.state.schoolCityFilters.map((item) => (
                                                <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl>
                                    <Select
                                        value={this.state.selectedFilterCity}
                                        onChange={this.onFiltersChangeCity}
                                        disableUnderline={true}
                                        classes={{
                                            select: classes.select,
                                            icon: classes.selectIcon,
                                        }}
                                        autoWidth
                                    >
                                        {
                                            this.state.schoolFilters.map((item) => (
                                                <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions
                        style={{
                            justifyContent: 'end',
                            padding: 14,
                            paddingTop: 0
                        }}>
                        <Button color='default' onClick={this.handleClose} className={classes.button}>
                            Сбросить</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(SchoolFiltersModal);

