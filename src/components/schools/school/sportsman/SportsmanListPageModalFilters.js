import React from 'react';
import Button from 'material-ui/Button';
import classNames from 'classnames';
import Dialog from 'material-ui/Dialog';
import DialogActions from 'material-ui/Dialog/DialogActions';
import DialogContent from 'material-ui/Dialog/DialogContent';
import withStyles from "@material-ui/core/es/styles/withStyles";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TuneIcon from '@material-ui/icons/Tune';
import Grid from "@material-ui/core/es/Grid/Grid";
import Select from 'material-ui/Select';
import {MenuItem} from 'material-ui/Menu';
import {FormControl} from 'material-ui/Form';
import {sportsmanGroupFilters, sportsmanPositionFilters} from "../../../../fixtures/sportsman";
import styles from '../../../styles'


class SportsmanListPageModalFilters extends React.Component {
    state = {
        open: false,
        sportsmanPositionFilters,
        sportsmanGroupFilters,
        selectedYearFilter: 1,
        selectedChampionshipFilter: 1,
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    onYearFilterChange = event => {
        this.setState({selectedYearFilter: event.target.value});
    };

    onChampionshipFilterChange = event => {
        this.setState({selectedChampionshipFilter: event.target.value});
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
                                        value={this.state.selectedYearFilter}
                                        onChange={this.onYearFilterChange}
                                        disableUnderline={true}
                                        classes={{
                                            select: classes.select,
                                            icon: classes.selectIcon,
                                        }}
                                        autoWidth
                                    >
                                        {
                                            this.state.sportsmanGroupFilters.map((item) => (
                                                <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl>
                                    <Select
                                        value={this.state.selectedChampionshipFilter}
                                        onChange={this.onChampionshipFilterChange}
                                        disableUnderline={true}
                                        classes={{
                                            select: classes.select,
                                            icon: classes.selectIcon,
                                        }}
                                        autoWidth
                                    >
                                        {
                                            this.state.sportsmanPositionFilters.map((item) => (
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
                        <Button color='default' onClick={this.handleClose} className={classNames(classes.button,classes.textGray)}>
                            Сбросить</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(SportsmanListPageModalFilters);

