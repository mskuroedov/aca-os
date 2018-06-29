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

const styles = theme => ({
    button: {
        fontSize: 13,
        fontWeight: 'bold',
        fontFamily: '"BlissPro",sans-serif',
        color: 'rgba(36,36,33,.5)',
    },

    select: {
        backgroundColor: 'rgba(36,36,33,0.1)',
        paddingLeft: 17,
        paddingBottom: 10,
        paddingTop: 16,
        paddingRight: 40,
        fontSize: 16,
        color: '#242421',
        '&:after': {
            backgroundColor: '#242421'
        }
    },
    selectIcon: {
        color: '#6D6D6D',
        marginTop: 0
    },
    selectLine: {
        color: 'transparent'
    },
    hasUpdates: {
        position: 'relative',
        '&:after': {
            content: '',
            position: 'absolute',
            width: 5,
            height: 5,
            backgroundColor: 'yellow',
            borderRadius: '100%',
            top: 0,
            right: 0
        }
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
        marginLeft: 0,
        marginBottom: 0
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
        fontWeight: 'bold',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(36,36,33,.04)',
        paddingTop: 24,
        paddingBottom: 21

    },
    cssLabel: {
        color: 'rgba(36,36,33,1)',
        fontWeight: 'bold',
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
    dialogContent: {
        maxWidth: 360,
        paddingBottom: 8
    }
});


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

