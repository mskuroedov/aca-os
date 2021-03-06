import React from 'react';
import {Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "material-ui";
import withStyles from "@material-ui/core/es/styles/withStyles";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/es/Typography/Typography";
import classNames from 'classnames'
import styles from '../../styles'



class Achievements extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <Grid item xs={12} lg={8} className="paper_w_table">
                <Paper className="paper">
                    <Table className="table xs-hidden">
                        <TableHead>
                            <TableRow>
                                <TableCell >Дата</TableCell>
                                <TableCell >Соревнования</TableCell>
                                <TableCell numeric>Результат</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell style={{borderBottom:0}} className="table_w_icon">
                                    21.07.2016
                                </TableCell>
                                <TableCell style={{borderBottom:0}}>
                                    Чемпионат мира 2016
                                </TableCell>
                                <TableCell style={{borderBottom:0}} numeric>
                                    47
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <div className='lg-hidden'>
                        <Grid container spacing={0} style={{padding: 16}} className='border-bottom'>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondaryfs16}>Название</Typography>
                                <Typography className={classNames(classes.textMain,classes.mb16)}>Курс "Методологическая работа в области физической кульутры и спорта"</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondaryfs16}>Дата</Typography>
                                <Typography className={classNames(classes.textMain,classes.mb16)}>21.12.2017</Typography>

                            </Grid>
                        </Grid>
                        <Grid container spacing={0} style={{padding: 16}} className='border-bottom'>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondaryfs16}>Название</Typography>
                                <Typography className={classNames(classes.textMain,classes.mb16)}>Диплом за 1 место в сезоне 2016</Typography>

                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondaryfs16}>Дата</Typography>
                                <Typography className={classNames(classes.textMain,classes.mb16)}>21.12.2017</Typography>

                            </Grid>
                        </Grid>
                    </div>
                </Paper>
            </Grid>

        )
    }
}

Achievements.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Achievements);