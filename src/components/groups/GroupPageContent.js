import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import Select from "material-ui/es/Select/Select";
import MenuItem from "material-ui/es/Menu/MenuItem";
import {statsAmplua} from "../../fixtures/stats";
import {sportsman} from "../../fixtures/sportsman";
import Typography from "@material-ui/core/es/Typography/Typography";
import TilesView from "../schools/school/sportsman/tiles/TilesView";
import TrainerView from "./TrainerView";
import styles from '../styles'

class GroupPageContent extends React.Component {
    state = {
        tableView: false,
        statsAmplua,
        sportsman,
        selectedAmpluaFilter: 1,
    };

    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        const {statsAmplua, sportsman} = this.state;
        return (
            <section className={'main-section'}>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <FormControl>
                            <Select
                                value={this.state.selectedAmpluaFilter}
                                // onChange={this.onYearFilterChange}
                                disableUnderline={true}
                                classes={{
                                    select: classes.select,
                                    icon: classes.selectIcon,
                                }}
                                autoWidth
                            >
                                {
                                    this.state.statsAmplua.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.title}>Спортсмены</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TilesView sportsman={sportsman}/>
                    </Grid>
                    <Grid item xs={12}>

                        <Typography className={classes.title}>Тренерский состав</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={16}>
                            <Grid item xs={12} lg={4}>
                                <TrainerView/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>

        )
    }
}

GroupPageContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GroupPageContent);