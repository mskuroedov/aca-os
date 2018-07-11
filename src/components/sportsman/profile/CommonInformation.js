import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "material-ui";
import Typography from "@material-ui/core/es/Typography/Typography";
import {withStyles} from 'material-ui/styles';
import styles from '../../styles'
import classNames from 'classnames'

class CommonInformation extends React.Component {
    render() {
        const {sportsman,classes} = this.props;

        return (
            <Grid item xs={12} className="paper_w_table">
                <Paper className="paper">
                    <Table className="table xs-hidden">
                        <TableHead>
                            <TableRow>
                                <TableCell>Год рождения</TableCell>
                                <TableCell>Год набора</TableCell>
                                <TableCell>Пол</TableCell>
                                <TableCell>Амплуа</TableCell>
                                <TableCell>Этап подготовки</TableCell>
                                <TableCell>Разряд</TableCell>
                                <TableCell>Хват</TableCell>
                                <TableCell>Рост</TableCell>
                                <TableCell>Вес</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell style={{borderBottom: 0}}>{sportsman.date_of_birth}</TableCell>
                                <TableCell style={{borderBottom: 0}}>{sportsman.recruitment_year}</TableCell>
                                <TableCell style={{borderBottom: 0}}>{sportsman.gender}</TableCell>
                                <TableCell style={{borderBottom: 0}}>{sportsman.role}</TableCell>
                                <TableCell style={{borderBottom: 0}}>{sportsman.stage_of_preparation}</TableCell>
                                <TableCell style={{borderBottom: 0}}>{sportsman.rank}</TableCell>
                                <TableCell style={{borderBottom: 0}}>{sportsman.hold}</TableCell>
                                <TableCell style={{borderBottom: 0}}>{sportsman.growth}</TableCell>
                                <TableCell style={{borderBottom: 0}}>{sportsman.weight}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Grid container className='lg-hidden' spacing={0} style={{padding:16}}>
                        <Grid item xs={12}>
                            <Typography className={classes.textSecondaryfs16}>Год рождения</Typography>
                            <Typography className={classNames(classes.textMain,classes.mb16)}>{sportsman.date_of_birth}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.textSecondaryfs16}>Год набора</Typography>
                            <Typography className={classNames(classes.textMain,classes.mb16)}>{sportsman.recruitment_year}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.textSecondaryfs16}>Пол</Typography>
                            <Typography className={classNames(classes.textMain,classes.mb16)}>{sportsman.gender}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.textSecondaryfs16}>Амплуа</Typography>
                            <Typography className={classNames(classes.textMain,classes.mb16)}>{sportsman.role}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.textSecondaryfs16}>Разряд</Typography>
                            <Typography className={classNames(classes.textMain,classes.mb16)}>{sportsman.rank}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        )
    }

};

CommonInformation.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(CommonInformation);
