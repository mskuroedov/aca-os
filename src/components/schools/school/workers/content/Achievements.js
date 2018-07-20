import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import classNames from 'classnames';
import Typography from "@material-ui/core/es/Typography/Typography";
import Paper from "@material-ui/core/es/Paper/Paper";
import Table from "@material-ui/core/es/Table/Table";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import Grid from "@material-ui/core/es/Grid/Grid";
import styles from '../../../../styles'



class Achievements extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <div>
                <Typography className={classes.title}>Награды и достижения</Typography>
                <Paper className="paper">
                    <Table className="table no-bottom xs-hidden">
                        <TableHead>
                            <TableRow>
                                <TableCell >Дата</TableCell>
                                <TableCell >Мероприятие</TableCell>
                                <TableCell >Достижение</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell >21.07.1974</TableCell>
                                <TableCell >Чемпионат СССР</TableCell>
                                <TableCell >3 место</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >08.02.1982</TableCell>
                                <TableCell >Кубок СССР</TableCell>
                                <TableCell >лучший бомбардир</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >13.12.1994</TableCell>
                                <TableCell >Чемпионат СССР</TableCell>
                                <TableCell >1 место</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                    <div className='lg-hidden'>
                        <Grid container spacing={0} style={{padding: 16}} className='border-bottom'>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Название</Typography>
                                <Typography className={classNames(classes.textMain,classes.mb16)}>Лучший бомбардир 2017</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Дата</Typography>
                                <Typography className={classNames(classes.textMain,classes.mb16)}>21.12.2017</Typography>

                            </Grid>
                        </Grid>
                        <Grid container spacing={0} style={{padding:16}} className='border-bottom'>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Название</Typography>
                                <Typography className={classNames(classes.textMain,classes.mb16)}>Лучший бомбардир сезона 2016</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Дата</Typography>
                                <Typography className={classNames(classes.textMain,classes.mb16)}>25.12.2016</Typography>

                            </Grid>
                        </Grid>
                        <Grid container spacing={0} style={{padding:16}}>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Название</Typography>
                                <Typography className={classNames(classes.textMain,classes.mb16)}>Обладатель кубка Гагарина</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Дата</Typography>
                                <Typography className={classNames(classes.textMain,classes.mb16)}>13.12.2010</Typography>

                            </Grid>
                        </Grid>
                    </div>
                </Paper>

            </div>

        )
    }
}

Achievements.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Achievements);