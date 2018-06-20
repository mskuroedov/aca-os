import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Paper from "material-ui/es/Paper/Paper";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import Table from "@material-ui/core/es/Table/Table";
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import TableBody from "@material-ui/core/es/TableBody/TableBody";

const styles = theme => ({

    title: {
        fontSize: 20,
        color: ' rgba(36,36,33,0.6);',
        fontFamily: '"BlissPro",sans-serif',
        fontWeight: 'normal'
    }
});


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
                        <Table className='table no-bottom'>
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