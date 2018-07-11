import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
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
import Table from "@material-ui/core/es/Table/Table";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import Link from "react-router-dom/es/Link";
import styles from '../../styles';


class DescriptionTable extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <Paper className='paper'>
                <Table className="table  no-bottom fs-13 xs-hidden">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{width: 160}}>Название</TableCell>
                            <TableCell>Дата</TableCell>
                            <TableCell>Организатор</TableCell>
                            <TableCell>Сайт</TableCell>
                            <TableCell>Статус</TableCell>
                            <TableCell>Лига</TableCell>
                            <TableCell numeric>Год</TableCell>
                            <TableCell>Этап</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow style={{verticalAlign: 'top'}}>
                            <TableCell>
                                Турнир по хоккею им. Геннадия Цыганкова
                            </TableCell>
                            <TableCell>
                                12.09.18-14.02.2018
                            </TableCell>
                            <TableCell>
                                «Академия хоккея»
                            </TableCell>
                            <TableCell>
                                <Link to={'turnir1999hockey.com'}>turnir1999hockey.com</Link>
                            </TableCell>
                            <TableCell>
                                МКЦ Поволжье
                            </TableCell>
                            <TableCell>
                                НМХЛ
                            </TableCell>
                            <TableCell numeric>
                                1999
                            </TableCell>
                            <TableCell>
                                Плей-офф
                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
                <div className='lg-hidden'>
                    <Grid container spacing={0} style={{padding: 16}}>
                        <Grid item xs={12}>
                            <Typography className={classes.textSecondary}>Название</Typography>
                            <Typography className={classes.textMain}> Турнир по хоккею им. Геннадия Цыганкова
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} style={{padding: 16}}>
                        <Grid item xs={12}>
                            <Typography className={classes.textSecondary}>Дата</Typography>
                            <Typography className={classes.textMain}>                                12.09.18-14.02.2018
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} style={{padding: 16}}>
                        <Grid item xs={12}>
                            <Typography className={classes.textSecondary}>Организатор</Typography>
                            <Typography className={classes.textMain}>                                «Академия хоккея»
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} style={{padding: 16}}>
                        <Grid item xs={12}>
                            <Typography className={classes.textSecondary}>Сайт</Typography>
                            <Typography className={classes.textMain}>                                <Link className={'link'} to={'turnir1999hockey.com'}>turnir1999hockey.com</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} style={{padding: 16}}>
                        <Grid item xs={12}>
                            <Typography className={classes.textSecondary}>Статус</Typography>
                            <Typography className={classes.textMain}>                                МКЦ Поволжье
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} style={{padding: 16}}>
                        <Grid item xs={12}>
                            <Typography className={classes.textSecondary}>Лига</Typography>
                            <Typography className={classes.textMain}>                                НМХЛ
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} style={{padding: 16}}>
                        <Grid item xs={12}>
                            <Typography className={classes.textSecondary}>Год</Typography>
                            <Typography className={classes.textMain}>                                1999
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} style={{padding: 16}}>
                        <Grid item xs={12}>
                            <Typography className={classes.textSecondary}>Этап</Typography>
                            <Typography className={classes.textMain}>Плей-офф</Typography>
                        </Grid>
                    </Grid>
                </div>

            </Paper>
        )
    }
}

DescriptionTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DescriptionTable);