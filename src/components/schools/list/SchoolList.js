import React from "react";
import { Grid } from "material-ui";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Select from "material-ui/Select";
import { MenuItem } from "material-ui/Menu";
import { FormControl } from "material-ui/Form";
import TableView from "./table/TableView";
import Icon from "material-ui/es/Icon/Icon";
import IconButton from "material-ui/es/IconButton/IconButton";
import InputAdornment from "material-ui/es/Input/InputAdornment";
import Input from "material-ui/es/Input/Input";
import TilesView from "./tiles/TilesView";
import {
  schools,
  schoolFilters,
  schoolCityFilters
} from "../../../fixtures/schools";
import Button from "@material-ui/core/es/Button/Button";
import SchoolFiltersModal from "./SchoolFiltersModal";
import SchoolEditModal from "../school/SchoolEditModal";

const styles = theme => ({
  button: {
    fontSize: 13,
    fontWeight: "bold",
    marginRight: 10,
    height: 45,
    verticalAlign: "top"
  },
  formControl: {
    marginLeft: "auto"
  },
  iconbtn: {
    marginTop: 5,
    marginLeft: 30
  },
  select: {
    backgroundColor: "rgba(36,36,33,0.1)",
    paddingLeft: 17,
    paddingBottom: 10,
    paddingTop: 16,
    paddingRight: 40,
    fontSize: 16,
    color: "#242421",
    "&:after": {
      backgroundColor: "#242421"
    }
  },
  selectIcon: {
    color: "#6D6D6D",
    marginTop: 0
  },
  selectLine: {
    color: "transparent"
  },
  searchInput: {
    fontSize: 14,
    color: "rgba(36,36,33,1)",
    marginTop: 11,
    paddingBottom: 5,
    width: "100%",
    marginLeft: "auto",
    "&:before": {
      backgroundColor: "rgba(0,0,0,0.2)"
    },
    "&:after": {
      backgroundColor: "rgba(0,0,0,0.2)"
    }
  },
  searchInkbar: {
    color: "rgba(36,36,33,1)",
    "&:before": {
      backgroundColor: "rgba(0,0,0,0.2) !important"
    },
    "&:after": {
      backgroundColor: "rgba(0,0,0,0.2) !important"
    }
  },
  searchInputIcon: {
    color: "rgba(145,143,138,1)",
    position: "relative",
    top: 8
  },
  selectContainer: {
    [theme.breakpoints.up("lg")]: {
      marginLeft: "auto"
    }
  },
  iconpublish: {
    transform: "rotate(180deg)"
  }
});

class SchoolList extends React.Component {
  state = {
    tableView: false,
    schools,
    schoolFilters,
    schoolCityFilters,
    editModalOpened: false,
    selectedFilter: schoolFilters[0].id
  };

  onViewChange = event => {
    this.setState({
      tableView: !this.state.tableView
    });
  };

  onFilterChange = event => {
    this.setState({ selectedFilter: event.target.value });
  };

  onSearchChange = event => {
    this.setState({
      schools: schools.filter(school =>
        school.title
          .toLowerCase()
          .includes(event.target.value.toLowerCase().trim())
      )
    });
  };

  openEditModal = () => {
    this.setState({
      editModalOpened: true
    });
  };

  closeEditModal = () => {
    this.setState({
      editModalOpened: false
    });
  };

  render() {
    const { classes } = this.props;
    const { schools, tableView, editModalOpened } = this.state;
    return (
      <div className="main-section">
        <SchoolEditModal
          handleClose={this.closeEditModal}
          open={editModalOpened}
        />
        <Grid container spacing={16} className="xs-hidden">
          <Grid item>
            <Button
              onClick={this.openEditModal}
              variant="raised"
              color="primary"
              className="Button"
            >
              Добавить
            </Button>
          </Grid>
          <Grid item>
            <FormControl className="FormControl">
              <Select
                value={this.state.selectedFilter}
                onChange={this.onFilterChange}
                disableUnderline={true}
                classes={{
                  select: "Select",
                  icon: "SelectIcon"
                }}
                autoWidth
              >
                {this.state.schoolCityFilters.map(item => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl className="FormControl">
              <Select
                value={this.state.selectedFilter}
                onChange={this.onFilterChange}
                disableUnderline={true}
                classes={{
                  select: "Select",
                  icon: "SelectIcon"
                }}
                autoWidth
              >
                {this.state.schoolFilters.map(item => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Button
              classes={{
                root: "Button",
                label: "Gray"
              }}
            >
              Сбросить
            </Button>
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <Input
                classes={{
                  root: classes.searchInput,
                  underline: classes.searchInkbar
                }}
                onChange={this.onSearchChange}
                placeholder="Поиск по названию"
                endAdornment={
                  <InputAdornment position="end">
                    <Icon
                      classes={{
                        root: classes.searchInputIcon
                      }}
                    />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item className={classes.selectContainer}>
            <div className={classes.formControl}>
              <IconButton className={classes.iconpublish}>
                <Icon>publish</Icon>
              </IconButton>
              <IconButton onClick={this.onViewChange}>
                {this.state.tableView ? (
                  <Icon>view_module</Icon>
                ) : (
                  <Icon>view_list</Icon>
                )}
              </IconButton>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={16} className="lg-hidden">
          <Grid item xs={10}>
            <FormControl className={classes.formControl}>
              <Input
                classes={{
                  root: classes.searchInput,
                  underline: classes.searchInkbar
                }}
                onChange={this.onSearchChange}
                placeholder="Поиск по названию"
                endAdornment={
                  <InputAdornment position="end">
                    <Icon
                      classes={{
                        root: classes.searchInputIcon
                      }}
                    />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <SchoolFiltersModal />
          </Grid>
        </Grid>
        <Grid container spacing={16}>
          <Grid item xs={12} className="paper_w_table">
            {tableView ? (
              <TableView schools={schools} />
            ) : (
              <TilesView schools={schools} />
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}

SchoolList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SchoolList);
