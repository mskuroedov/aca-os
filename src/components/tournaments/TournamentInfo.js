import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
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
import styles from'../styles'


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
                                <Button className={classes.button} aria-label="Delete" style={{color:'rgba(36,36,33,.6)'}}>
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