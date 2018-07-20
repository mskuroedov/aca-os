import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import Switch from "@material-ui/core/es/Switch/Switch";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import Select from "material-ui/es/Select/Select";
import MenuItem from "material-ui/es/Menu/MenuItem";
import {calendar, seasonFilter, stagesFilter, statusFilter, leaguesFilter} from "../../fixtures/calendar";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import Input from "@material-ui/core/es/Input/Input";
import CalendarTableView from "./CalendarTableView";
import Calendar from "./Calendar";

const styles = theme => ({


    select: {
        backgroundColor: 'rgba(36,36,33,0.1)',
        paddingLeft: 17,
        paddingTop: 13,
        paddingBottom: 7,
        paddingRight: 40,
        maxHeight: 36,
        fontSize: 14,
        color: '#242421',
        '&:after': {
            backgroundColor: '#242421'
        }
    },
    selectIcon: {
        color: '#6D6D6D',
    },
    selectLine: {
        color: 'transparent'
    },
    button: {
        color: 'rgba(36,36,33,.3)',
        padding: 0,
        fontSize: 24
    },
    searchInput: {
        fontSize: 14,
        color: 'rgba(36,36,33,1)',
        backgroundColor: 'red',
        paddingBottom: 7,
        paddingLeft: 17,
        paddingTop: 5,
        paddingRight: 5,
        maxWidth: 103,
        minHeight: 36,
        '&:before': {
            backgroundColor: 'rgba(36,36,33,0.1)',
            maxHeight: 36,
            top: 2,

        },
        '&:after': {
            backgroundColor: 'rgba(0,0,0,0.2)'
        }
    },
    searchInkbar: {
        backgroundColor: 'transparent',
        '&:before': {
            borderBottom: 'none !important'
        },
        '&:after': {
            borderBottom: 'none !important'
        }
    },
    bgGreen: {
        backgroundColor: '#005945 !important'
    }

});


class CalendarView extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        calendar,
        CalendarView: false,
        seasonFilter,
        selectedSeasonFilter: 1,
        statusFilter,
        selectedStatusFilter: 1,
        leaguesFilter,
        selectedLeagueFilter: 1,
        stagesFilter,
        selectedStageFilter: 1,
    }

    onSeasonFilterChange = event => {
        this.setState({selectedSeasonFilter: event.target.value});
    };
    onStatusFilterChange = event => {
        this.setState({selectedSeasonFilter: event.target.value});
    };
    onLeaguesFilterChange = event => {
        this.setState({selectedSeasonFilter: event.target.value});
    };
    onStageFilterChange = event => {
        this.setState({selectedSeasonFilter: event.target.value});
    };


    render() {
        const {classes} = this.props;
        const {calendar} = this.state;
        return (
            <section className={'main-section'}>
                <Grid container spacing={16}>

                    <Grid item xs={12} lg={4}>
                        <Grid container alignItems='center'>
                            <Grid item> <span className={classes.switchName}
                                              style={{color: this.state.CalendarView ? '#00755E' : '#242421'}}>Календарь</span>
                            </Grid>
                            <Grid item><Switch
                                color='primary'
                                classes={{
                                    bar: classes.bgGreen,
                                    icon: classes.bgGreen,
                                    iconChecked: classes.bgGreen,
                                }}
                                checked={this.state.CalendarView}
                                onChange={() => {
                                    this.setState({CalendarView: !this.state.CalendarView})
                                }}
                            /></Grid>
                            <Grid item> <span className={classes.switchName}
                                              style={{color: this.state.CalendarView ? '#242421' : '#00755E'}}>Таблица</span>
                            </Grid>
                        </Grid>

                    </Grid>
                    {this.state.CalendarView &&
                    <Grid item xs={12}>
                        <Grid container spacing={16} alignItems='center'>
                            <Grid item>
                                <FormControl className={classes.formControl}>
                                    <Input classes={{
                                        root: classes.searchInput,
                                        underline: classes.searchInkbar
                                    }}
                                           placeholder="C"

                                    />
                                </FormControl>
                                <span style={{marginLeft: 8, marginRight: 8}}>—</span>
                                <FormControl className={classes.formControl}>
                                    <Input classes={{
                                        root: classes.searchInput,
                                        underline: classes.searchInkbar
                                    }}
                                           placeholder="По"

                                    />
                                </FormControl>
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
                                        value={this.state.selectedStatusFilter}
                                        onChange={this.onStatusFilterChange}
                                        disableUnderline={true}
                                        classes={{
                                            select: classes.select,
                                            icon: classes.selectIcon,
                                        }}
                                        autoWidth
                                    >
                                        {
                                            this.state.statusFilter.map((item) => (
                                                <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item>
                                <FormControl>
                                    <Select
                                        value={this.state.selectedLeagueFilter}
                                        onChange={this.onLeaguesFilterChange}
                                        disableUnderline={true}
                                        classes={{
                                            select: classes.select,
                                            icon: classes.selectIcon,
                                        }}
                                        autoWidth
                                    >
                                        {
                                            this.state.leaguesFilter.map((item) => (
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
                                            this.state.stagesFilter.map((item) => (
                                                <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <IconButton className={classes.button} aria-label="Delete">
                                    <CloseIcon/>
                                </IconButton>
                            </Grid>

                        </Grid>
                    </Grid>
                    }


                    <Grid item xs={12}>
                        {this.state.CalendarView ? <CalendarTableView calendar={calendar}/> : <Calendar />}

                    </Grid>
                </Grid>
            </section>
        )
    }
}

CalendarView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CalendarView);