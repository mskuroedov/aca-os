import React from "react";
import PropTypes from 'prop-types';
import {Avatar, TableCell, TableRow} from "material-ui";
import {Link} from "react-router-dom";
import {withStyles} from "material-ui/styles/index";

const styles = theme => ({
    avatar: {
        width: 36,
        height: 36,
        marginLeft:16
    },
    link:{
        borderBottom:'1px solid rgba(36,36,33,0.2)',
        color:'rgba(36,36,33,1)',
        '&:hover':{
            color:'rgba(0,118,94,1)'
        }
    }
});

class TableItem extends React.Component {
    render () {
        const {classes} = this.props;
        const {firstname, secondname, middlename} = this.props;
        return (
            <TableRow>
                <TableCell >
                    <Link to="/sportsman/1" className={classes.link}>МБОУ ДО ДЮСШ «Динамо»</Link>
                </TableCell>
                <TableCell >ДЮСШ</TableCell>
                <TableCell ><Link to="#" className={classes.link}>Шавалеев Булат Равилевич</Link></TableCell>
                <TableCell >г. Казань, ул.Гаврилова, 48а, РТ, 420137</TableCell>
            </TableRow>
        )
    }
}

TableItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableItem);