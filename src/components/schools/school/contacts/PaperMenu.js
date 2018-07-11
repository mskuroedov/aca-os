import React from "react";
import { IconButton, MenuItem, Menu } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import classnames from "classnames";

export default class extends React.Component {
  state = {
    anchorEl: null
  };

  openMenu(e) {
    e.stopPropagation();
    this.setState({
      anchorEl: e.currentTarget
    });
  }

  closeMenu(e) {
    e.stopPropagation();
    this.setState({
      anchorEl: null
    });
  }

  render() {
    return (
      <div>
        <IconButton
          className={classnames("MenuButton", {
            MenuButtonRelate: this.props.relate
          })}
          aria-owns={this.state.anchorEl ? "menu" : null}
          aria-haspopup="true"
          onClick={e => this.openMenu(e)}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={e => this.closeMenu(e)}
        >
          <MenuItem onClick={e => this.closeMenu(e)}>Редактировать</MenuItem>
          <MenuItem onClick={e => this.closeMenu(e)}>Удалить</MenuItem>
        </Menu>
      </div>
    );
  }
}
