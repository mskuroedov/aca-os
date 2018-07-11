import React from 'react';
import {Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "material-ui";
import Typography from "@material-ui/core/es/Typography/Typography";
import withStyles from "@material-ui/core/es/styles/withStyles";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from '../../styles'

class Career extends React.Component {
    render() {
        const {classes} = this.props;
        return(
            <Grid item xs={12} lg={8} className="paper_w_table">
                <Paper className="paper">
                    <Table className="table xs-hidden">
                        <TableHead>
                            <TableRow>
                                <TableCell >Вид спорта</TableCell>
                                <TableCell >Игровой номер</TableCell>
                                <TableCell >Амплуа</TableCell>
                                <TableCell  >Команда</TableCell>
                                <TableCell  numeric>Спортивный разряд</TableCell>
                                {/*<TableCell  >Тренер</TableCell>*/}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell style={{borderBottom:0}}>Хоккей</TableCell>
                                <TableCell style={{borderBottom:0}}>13</TableCell>
                                <TableCell style={{borderBottom:0}}>Нападающий</TableCell>
                                <TableCell style={{borderBottom:0}}>Ак Барс</TableCell>
                                <TableCell style={{borderBottom:0}} numeric>2</TableCell>
                                {/*<TableCell style={{borderBottom:0}} ><span className='trainer'>Саяпов Ренат Маратович</span></TableCell>*/}
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Grid container spacing={0} style={{padding:16}} className='lg-hidden'>
                        <Grid item xs={12}>
                            <Typography className={classes.textSecondaryfs16}>Вид спорта</Typography>
                            <Typography className={classNames(classes.textMain,classes.mb16)}>Хоккей</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.textSecondaryfs16}>Игровой номер</Typography>
                            <Typography className={classNames(classes.textMain,classes.mb16)}>13</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.textSecondaryfs16}>Амплуа</Typography>
                            <Typography className={classNames(classes.textMain,classes.mb16)}>Нападающий</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.textSecondaryfs16}>Команда</Typography>
                            <Typography className={classNames(classes.textMain,classes.mb16)}>Ак Барс</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.textSecondaryfs16}>Спортивный разряд</Typography>
                            <Typography className={classNames(classes.textMain,classes.mb16)}> 2</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>

        )
    }
}

Career.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Career);
