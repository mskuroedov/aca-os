import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from '@material-ui/core/es/Grid/Grid';
import FormControl from '@material-ui/core/es/FormControl/FormControl';
import Select from 'material-ui/es/Select/Select';
import MenuItem from 'material-ui/es/Menu/MenuItem';
import { statsAmplua } from '../../../fixtures/stats';
import { sportsman } from '../../../fixtures/sportsman';
import Typography from '@material-ui/core/es/Typography/Typography';
import TilesView from '../../schools/school/sportsman/tiles/TilesView';
import TrainerView from '../TrainerView';
import Input from 'material-ui/es/Input/Input';
import InputAdornment from 'material-ui/es/Input/InputAdornment';
import Icon from 'material-ui/es/Icon/Icon';
import { Button } from '@material-ui/core';
import SportsmanEditModal from '../SportsmanEditModal';

const styles = theme => ({
  section: {
    marginTop: 24
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
  title: {
    marginBottom: 11,
    fontSize: 20,
    color: ' rgba(36,36,33,0.6);',
    fontFamily: '"BlissPro",sans-serif',
    fontWeight: 'normal'
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
  }
});

class GroupPageContent extends React.Component {
  state = {
    tableView: false,
    statsAmplua,
    sportsman,
    selectedAmpluaFilter: 1,
    editModalOpened: false
  };

  constructor(props) {
    super(props);
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
    const { classes } = this.props;
    const { statsAmplua, sportsman } = this.state;
    return (
      <Grid container spacing={16}>
        <Grid item>
          <Button
            onClick={() => this.openEditModal()}
            className="Button"
            variant="raised"
            color="primary"
          >
            Добавить спортсмена
          </Button>
        </Grid>
        <Grid item>
          <FormControl>
            <Select
              value={this.state.selectedAmpluaFilter}
              disableUnderline={true}
              classes={{
                select: classes.select,
                icon: classes.selectIcon
              }}
              autoWidth
            >
              {statsAmplua.map(item => (
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
              onChange={() => {}}
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
        <Grid item xs={12}>
          <Typography className={classes.title}>Спортсмены</Typography>
        </Grid>
        <Grid item xs={12}>
          <TilesView sportsman={sportsman} />
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Button
            onClick={() => this.openEditModal()}
            className="Button"
            variant="raised"
            color="primary"
          >
            Добавить тренера
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.title}>Тренерский состав</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs={12} lg={4}>
              <TrainerView />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Button
            onClick={() => this.openEditModal()}
            className="Button"
            variant="raised"
            color="primary"
          >
            Добавить сотрудника
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.title}>Сотрудники</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs={12} lg={4}>
              <TrainerView />
            </Grid>
            <Grid item xs={12} lg={4}>
              <TrainerView />
            </Grid>
            <Grid item xs={12} lg={4}>
              <TrainerView />
            </Grid>
          </Grid>
        </Grid>
        <SportsmanEditModal
          handleClose={() => this.closeEditModal()}
          open={this.state.editModalOpened}
        />
      </Grid>
    );
  }
}

export default withStyles(styles)(GroupPageContent);
