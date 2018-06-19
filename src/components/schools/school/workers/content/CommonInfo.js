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

const styles = theme => ({

    title: {
        marginBottom: 11,
        fontSize: 20,
        color: ' rgba(36,36,33,0.6);',
        fontFamily: '"BlissPro",sans-serif',
        fontWeight: 'normal'
    },
    textMain: {
        color: '#242421',
        fontSize: 16,
        marginBottom: 16
    },
    textSecondary: {

        color: 'rgba(36,36,33,0.54)',
        fontSize: 14
    },

});


class CommonInfo extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <div>
            <Typography className={classes.title}>Общая информация</Typography>
                <Paper className="paper">
                    <Table className="table no-bottom xs-hidden">
                        <TableHead>
                            <TableRow>
                                <TableCell >Дата рождения</TableCell>
                                <TableCell >Пол</TableCell>
                                <TableCell >Разряд</TableCell>
                                <TableCell numeric>Стаж</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell >15.03.1996</TableCell>
                                <TableCell >Мужской</TableCell>
                                <TableCell >МСМК</TableCell>
                                <TableCell numeric>12</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <div className='lg-hidden'>
                        <Grid container spacing={0} style={{padding: 16}}>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Год рождения</Typography>
                                <Typography className={classes.textMain}>1995</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Год набора</Typography>
                                <Typography className={classes.textMain}>2000</Typography>

                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Пол</Typography>
                                <Typography className={classes.textMain}>Мужской</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Амплуа</Typography>
                                <Typography className={classes.textMain}>Нападающий</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Разряд</Typography>
                                <Typography className={classes.textMain}>2 юношеский</Typography>
                            </Grid>
                        </Grid>
                    </div>

                </Paper>

            </div>
        )
    }
}

CommonInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommonInfo);