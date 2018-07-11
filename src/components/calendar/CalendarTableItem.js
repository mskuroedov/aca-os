import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import Link from "react-router-dom/es/Link";
import styles from '../styles'



class CalendarTableItem extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        const {date,time, number, owners, score, guests, status, league, stage, year} = this.props;

        return (
                <TableRow>
                    <TableCell>{date}</TableCell>
                    <TableCell numeric>{time}</TableCell>
                    <TableCell numeric><Link to='/calendar/1' className={classes.link}>{number}</Link></TableCell>
                    <TableCell numeric>{owners}</TableCell>
                    <TableCell style={{textAlign:'center'}}>{score}</TableCell>
                    <TableCell >{guests}</TableCell>
                    <TableCell >{status}</TableCell>
                    <TableCell >{league}</TableCell>
                    <TableCell >{stage}</TableCell>
                    <TableCell numeric>{year}</TableCell>
                </TableRow>
        )
    }
}

CalendarTableItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CalendarTableItem);