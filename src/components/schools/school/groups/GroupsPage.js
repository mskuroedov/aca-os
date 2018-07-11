import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import Grid from "@material-ui/core/es/Grid/Grid";
import GroupItem from "./GroupItem";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import Icon from "material-ui/es/Icon/Icon";
import InputAdornment from "material-ui/es/Input/InputAdornment";
import Input from "material-ui/es/Input/Input";
import styles from '../../../styles'

const filter = {
  year: "Год набора"
};

class GroupsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    filter: { ...filter },
    tableView: false,
    editModalOpened: false
  };

  filterChange(key, e) {
    this.setState({
      filter: {
        [key]: e.target.value
      }
    });
  }

  flushFilter() {
    this.setState({
      filter: { ...filter }
    });
  }

  onViewChange() {
    this.setState({
      tableView: !this.state.tableView
    });
  }

  closeEditModal() {
    this.setState({
      editModalOpened: false
    });
  }

  openEditModal() {
    this.setState({
      editModalOpened: true
    });
  }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Grid container spacing={0}>
                    <Grid item >
            <Button
              className="Button"
              variant="raised"
              color="primary"
              onClick={() => this.openEditModal()}
            >
              Добавить
            </Button>
          </Grid>
          {this.state.tableView && (
            <Grid item>
              <FormControl className="FormControl">
                <Select
                  value={this.state.filter.year}
                  disableUnderline={true}
                  classes={{
                    select: "Select",
                    icon: "SelectIcon"
                  }}
                  autoWidth
                  onChange={e => this.filterChange("year", e)}
                >
                  <MenuItem key="Год набора" value="Год набора">
                    Год набора
                  </MenuItem>
                  <MenuItem key={2017} value={2017}>
                    2017
                  </MenuItem>
                  <MenuItem key={2016} value={2016}>
                    2016
                  </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          )}
          {this.state.tableView && (
            <Grid item>
              <Button
                classes={{
                  root: "Button",
                  label: "Gray"
                }}
                onClick={() => this.flushFilter()}
              >
                Сбросить
              </Button>
            </Grid>
          )}
          <Grid item>
                        <FormControl className={classes.formControl}>
                            <Input classes={{
                                root: classes.searchInput,
                                underline: classes.searchInkbar
                            }}
                                   placeholder="Поиск по названию..."
                                // onChange={this.onSearchChange}
                                   endAdornment={
                                       <InputAdornment position="end">
                                           <Icon classes={{
                                               root: classes.searchInputIcon}}
                                           >
                                               search
                                           </Icon>
                                       </InputAdornment>
                                   }
                            />
                        </FormControl>
                    </Grid>
                <Griditem className={classes.selectContainer}>
            <div className={classes.formControl}>
              <IconButton className={classes.iconpublish}>
                <Icon>publish</Icon>
              </IconButton>
              <IconButton onClick={() => this.onViewChange()}>
                {this.state.tableView ? (
                  <Icon>view_module</Icon>
                ) : (
                  <Icon>view_list</Icon>
                )}
              </IconButton>
            </div>
          </Grid>
        </Grid>
        {this.state.tableView ? (
          <TableView groups={groups} />
        ) : (
                <Grid container spacing={16}>
                    <Grid item xs={12} lg={4}>
                        <GroupItem/>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <GroupItem/>
                    </Grid>
                </Grid>)}
        <GroupsEditModal
          handleClose={() => this.closeEditModal()}
          open={this.state.editModalOpened}
        />
            </div>
        );
    }
}

GroupsPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GroupsPage);
