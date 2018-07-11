import React from 'react';
import PropTypes from 'prop-types';
import {TableCell, TableRow} from "material-ui";
import {Link} from "react-router-dom";
import {withStyles} from "material-ui/styles/index";
import styles from '../../../styles';

class TableItem extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const {
      classes,
      title,
      type,
      director,
      onSelectRequest,
      id,
      isChecked
    } = this.props;

    return (
      <TableRow>
        <TableCell>
          <Checkbox onChange={onSelectRequest} checked={isChecked} />
        </TableCell>
        <TableCell>
          <Link to="/schools/1" className={classes.schoolLink}>
            {title}
          </Link>
          <Icon className={classes.visIcon}>visibility</Icon>
        </TableCell>
        <TableCell>{type}</TableCell>
        <TableCell>
          <Link to="/worker/2" className={classes.schoolLink}>
            {director.secondname} {director.firstname} {director.middlename}
          </Link>
        </TableCell>
        <TableCell>г. Казань, ул.Гаврилова, 48а, РТ, 420137</TableCell>
        <TableCell numeric>
          <IconButton
            aria-owns={anchorEl ? 'menu' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>Редактировать</MenuItem>
            <MenuItem onClick={this.handleClose}>Удалить</MenuItem>
          </Menu>
        </TableCell>
      </TableRow>
    );
  }
}

TableItem.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  onSelectRequest: PropTypes.func.isRequired
};

export default withStyles(styles)(TableItem);
