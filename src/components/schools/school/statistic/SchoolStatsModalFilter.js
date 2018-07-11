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
import {MenuItem} from 'material-ui/Menu';
import {FormControl} from 'material-ui/Form';
import {SelfStats, statsAmplua, statsChamp, statsYear, TeamStats, statsStage} from "../../../../fixtures/stats";
import styles from '../../../styles'


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
