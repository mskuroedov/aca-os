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
import TableTeams from "./infoContent/TableTeams";
import InputAdornment from "material-ui/es/Input/InputAdornment";
import Input from "material-ui/es/Input/Input";
import Icon from "material-ui/es/Icon/Icon";
import TableChamp from "./infoContent/TableChamp";
import TableLeads from "./infoContent/TableLeads";
import TablePrizes from "./infoContent/TablePrizes";
import ModalFilters from "./infoContent/ModalFilters";
import Paper from "material-ui/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import DescriptionTable from "./infoContent/DescriptionTable";

const styles = theme => ({
    paper:{
        [theme.breakpoints.up('lg')]:{
            paddingLeft:32,
            paddingRight:32,
            paddingTop:40,
            paddingBottom:16,
        },
        [theme.breakpoints.down('lg')]:{
            paddingLeft:32,
            paddingRight:32,
            paddingTop:24,
            paddingBottom:16,
        }
    },
    mainText:{
      fontSize:16,
        marginBottom:24,
        [theme.breakpoints.down('lg')]:{
          fontSize:14
        }
    },
    formControl: {
        width: '100%'
    },
    title: {
        fontSize: 20,
        color: ' rgba(36,36,33,0.6);',
        fontFamily: '"BlissPro",sans-serif',
        fontWeight: 'normal'
    },
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
        fontSize: 14,
        fontWeight: 'bold'

    },
    buttonGreen:{
      fontSize:14,
      fontWeight:'bold',
        transform:'translateX(-16px)'
    },
    searchInput: {
        fontSize: 14,
        color: 'rgba(36,36,33,1)',

        marginTop: 11,
        paddingBottom: 5,
        maxWidth: 290,
        width: '100%',
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
    bgGreen: {
        backgroundColor: '#005945 !important'
    },
    searchInputIcon: {
        color: 'rgba(145,143,138,1)',
        position: 'relative',
        fontSize: 16,
        top: 3,
    }


});


class TournamentInfo extends React.Component {
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
            <section >
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <DescriptionTable/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.title}>Описание</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classNames('paper',classes.paper)}>
                            <Typography className={classes.mainText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                            <Typography className={classNames(classes.mainText,'xs-hidden')}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                            <Button color='primary' className={classNames('lg-hidden',classes.buttonGreen)}>Подробнее</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} className={'xs-hidden'}>
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
                    <Grid item xs={10} lg={4}>
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
                    <Grid item xs={2} className={'lg-hidden'}>
                        <ModalFilters/>
                    </Grid>
                    <Grid item xs={12} style={{marginBottom: 16}}>
                        <TableTeams/>
                    </Grid>
                    <Grid item xs={12} style={{marginBottom: 16}}>
                        <TableChamp/>
                    </Grid>
                    <Grid item xs={12} style={{marginBottom: 16}}>
                        <TableLeads/>
                    </Grid>
                    <Grid item xs={12} style={{marginBottom: 16}}>
                        <TablePrizes/>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

TournamentInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TournamentInfo);