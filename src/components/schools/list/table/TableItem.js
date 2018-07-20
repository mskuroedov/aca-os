import React from "react";
import PropTypes from 'prop-types';
import {TableCell, TableRow} from "material-ui";
import {Link} from "react-router-dom";
import withStyles from "@material-ui/core/es/styles/withStyles";
import styles from '../../../styles';

class TableItem extends React.Component {
    render() {
        const {classes, title, type, director} = this.props;
        return (
            <TableRow>
                <TableCell>
                    <Link to="/schools/1" className={classes.schoolLink}>{title}</Link>
                </TableCell>
                <TableCell>{type}</TableCell>
                <TableCell>
                    <Link to="#" className={classes.schoolLink}>
                        {director.secondname} {director.firstname} {director.middlename}
                    </Link>
                </TableCell>
                <TableCell>г. Казань, ул.Гаврилова, 48а, РТ, 420137</TableCell>
            </TableRow>
        )
    }
}

TableItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableItem);