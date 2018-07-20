import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import classNames from 'classnames';
import Paper from "material-ui/es/Paper/Paper";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import Table from "@material-ui/core/es/Table/Table";
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import styles from'../../styles'




class CommonInfo extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Typography className={classes.title}>Общая информация</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper className='paper'>
                        <Table className='table no-bottom xs-hidden'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Лига</TableCell>
                                    <TableCell>Город</TableCell>
                                    <TableCell numeric>Год основания</TableCell>
                                    <TableCell>Титулы</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >
                                <TableRow>
                                    <TableCell>Континентальная хоккейная лига</TableCell>
                                    <TableCell>Казань</TableCell>
                                    <TableCell numeric>1956</TableCell>
                                    <TableCell>Кубок Гагарина 2009,2010,2018</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <div className='lg-hidden'>
                            <Grid container spacing={0} style={{padding: 16}} className='border-bottom'>
                                <Grid item xs={12}>
                                    <Typography className={classes.textSecondary}>Лига</Typography>
                                    <Typography className={classes.textMain}>Континентальная хоккейная лига</Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={0} style={{padding:16}} className='border-bottom'>
                                <Grid item xs={12}>
                                    <Typography className={classes.textSecondary}>Город</Typography>
                                    <Typography className={classes.textMain}>Казань</Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={0} style={{padding:16}} className='border-bottom'>
                                <Grid item xs={12}>
                                    <Typography className={classes.textSecondary}>Год основания</Typography>
                                    <Typography className={classes.textMain}>1956</Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={0} style={{padding:16}}>
                                <Grid item xs={12}>
                                    <Typography className={classes.textSecondary}>Титулы</Typography>
                                    <Typography className={classes.textMain}>Кубок Гагарина 2009,2010,2018</Typography>
                                </Grid>
                            </Grid>
                        </div>

                    </Paper>
                </Grid>
            </Grid>

        )
    }
}

CommonInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommonInfo);