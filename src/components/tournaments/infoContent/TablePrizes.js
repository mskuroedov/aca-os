import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
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

const styles = theme => ({
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
        [theme.breakpoints.up('md')]: {
            fontSize: 14
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 12
        },
        color: '#242421',
        '&:after': {
            backgroundColor: '#242421'
        },
    },
    selectIcon: {
        color: '#6D6D6D',
    },
    selectLine: {
        color: 'transparent'
    },
    bgGreen: {
        backgroundColor: '#005945 !important'
    },
});


class TablePrizes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <Grid container spacing={16} alignItems='center'>
                <Grid item>
                    <Typography className={classes.title}>Призы и награды</Typography>
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