import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import FormControl from "material-ui/es/Form/FormControl";
import Select from "material-ui/es/Select/Select";
import Button from "material-ui/es/Button/Button";
import {SelfStats, statsChamp, statsYear, TeamStats} from "../../fixtures/stats";
import MenuItem from "material-ui/es/Menu/MenuItem";
import HelpIcon from '@material-ui/icons/Help';
import IconButton from "material-ui/es/IconButton/IconButton";
import TeamTableView from "../schools/school/statistic/TeamTableView";
import styles from '../styles'



class StatsPageContent extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        tableView: false,
        TeamStats,
        SelfStats,
        statsChamp,
        statsYear,
        selectedYearFilter: 1,
        selectedChampionshipFilter: 1,
        selfView: true
    };

    onYearFilterChange = event => {
        this.setState({selectedYearFilter: event.target.value});
    };

    onChampionshipFilterChange = event => {
        this.setState({selectedChampionshipFilter: event.target.value});
    };

    render() {
        const {classes} = this.props;
        const {SelfStats,TeamStats} = this.state;
        return (
            <section style={{paddingLeft: 168, paddingRight: 168, paddingTop: 32, paddingBottom: 64}}>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <Grid container spacing={16}>
                            <Grid item>
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
                                            this.state.statsYear.map((item) => (
                                                <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item>
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
                                            this.state.statsChamp.map((item) => (
                                                <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <Button classes={{
                                    root: classes.buttonStats,
                                    label: classes.gray
                                }}>
                                    Сбросить
                                </Button>
                            </Grid>
                            <Grid item style={{marginLeft:'auto'}}>
                                <IconButton className={classes.button} aria-label="Delete">
                                    <HelpIcon/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <TeamTableView TeamStats={TeamStats} />
                    </Grid>
                </Grid>
            </section>
        )
    }
}

StatsPageContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatsPageContent);