import React from 'react';
import { Grid } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import TableView from './table/TableView';
import Icon from 'material-ui/es/Icon/Icon';
import IconButton from 'material-ui/es/IconButton/IconButton';
import InputAdornment from 'material-ui/es/Input/InputAdornment';
import Input from 'material-ui/es/Input/Input';
import TilesView from './tiles/TilesView';
import EmployeesEditModal from './EmployeesEditModal';
import EmployeesPageModalFilters from './EmployeesPageModalFilters';
import { employees } from 'fixtures/employees';

const styles = theme => ({
  formControl: {
    width: '100%'
  },
  button: {
    fontSize: 13,
    fontWeight: 'bold',
    marginRight: 10,
    height: '100%'
  },
  iconbtn: {
    marginTop: 5,
    marginLeft: 'auto'
  },
  gray: {
    color: 'rgba(36,36,33,0.3)'
  },
  select: {
    backgroundColor: 'rgba(36,36,33,0.1)',
    paddingLeft: 17,
    paddingTop: 16,
    paddingBottom: 10,
    paddingRight: 40,
    fontSize: 16,
    color: '#242421',
    '&:after': {
      backgroundColor: '#242421'
    }
  },
  selectIcon: {
    color: '#6D6D6D'
  },
  selectLine: {
    color: 'transparent'
  },
  searchInput: {
    fontSize: 14,
    color: 'rgba(36,36,33,1)',
    marginTop: 11,
    paddingBottom: 5,
    width: '100%',
    '&:before': {
      backgroundColor: 'rgba(0,0,0,0.2)'
    },
    '&:after': {
      backgroundColor: 'rgba(0,0,0,0.2)'
    }
  },
  searchInkbar: {
    color: 'rgba(36,36,33,1)',
    '&:before': {
      backgroundColor: 'rgba(0,0,0,0.2) !important'
    },
    '&:after': {
      backgroundColor: 'rgba(0,0,0,0.2) !important'
    }
  },
  searchInputIcon: {
    color: 'rgba(145,143,138,1)',
    position: 'relative',
    top: 0
  },
  selectContainer: {
    [theme.breakpoints.up('lg')]: {
      marginLeft: 'auto'
    }
  }
});

class Employees extends React.Component {
  state = {
    tableView: false,
    editModalOpened: false
  };

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

  onViewChange = event => {
    this.setState({
      tableView: !this.state.tableView
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={8}>
          <Grid item>
            <Button
              onClick={() => this.openEditModal()}
              className="Button"
              variant="raised"
              color="primary"
            >
              Добавить
            </Button>
          </Grid>
          <Grid item className="xs-hidden">
            <FormControl className="FormControl">
              <Select
                value="Все сотрудники"
                onChange={() => {}}
                disableUnderline={true}
                classes={{
                  select: 'Select',
                  icon: 'SelectIcon'
                }}
                autoWidth
              >
                <MenuItem key="Все сотрудники" value="Все сотрудники">
                  Все сотрудники
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item className="xs-hidden">
            <FormControl className="FormControl">
              <Select
                value="Все статусы"
                onChange={() => {}}
                disableUnderline={true}
                classes={{
                  select: 'Select',
                  icon: 'SelectIcon'
                }}
                autoWidth
              >
                <MenuItem key="Все статусы" value="Все статусы">
                  Все статусы
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item className="xs-hidden">
            <Button
              classes={{
                root: 'Button',
                label: 'Gray'
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
                placeholder="Поиск по имени..."
                onChange={this.onSearchChange}
                endAdornment={
                  <InputAdornment position="end">
                    <Icon
                      classes={{
                        root: classes.searchInputIcon
                      }}
                    >
                      search
                    </Icon>
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
              <IconButton onClick={() => this.onViewChange()}>
                {this.state.tableView ? <Icon>view_module</Icon> : <Icon>view_list</Icon>}
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={2} className="lg-hidden">
            <EmployeesPageModalFilters />
          </Grid>
          <Grid item xs={12} className="paper_w_table">
            {this.state.tableView ? <TableView employees={employees} /> : <TilesView />}
          </Grid>
        </Grid>
        <EmployeesEditModal
          handleClose={() => this.closeEditModal()}
          open={this.state.editModalOpened}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Employees);
