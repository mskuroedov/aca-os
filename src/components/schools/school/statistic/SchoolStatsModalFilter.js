import React from 'react';
import Button from 'material-ui/Button';
import classNames from 'classnames';
import Dialog from 'material-ui/Dialog';
import DialogActions from 'material-ui/Dialog/DialogActions';
import DialogContent from 'material-ui/Dialog/DialogContent';
import { withStyles } from 'material-ui/styles/index';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TuneIcon from '@material-ui/icons/Tune';
import Grid from '@material-ui/core/es/Grid/Grid';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Icon from 'material-ui/es/Icon/Icon';
import InputAdornment from 'material-ui/es/Input/InputAdornment';
import Input from 'material-ui/es/Input/Input';

import {
  SelfStats,
  statsAmplua,
  statsChamp,
  statsYear,
  TeamStats,
  statsStage
} from '../../../../fixtures/stats';

const styles = theme => ({
  button: {
    fontSize: 13,
    fontWeight: 'bold',
    fontFamily: '"BlissPro",sans-serif',
    color: 'rgba(36,36,33,.5)'
  },
  select: {
    backgroundColor: 'rgba(36,36,33,0.1)',
    paddingLeft: 17,
    paddingBottom: 10,
    paddingTop: 16,
    paddingRight: 40,
    fontSize: 16,
    color: '#242421',
    '&:after': {
      backgroundColor: '#242421'
    }
  },
  selectIcon: {
    color: '#6D6D6D',
    marginTop: 0
  },
  selectLine: {
    color: 'transparent'
  },
  hasUpdates: {
    position: 'relative',
    '&:after': {
      content: '',
      position: 'absolute',
      width: 5,
      height: 5,
      backgroundColor: 'yellow',
      borderRadius: '100%',
      top: 0,
      right: 0
    }
  },
  iconbtn: {
    margin: 0,
    fontSize: 24,
    marginLeft: 'auto',
    fontWeight: 'bold',
    fontFamily: '"BlissPro",sans-serif',
    color: 'rgba(36,36,33,.54)',
    background: 'transparent',
    padding: 0,
    width: 24,
    height: 24,
    marginTop: -3
  },
  margin: {
    margin: theme.spacing.unit,
    marginLeft: 0,
    marginBottom: 0
  },
  textGray: {
    color: 'rgba(36,36,33,0.6)'
  },
  dialogWindow: {
    borderRadius: 12
  },
  dialogTitle: {
    color: '#242421',
    fontSize: 20,
    display: 'flex',
    fontWeight: 'bold',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(36,36,33,.04)',
    paddingTop: 24,
    paddingBottom: 21
  },
  cssLabel: {
    color: 'rgba(36,36,33,1)',
    fontWeight: 'bold',
    '&$cssFocused': {
      color: '#00755E'
    },
    fontSize: 16
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: '#00755E'
    }
  },
  inputRoot: {
    fontSize: 16
  },
  dialogContent: {
    maxWidth: 360,
    paddingBottom: 8
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
  }
});

class SchoolStatsModalFilter extends React.Component {
  state = {
    open: false,
    statsYear,
    statsAmplua,
    statsChamp,
    statsStage,
    selectedFilter: 1,
    selectedFilterChamp: 1,
    selectedFilterAmplua: 1,
    selectedStageFilter: 1
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onFiltersChange = event => {
    this.setState({ selectedFilter: event.target.value });
  };

  onFiltersChangeChamp = event => {
    this.setState({ selectedFilterChamp: event.target.value });
  };

  onFiltersChangeAmplua = event => {
    this.setState({ selectedFilterAmplua: event.target.value });
  };
  onStageFilterChange = event => {
    this.setState({ selectedStageFilter: event.target.value });
  };

  render() {
    const { classes, selfView } = this.props;
    const searchLabel = this.state.selfView
      ? 'Поиск на ФИО'
      : 'Поиск по названию';

    return (
      <div style={{ display: 'inline-block' }}>
        <IconButton
          onClick={this.handleClickOpen}
          classes={{
            root: classes.button,
            label: 'has-updates-yellow'
          }}
        >
          <TuneIcon />
        </IconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          classes={{
            paper: classes.dialogWindow
          }}
        >
          <DialogContent
            classes={{
              root: classes.dialogContent
            }}
          >
            <Grid container spacing={16}>
              <Grid item xs={12}>
                <IconButton
                  onClick={this.handleClose}
                  className={classes.iconbtn}
                  style={{ float: 'right' }}
                  aria-label="Delete"
                >
                  <CloseIcon />
                </IconButton>
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                  <Select
                    value={this.state.selectedFilter}
                    onChange={this.onFiltersChange}
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
              <Grid item xs={12}>
                <FormControl>
                  <Select
                    value={this.state.selectedFilterChamp}
                    onChange={this.onFiltersChangeChamp}
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
              {selfView && (
                <Grid item xs={12}>
                  <FormControl>
                    <Select
                      value={this.state.selectedFilterAmplua}
                      onChange={this.onFiltersChangeAmplua}
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

              <Grid item xs={12}>
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
              <Grid item>
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
            </Grid>
          </DialogContent>
          <DialogActions
            style={{
              justifyContent: 'end',
              padding: 14,
              paddingTop: 0
            }}
          >
            <Button
              color="default"
              onClick={this.handleClose}
              className={classes.button}
            >
              Сбросить
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(SchoolStatsModalFilter);
