import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import classNames from 'classnames';
import Paper from "material-ui/es/Paper/Paper";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import Table from "@material-ui/core/es/Table/Table";
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import styles from'../../styles'



class Personal extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Typography className={classes.title}>Персонал</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper className='paper'>
                        <Table className='table no-bottom xs-hidden'>
                            <TableHead>
                                <TableRow>
                                    <TableCell >Должность</TableCell>
                                    <TableCell >ФИ</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Главный тренер</TableCell>
                                    <TableCell>Зинетула Билялетдинов</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Помощник тренера</TableCell>
                                    <TableCell>Александр Смирнов</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Помощник тренера</TableCell>
                                    <TableCell>Александр Завьялов</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Тренер вратарей</TableCell>
                                    <TableCell>Сергей Абрамов</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Тренер вратарей</TableCell>
                                    <TableCell>Ари Мойсанен</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Тренер по физ. подготовке</TableCell>
                                    <TableCell>Брендон Бови</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Генеральный менеджер</TableCell>
                                    <TableCell>Рафик Якубов</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Директор</TableCell>
                                    <TableCell>Шамиль Хуснутдинов</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Президент</TableCell>
                                    <TableCell>Наиль Маганов</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <div className='lg-hidden'>
                            <Grid container spacing={0} style={{padding: 16}} className='border-bottom'>
                                <Grid item xs={12}>
                                    <Typography className={classes.textMain}>Главный тренер</Typography>
                                    <Typography className={classes.textMain}>Зинетула Билялетдинов</Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={0} style={{padding:16}} className='border-bottom'>
                                <Grid item xs={12}>
                                    <Typography className={classes.textMain}>Помощник тренера</Typography>
                                    <Typography className={classes.textMain}>Александр Завьялов</Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={0} style={{padding:16}} className='border-bottom'>
                                <Grid item xs={12}>
                                    <Typography className={classes.textMain}>Тренер вратарей</Typography>
                                    <Typography className={classes.textMain}>Сергей Абрамов</Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={0} style={{padding:16}} className='border-bottom'>
                                <Grid item xs={12}>
                                    <Typography className={classes.textMain}>Тренер вратарей</Typography>
                                    <Typography className={classes.textMain}>Ари Мойсанен</Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={0} style={{padding:16}} className='border-bottom'>
                                <Grid item xs={12}>
                                    <Typography className={classes.textMain}>Тренер по физ. подготовке</Typography>
                                    <Typography className={classes.textMain}>Брендон Бови</Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={0} style={{padding:16}} className='border-bottom'>
                                <Grid item xs={12}>
                                    <Typography className={classes.textMain}>Генеральный менеджер</Typography>
                                    <Typography className={classes.textMain}>Рафик Якубов</Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={0} style={{padding:16}} className='border-bottom'>
                                <Grid item xs={12}>
                                    <Typography className={classes.textMain}>Директор</Typography>
                                    <Typography className={classes.textMain}>Шамиль Хуснутдинов</Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={0} style={{padding:16}}>
                                <Grid item xs={12}>
                                    <Typography className={classes.textMain}>Президент</Typography>
                                    <Typography className={classes.textMain}>Наиль Маганов</Typography>
                                </Grid>
                            </Grid>
                        </div>
                    </Paper>
                </Grid>
            </Grid>

        )
    }
}

Personal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Personal);