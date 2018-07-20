import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import FormControl from "material-ui/es/Form/FormControl";
import Select from "material-ui/es/Select/Select";
import Paper from "material-ui/es/Paper/Paper";
import MenuItem from "material-ui/es/Menu/MenuItem";
import {ampluaFilter} from "../../../fixtures/tournaments";
import Switch from "@material-ui/core/es/Switch/Switch";
import TablePrizesComponent from "./TablePrizesComponent";
import styles from '../../styles'



class TablePrizes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <Grid container spacing={16} alignItems='center'>
                <Grid item>
                    <Typography className={classes.title} style={{marginBottom:0}}>Призы и награды</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper className='paper'>
                        <TablePrizesComponent/>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

TablePrizes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TablePrizes);