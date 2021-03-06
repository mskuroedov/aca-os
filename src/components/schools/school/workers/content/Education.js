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
import Grid from "material-ui/es/Grid/Grid";
import styles from '../../../../styles'



class Education extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <div>
                <Typography className={classes.title}>Образование</Typography>
                <Paper className="paper">
                    <Table className="table no-bottom xs-hidden">
                        <TableHead>
                            <TableRow>
                                <TableCell>Название</TableCell>
                                <TableCell>Дата</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Курс «Методическая работа в сфере физической культуры и спорта»</TableCell>
                                <TableCell>21.07.2016</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Сертификат «О присвоении аттестационной комиссией ФХР тренерской категории
                                    ”B”»</TableCell>
                                <TableCell>08.02.2014</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <div className='lg-hidden'>
                        <Grid container spacing={0} style={{padding: 16}} className='border-bottom'>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Название</Typography>
                                <Typography className={classNames(classes.textMain,classes.mb16)}>Курс "Методическая работа в сфере физической
                                    культуры и спорта"</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Дата</Typography>
                                <Typography className={classNames(classes.textMain,classes.mb16)}>21.07.2016</Typography>

                            </Grid>
                        </Grid>
                        <Grid container spacing={0} style={{padding:16}}>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Название</Typography>
                                <Typography className={classNames(classes.textMain,classes.mb16)}>Диплом за 1 место в сезоне 2016</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.textSecondary}>Дата</Typography>
                                <Typography className={classNames(classes.textMain,classes.mb16)}>18.02.2014</Typography>

                            </Grid>
                        </Grid>
                    </div>

                </Paper>


            </div>

        )
    }
}

Education.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Education);