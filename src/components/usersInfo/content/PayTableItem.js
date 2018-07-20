import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import classNames from 'classnames';
import TableRow from "material-ui/es/Table/TableRow";
import TableCell from "material-ui/es/Table/TableCell";

const styles = theme => ({


});


class PayTableItem extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        const {date, title, status, price} = this.props;

        return (
                <TableRow>
                    <TableCell >{date}</TableCell>
                    <TableCell >{title}</TableCell>
                    <TableCell >{price}</TableCell>
                    <TableCell >{status}</TableCell>
                </TableRow>
        )
    }
}

PayTableItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PayTableItem);