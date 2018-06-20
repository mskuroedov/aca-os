import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import Switch from "@material-ui/core/es/Switch/Switch";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import Select from "material-ui/es/Select/Select";
import MenuItem from "material-ui/es/Menu/MenuItem";
import {seasonFilter, tournamentFilter, stageFilter} from "../../fixtures/tournaments";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import Button from "@material-ui/core/es/Button/Button";
import TableTeams from "./content/TableTeams";
import InputAdornment from "material-ui/es/Input/InputAdornment";
import Input from "material-ui/es/Input/Input";
import Icon from "material-ui/es/Icon/Icon";
import TableChamp from "./content/TableChamp";
import TableLeads from "./content/TableLeads";
import TablePrizes from "./content/TablePrizes";

const styles = theme => ({

    formControl:{
      width:'100%'
    },
    select: {
        backgroundColor: 'rgba(36,36,33,0.1)',
        paddingLeft: 17,
        paddingTop: 13,
        paddingBottom: 7,
        paddingRight: 40,
        maxHeight:36,
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
        fontSize: 14,
        fontWeight:'bold'

    },
    searchInput: {
        fontSize: 14,
        color: 'rgba(36,36,33,1)',

        marginTop: 11,
        paddingBottom: 5,
        maxWidth: 290,
        width:'100%',
        '&:before': {
            backgroundColor: 'rgba(0,0,0,0.2)'
        },
        '&:after': {
            backgroundColor: 'rgba(0,0,0,0.2)'
        }
    },
    searchInkbar: {
        color: 'rgba(36,36,33,1)',
        '&:before': {
            backgroundColor: 'rgba(0,0,0,0.2) !important'
        },
        '&:after': {
            backgroundColor: 'rgba(0,0,0,0.2) !important'
        }
    },
    bgGreen:{
        backgroundColor:'#005945 !important'
    },
    searchInputIcon: {
        color: 'rgba(145,143,138,1)',
        position: 'relative',
        fontSize: 16,
        top: 3,
    }


});


class TournamentsContent extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        seasonFilter,
        selectedSeasonFilter: 1,
        stageFilter,
        selectedStageFilter: 1,
        tournamentFilter,
        selectedTournamentFilter: 1,
    }

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
        const {classes} = this.props;
        return (
            <section className='main-section'>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
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
                    <Grid item xs={12}>
                        <Grid container spacing={16} alignItems='center'>

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

                            <Grid item>
                                <Button className={classes.button} aria-label="Delete">
                                    Сбросить
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <FormControl className={classes.formControl}>
                            <Input classes={{
                                root: classes.searchInput,
                                underline: classes.searchInkbar
                            }}
                                   endAdornment={
                                       <InputAdornment position="end"><Icon classes={{
                                           root: classes.searchInputIcon
                                       }}>
                                           search
                                       </Icon></InputAdornment>
                                   }
                                   placeholder="Поиск по имени..."

                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} style={{marginBottom:16}}>
                        <TableTeams/>
                    </Grid>
                    <Grid item xs={12} style={{marginBottom:16}}>
                        <TableChamp/>
                    </Grid>
                    <Grid item xs={12} style={{marginBottom:16}}>
                        <TableLeads/>
                    </Grid>
                    <Grid item xs={12} style={{marginBottom:16}}>
                        <TablePrizes/>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

TournamentsContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TournamentsContent);