import React from 'react';
import {Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "material-ui";
import {withStyles} from "material-ui/styles/index";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/es/Typography/Typography";


const styles = theme => ({
    textMain: {
        color: '#242421',
        fontSize: 16,
        marginBottom: 16
    },
    textSecondary: {

        color: 'rgba(36,36,33,0.54)',
        fontSize: 16
    },
    borderBottom: {
        '&*:(not-last-of-type)': {
            borderBottom: '1px soldi red'
        }
    }
});

class Rewards extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <Grid item xs={12} lg={8} className="paper_w_table">
                <Paper className="paper">
                    <Table className="table xs-hidden">
                        <TableHead>
                            <TableRow>
                                <TableCell>Дата</TableCell>
                                <TableCell>Название</TableCell>
                                <TableCell>Достижение</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell style={{borderBottom: 0}}>
                                    21.07.2016
                                </TableCell>
                                <TableCell style={{borderBottom: 0}}>
                                    Мероприяние #1
                                </TableCell>
                                <TableCell style={{borderBottom: 0}}>
                                    Диплом за 1 место в сезоне 2016
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <div className='lg-hidden'>
                        <Grid container spacing={0} style={{padding: 16}} className='border-bottom'>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Название</Typography>
                                <Typography className={classes.textMain}>Лучший бомбардир 2016</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Дата</Typography>
                                <Typography className={classes.textMain}>21.12.2017</Typography>

                            </Grid>
                        </Grid>
                        <Grid container spacing={0} style={{padding: 16}} className='border-bottom'>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Название</Typography>
                                <Typography className={classes.textMain}>Лучший бомбардир 2016</Typography>

                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Дата</Typography>
                                <Typography className={classes.textMain}>21.12.2017</Typography>

                            </Grid>
                        </Grid>
                        <Grid container spacing={0} style={{padding: 16}} className='border-bottom'>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Название</Typography>
                                <Typography className={classes.textMain}>Лучший бомбардир 2016</Typography>

                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Дата</Typography>
                                <Typography className={classes.textMain}>21.12.2017</Typography>

                            </Grid>
                        </Grid>
                    </div>
                </Paper>
            </Grid>

        )
    }
};

Rewards.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Rewards);
