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
import Link from "react-router-dom/es/Link";
import Grid from "@material-ui/core/es/Grid/Grid";
import styles from '../../../../styles'


class StaffCommonInfo extends React.Component {
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
                                <TableCell >Стаж</TableCell>
                                <TableCell >Адрес</TableCell>
                                <TableCell >Телефон</TableCell>
                                <TableCell >E-mail</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell >15.03.1996</TableCell>
                                <TableCell >Мужской</TableCell>
                                <TableCell >8</TableCell>
                                <TableCell >Россия, Казань</TableCell>
                                <TableCell >+7 927 729-92-17</TableCell>
                                <TableCell ><Link to='mailto:mirhanov@yandex.ru'>mirhanov@yandex.ru</Link></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <div className='lg-hidden'>
                        <Grid container spacing={0} style={{padding: 16}}>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Дата рождения</Typography>
                                <Typography className={classNames(classes.textMain,classes.mb16)}>15.03.1966</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Пол</Typography>
                                <Typography className={classNames(classes.textMain,classes.mb16)}>Мужской</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Стаж</Typography>
                                <Typography className={classNames(classes.textMain,classes.mb16)}>8</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Адрес</Typography>
                                <Typography className={classNames(classes.textMain,classes.mb16)}>Россия, Казань</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Телефон</Typography>
                                <Typography className={classNames(classes.textMain,classes.mb16)}>+7 927 729-92-1</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>E-mail</Typography>
                                <Typography className={classNames(classes.textMain,classes.mb16)}><Link to='mailto:mirhanov@yandex.ru' className={'link'}>mirhanov@yandex.ru</Link></Typography>
                            </Grid>
                        </Grid>
                    </div>
                </Paper>
            </div>

        )
    }
}

StaffCommonInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StaffCommonInfo);