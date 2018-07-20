import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import Paper from "@material-ui/core/es/Paper/Paper";
import TableChampComponent from "./TableChampComponent";
import FormControl from "material-ui/es/Form/FormControl";
import Select from "material-ui/es/Select/Select";
import MenuItem from "material-ui/es/Menu/MenuItem";
import {tournamentFilter} from "../../../fixtures/tournaments";
import IconButton from "material-ui/es/IconButton/IconButton";
import Icon from "material-ui/es/Icon/Icon";
import styles from'../../styles'


class TableChamp extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        selectedChampFilter: 1,
        tournamentFilter
    };

    onChampFilterChange = event => {
        this.setState({selectedChampFilter: event.target.value});
    };

    render() {
        const {classes} = this.props;
        const {tournamentFilter} = this.state;
        return (
            <Grid container spacing={16} alignItems='center'>
                <Grid item>
                    <Typography className={classes.title} style={{marginBottom:0}}>Чемпионат</Typography>
                </Grid>
                <Grid item xs={12} lg className={classes.selectContainermlcenter}>
                    <FormControl className={classes.formControlmlmr}>
                        <Select
                            value={this.state.selectedChampFilter}
                            onChange={this.onChampFilterChange}
                            disableUnderline={true}
                            classes={{
                                root: classes.selectRoot,
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
                    <IconButton className={classes.button} aria-label="Delete">
                        <Icon>help</Icon>
                    </IconButton>
                </Grid>
                <Grid item xs={12}>
                    <Paper className='paper'>
                        <TableChampComponent/>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

TableChamp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableChamp);