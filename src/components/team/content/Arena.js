import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Paper from "material-ui/es/Paper/Paper";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import Table from "@material-ui/core/es/Table/Table";
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import TableBody from "@material-ui/core/es/TableBody/TableBody";

const styles = theme => ({

    title: {
        fontSize: 20,
        color: ' rgba(36,36,33,0.6);',
        fontFamily: '"BlissPro",sans-serif',
        fontWeight: 'normal'
    }
});


class Arena extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Typography className={classes.title}>Арена</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper className='paper'>
                        <Table className='table no-bottom'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Название</TableCell>
                                    <TableCell>Город</TableCell>
                                    <TableCell numeric>Вместительность (чел.)</TableCell>
                                    <TableCell numeric>Год постройки</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >
                                <TableRow>
                                    <TableCell>Татнефть-Арена</TableCell>
                                    <TableCell>Казань</TableCell>
                                    <TableCell numeric>8874</TableCell>
                                    <TableCell numeric>2005</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>

        )
    }
}

Arena.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Arena);