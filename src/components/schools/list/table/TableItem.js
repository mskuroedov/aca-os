import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableRow } from 'material-ui';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles/index';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from 'material-ui/es/IconButton/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import Icon from '@material-ui/core/Icon';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  avatar: {
    width: 36,
    height: 36,
    marginLeft: 16
  },
  link: {
    borderBottom: '1px solid rgba(36,36,33,0.2)',
    color: 'rgba(36,36,33,1)',
    '&:hover': {
      color: 'rgba(0,118,94,1)'
    }
  },
  visIcon: {
    display: 'inline-block',
    verticalAlign: 'bottom',
    fontSize: '20px',
    marginLeft: '0.5em',
    opacity: 0.54
  }
});

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
          <Link to="/schools/1" className={classes.link}>
            {title}
          </Link>
          <Icon className={classes.visIcon}>visibility</Icon>
        </TableCell>
        <TableCell>{type}</TableCell>
        <TableCell>
          <Link to="/worker/2" className={classes.link}>
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
