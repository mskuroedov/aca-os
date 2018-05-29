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
                    <Table className="table no-bottom">
                        <TableHead>
                            <TableRow>
                                <TableCell >Название</TableCell>
                                <TableCell >Дата</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell >Курс «Методическая работа в сфере физической культуры и спорта»</TableCell>
                                <TableCell >21.07.2016</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >Сертификат «О присвоении аттестационной комиссией ФХР тренерской категории ”B”»</TableCell>
                                <TableCell >08.02.2014</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>

            </div>

        )
    }
}

Education.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Education);