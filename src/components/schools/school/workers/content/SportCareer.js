import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Typography from "@material-ui/core/es/Typography/Typography";
import Paper from "@material-ui/core/es/Paper/Paper";
import Table from "@material-ui/core/es/Table/Table";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import Grid from "material-ui/es/Grid/Grid";
import Link from "react-router-dom/es/Link";
import styles from '../../../../styles'


class SportCareer extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <div>
                <Typography className={classes.title}>Спортивная карьера</Typography>
                <Paper className="paper">
                    <Table className="table no-bottom xs-hidden" >
                        <TableHead>
                            <TableRow>
                                <TableCell >Период</TableCell>
                                <TableCell >Вид спорта</TableCell>
                                <TableCell >Амплуа</TableCell>
                                <TableCell >Клуб</TableCell>
                                <TableCell numeric>Игровой номер</TableCell>
                                <TableCell numeric>Спортивный разряд</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell >1972-1976</TableCell>
                                <TableCell >Хоккей</TableCell>
                                <TableCell >Нападающий</TableCell>
                                <TableCell >«Нефтехимик»</TableCell>
                                {/*<TableCell >Канарейкин Фёдор Леонидович</TableCell>*/}
                                <TableCell numeric>13</TableCell>
                                <TableCell numeric>2</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >1976-1981</TableCell>
                                <TableCell >Хоккей</TableCell>
                                <TableCell >Нападающий</TableCell>
                                <TableCell >«Спартак» Москва</TableCell>
                                {/*<TableCell >Кудашов Алексей Николаевич</TableCell>*/}
                                <TableCell numeric>13</TableCell>
                                <TableCell numeric>2</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >1981-1999</TableCell>
                                <TableCell >Хоккей</TableCell>
                                <TableCell >Нападающий</TableCell>
                                <TableCell >«Ак Барс»</TableCell>
                                {/*<TableCell >Саяпов Ренат Хайдярович</TableCell>*/}
                                <TableCell numeric>13</TableCell>
                                <TableCell numeric>2</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <div className='lg-hidden'>
                        <Grid container spacing={0} style={{padding: 16}}>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Период</Typography>
                                <Typography className={classNames(classes.textMain,classes.mb16)}>2010-2017</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Амплуа</Typography>
                                <Typography className={classNames(classes.textMain,classes.mb16)}>Нападающий</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Команда</Typography>
                                <Typography className={classNames(classes.textMain,classes.mb16)}>АкБарс</Typography>

                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Игры</Typography>
                                <Typography className={classNames(classes.textMain,classes.mb16)}>36</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Выигрыши</Typography>
                                <Typography className={classNames(classes.textMain,classes.mb16)}>14</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Тренер</Typography>
                                <Link className={classNames(classes.link,classNames(classes.textMain,classes.mb16))} to='2'>Саяпов Ренат Маратович</Link>
                            </Grid>
                        </Grid>
                    </div>

                </Paper>

            </div>

        )
    }
}

SportCareer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SportCareer);