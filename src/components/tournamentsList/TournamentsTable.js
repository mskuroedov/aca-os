import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Table from "material-ui/es/Table/Table";
import TableHead from "material-ui/es/Table/TableHead";
import TableRow from "material-ui/es/Table/TableRow";
import TableCell from "material-ui/es/Table/TableCell";
import TableBody from "material-ui/es/Table/TableBody";
import Link from "react-router-dom/es/Link";
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import styles from '../styles'


class TournamentsTable extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <div>
                <Table className="table  no-bottom xs-hidden">
                    <TableHead>
                        <TableRow>
                            <TableCell>Название</TableCell>
                            <TableCell numeric>Матчи</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <Link to='tournaments/1'>Предсезонный турнир в Чехии</Link>
                            </TableCell>
                            <TableCell numeric>
                                54
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Link to='tournaments/1'>Турнир по хоккею им. Геннадия Цыганкова</Link>
                            </TableCell>
                            <TableCell numeric>
                                12
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Link to='tournaments/1'>Юниорский Вызов Предсезонный турнир в Шклове(2008 год)</Link>
                            </TableCell>
                            <TableCell numeric>
                                8
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Link to='tournaments/1'>Предсезонный турнир в ст. Северская в августе по
                                    2004-2008г.р.</Link>
                            </TableCell>
                            <TableCell numeric>
                                0
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Link to='tournaments/1'>Регулярный турнир по хоккею с шайбой памяти «Королёва И.Б.» г.
                                    Зеленоград</Link>
                            </TableCell>
                            <TableCell numeric>
                                32
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div className='lg-hidden'>
                    <Grid container spacing={0} style={{padding: 16}} className='border-bottom'>
                        <Grid item xs={12} style={{marginBottom:16}}>
                            <Typography className={classes.textSecondary}>Название</Typography>
                            <Link to='tournaments/1' className={'link'}>Предсезонный турнир в Чехии</Link>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.textSecondary}>Матчи</Typography>
                            <Typography className={classes.textMain}>54</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} style={{padding: 16}} className='border-bottom'>
                        <Grid item xs={12} style={{marginBottom:16}}>
                            <Typography className={classes.textSecondary}>Название</Typography>
                            <Link to='tournaments/1' className={'link'}>Турнир по хоккею им. Геннадия Цыганкова</Link>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.textSecondary}>Матчи</Typography>
                            <Typography className={classes.textMain}>12</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} style={{padding: 16}} className='border-bottom'>
                        <Grid item xs={12} style={{marginBottom:16}}>
                            <Typography className={classes.textSecondary}>Название</Typography>
                            <Link to='tournaments/1' className={'link'}>Юниорский Вызов Предсезонный турнир в Шклове(2008 год)</Link>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.textSecondary}>Матчи</Typography>
                            <Typography className={classes.textMain}>8</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} style={{padding: 16}} className='border-bottom'>
                        <Grid item xs={12} style={{marginBottom:16}}>
                            <Typography className={classes.textSecondary}>Название</Typography>
                            <Link to='tournaments/1' className={'link'}>Предсезонный турнир в ст. Северская в августе по
                                2004-2008г.р.</Link>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.textSecondary}>Матчи</Typography>
                            <Typography className={classes.textMain}>0</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} style={{padding: 16}} className=''>
                        <Grid item xs={12}>
                            <Typography className={classes.textSecondary}>Название</Typography>
                            <Link to='tournaments/1' className={'link'}>Регулярный турнир по хоккею с шайбой памяти «Королёва И.Б.» г.
                                Зеленоград</Link>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.textSecondary}>Матчи</Typography>
                            <Typography className={classes.textMain}>32</Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>

        )
    }
}

TournamentsTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TournamentsTable);