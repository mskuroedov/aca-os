import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Grid from '@material-ui/core/es/Grid/Grid';
import FormControl from '@material-ui/core/es/FormControl/FormControl';
import Select from 'material-ui/Select';
import {
  TeamStats,
  SelfStats,
  statsYear,
  statsAmplua,
  statsChamp,
  statsStage
} from '../../../../fixtures/stats';
import MenuItem from '@material-ui/core/es/MenuItem/MenuItem';
import Button from '@material-ui/core/es/Button/Button';
import Switch from '@material-ui/core/es/Switch/Switch';
import TeamTableView from './TeamTableView';
import SelfTableView from './SelfTableView';
import SchoolStatsModalFilter from './SchoolStatsModalFilter';
import Icon from 'material-ui/es/Icon/Icon';
import InputAdornment from 'material-ui/es/Input/InputAdornment';
import Input from 'material-ui/es/Input/Input';

const styles = theme => ({
  button: {
    fontSize: 13,
    fontWeight: 'bold',
    marginRight: 10,
    height: '45px'
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
  switchName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#242421'
  },
  switchBase: {
    color: '#00755E',
    '&$checked': {
      color: '#00755E',
      '& + $bar': {
        backgroundColor: '#00755E'
      }
    }
  },
  switchBar: {
    backgroundColor: '#00755E'
  },
  searchInput: {
    fontSize: 14,
    color: 'rgba(36,36,33,1)',
    marginTop: 11,
    paddingBottom: 5,
    minWidth: 267,
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
  }
});

class StatsPage extends React.Component {
  state = {
    tableView: false,
    TeamStats,
    SelfStats,
    statsAmplua,
    statsChamp,
    statsYear,
    statsStage,
    selectedYearFilter: 1,
    selectedChampionshipFilter: 1,
    selectedAmpluaFilter: 1,
    selectedStageFilter: 1,
    selfView: true
  };

  onYearFilterChange = event => {
    this.setState({ selectedYearFilter: event.target.value });
  };

  onChampionshipFilterChange = event => {
    this.setState({ selectedChampionshipFilter: event.target.value });
  };

  onAmpluaFilterChange = event => {
    this.setState({ selectedChampionshipFilter: event.target.value });
  };

  onStageFilterChange = event => {
    this.setState({ selectedStageFilter: event.target.value });
  };

  render() {
    const { classes, common } = this.props;
    const { SelfStats, TeamStats } = this.state;
    const searchLabel = this.state.selfView
      ? 'Поиск на ФИО'
      : 'Поиск по названию';

    return (
      <Grid container spacing={8}>
        <Grid item className="lg-hidden ml-auto">
          <SchoolStatsModalFilter selfView={this.state.selfView} />
        </Grid>
        <Grid item className="xs-hidden">
          <FormControl>
            <Select
              value={this.state.selectedYearFilter}
              onChange={this.onYearFilterChange}
              disableUnderline={true}
              classes={{
                select: classes.select,
                icon: classes.selectIcon
              }}
              autoWidth
            >
              {this.state.statsYear.map(item => (
                <MenuItem key={item.id} value={item.id}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item className="xs-hidden">
          <FormControl>
            <Select
              value={this.state.selectedChampionshipFilter}
              onChange={this.onChampionshipFilterChange}
              disableUnderline={true}
              classes={{
                select: classes.select,
                icon: classes.selectIcon
              }}
              autoWidth
            >
              {this.state.statsChamp.map(item => (
                <MenuItem key={item.id} value={item.id}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item className="xs-hidden">
          <FormControl>
            <Select
              value={this.state.selectedStageFilter}
              onChange={this.onStageFilterChange}
              disableUnderline={true}
              classes={{
                select: classes.select,
                icon: classes.selectIcon
              }}
              autoWidth
            >
              {this.state.statsStage.map(item => (
                <MenuItem key={item.id} value={item.id}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {this.state.selfView && (
          <Grid item className="xs-hidden">
            <FormControl>
              <Select
                value={this.state.selectedAmpluaFilter}
                onChange={this.onAmpluaFilterChange}
                disableUnderline={true}
                classes={{
                  select: classes.select,
                  icon: classes.selectIcon
                }}
                autoWidth
              >
                {this.state.statsAmplua.map(item => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        )}
        <Grid item className="xs-hidden">
          <FormControl className={classes.formControl}>
            <Input
              classes={{
                root: classes.searchInput,
                underline: classes.searchInkbar
              }}
              placeholder={searchLabel}
              endAdornment={
                <InputAdornment position="end">
                  <Icon classes={{ root: classes.searchInputIcon }}>
                    search
                  </Icon>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item className="xs-hidden">
          <Button
            classes={{
              root: classes.button,
              label: classes.gray
            }}
          >
            Сбросить
          </Button>
        </Grid>
        <Grid item xs={12} style={{ paddingBottom: 64, marginTop: 20 }}>
          {this.state.selfView ? (
            <SelfTableView SelfStats={SelfStats} common={common} />
          ) : (
            <TeamTableView TeamStats={TeamStats} />
          )}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(StatsPage);
