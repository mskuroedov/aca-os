import React from "react";
import { withStyles } from "material-ui/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "material-ui/es/IconButton/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

@withStyles(theme => ({
  menuBtn: {
    top: "8px",
    right: "6px",
    position: "absolute"
  }
}))
class PaperMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    anchorEl: null
  };

  handleOpen = event => {
    event.stopPropagation();
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = event => {
    event.stopPropagation();
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton
          className={classes.menuBtn}
          aria-owns={anchorEl ? "menu" : null}
          aria-haspopup="true"
          onClick={this.handleOpen}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Редактировать</MenuItem>
          <MenuItem onClick={this.handleClose}>Удалить</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default PaperMenu;
