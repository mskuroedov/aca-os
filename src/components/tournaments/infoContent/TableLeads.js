import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import FormControl from "material-ui/es/Form/FormControl";
import Select from "material-ui/es/Select/Select";
import IconButton from "material-ui/es/IconButton/IconButton";
import Icon from "material-ui/es/Icon/Icon";
import Paper from "material-ui/es/Paper/Paper";
import TableLeadsComponent from "./TableLeadsComponent";
import MenuItem from "material-ui/es/Menu/MenuItem";
import {ampluaFilter} from "../../../fixtures/tournaments";
import Switch from "@material-ui/core/es/Switch/Switch";
import styles from '../../styles'


class TableLeads extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        ampluaFilter,
        selectedAmpluaFilter: 1,
        checked: true
    }

    onAmpluaFilterChange = event => {
        this.setState({selectedAmpluaFilter: event.target.value});
    };

    render() {
        const {classes} = this.props;
        return (
            <Grid container spacing={16} alignItems='center'>
                <Grid item>
                    <Typography className={classes.title} style={{marginBottom:0}}>Лидеры</Typography>
                </Grid>
                <Grid item className={classes.lgMlAuto}>
                    <Grid container spacing={0} alignItems={'center'}>
                        <Grid item>
                            <Select
                                value={this.state.selectedAmpluaFilter}
                                onChange={this.onAmpluaFilterChange}
                                disableUnderline={true}
                                classes={{
                                    root: classes.selectRoot,
                                    select: classes.select,
                                    icon: classes.selectIcon,
                                }}
                            >
                                {
                                    this.state.ampluaFilter.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                                    ))
                                }
                            </Select>
                        </Grid>
                        <Grid item>
                            <FormControl>

                                <Switch
                                    color='primary'
                                    classes={{}}
                                    checked={this.state.checked}
                                    onChange={() => {
                                        this.setState({
                                            checked: !this.state.checked
                                        })
                                    }}

                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <span className={classNames(classes.lgMlAuto,classes.switchName)}>Плей-офф</span>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={12}>
                    <Paper className='paper'>
                        <TableLeadsComponent/>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

TableLeads.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableLeads);