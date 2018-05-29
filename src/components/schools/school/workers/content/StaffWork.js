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
import Link from "react-router-dom/es/Link";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import MoreVertIcon from 'material-ui-icons/MoreVert';

const styles = theme => ({
    title: {
        marginBottom: 11,
        fontSize: 20,
        color: ' rgba(36,36,33,0.6);',
        fontFamily: '"BlissPro",sans-serif',
        fontWeight: 'normal'
    },

});


class StaffWork extends React.Component {
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
                                <TableCell >Период</TableCell>
                                <TableCell >Должность</TableCell>
                                <TableCell >Школа</TableCell>
                                <TableCell >Группа</TableCell>
                                <TableCell style={{width:10,padding:0}}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell >2015-2018</TableCell>
                                <TableCell >Старший инструктор-методист</TableCell>
                                <TableCell >ДЮСШ №43</TableCell>
                                <TableCell >Группа 2012 г.р.</TableCell>
                                <TableCell style={{width:10,padding:0}}>
                                    <IconButton aria-label="Delete">
                                        <MoreVertIcon/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>

            </div>

        )
    }
}

StaffWork.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StaffWork);