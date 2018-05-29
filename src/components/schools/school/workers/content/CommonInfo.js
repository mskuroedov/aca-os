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

const styles = theme => ({

    title: {
        marginBottom: 11,
        fontSize: 20,
        color: ' rgba(36,36,33,0.6);',
        fontFamily: '"BlissPro",sans-serif',
        fontWeight: 'normal'
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
                    <Table className="table no-bottom">
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
                </Paper>

            </div>
        )
    }
}

CommonInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommonInfo);