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
import {seasonFilter, stageFilter, tournamentFilter} from "../../../fixtures/tournaments";
import styles from '../../styles';



class ModalFilters extends React.Component {
    state = {
        open: false,
        seasonFilter,
        selectedSeasonFilter: 1,
        stageFilter,
        selectedStageFilter: 1,
        tournamentFilter,
        selectedTournamentFilter: 1,
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    onSeasonFilterChange = event => {
        this.setState({selectedSeasonFilter: event.target.value});
    };
    onStageFilterChange = event => {
        this.setState({selectedStageFilter: event.target.value});
    };
    onTournamentFilterChange = event => {
        this.setState({selectedTournamentFilter: event.target.value});
    };


    render() {
        const {classes, selfView} = this.props;

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
                                <IconButton onClick={this.handleClose} className={classes.iconbtn}
                                            style={{float: 'right'}} aria-label="Delete">
                                    <CloseIcon/>
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <FormControl>
                                    <Select
                                        value={this.state.selectedSeasonFilter}
                                        onChange={this.onSeasonFilterChange}
                                        disableUnderline={true}
                                        classes={{
                                            select: classes.select,
                                            icon: classes.selectIcon,
                                        }}
                                        autoWidth
                                    >
                                        {
                                            this.state.seasonFilter.map((item) => (
                                                <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item>
                                <FormControl>
                                    <Select
                                        value={this.state.selectedTournamentFilter}
                                        onChange={this.onTournamentFilterChange}
                                        disableUnderline={true}
                                        classes={{
                                            select: classes.select,
                                            icon: classes.selectIcon,
                                        }}
                                        autoWidth
                                    >
                                        {
                                            this.state.tournamentFilter.map((item) => (
                                                <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item>
                                <FormControl>
                                    <Select
                                        value={this.state.selectedStageFilter}
                                        onChange={this.onStageFilterChange}
                                        disableUnderline={true}
                                        classes={{
                                            select: classes.select,
                                            icon: classes.selectIcon,
                                        }}
                                        autoWidth
                                    >
                                        {
                                            this.state.stageFilter.map((item) => (
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

export default withStyles(styles)(ModalFilters);

