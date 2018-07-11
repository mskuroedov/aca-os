import React from 'react';
import BigCalendar from 'react-big-calendar';
import Toolbar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/ru';
import schoolEvents from '../../../fixtures/schoolEvents';
import CustomEvent from './customCalendar/CustomEvent';
import Grid from '@material-ui/core/es/Grid/Grid';
import Button from '@material-ui/core/es/Button/Button';
import IconButton from '@material-ui/core/es/IconButton/IconButton';
import Icon from '@material-ui/core/es/Icon/Icon';
import Typography from '@material-ui/core/es/Typography/Typography';
import FormControl from '@material-ui/core/es/FormControl/FormControl';
import Select from 'material-ui/es/Select/Select';
import MenuItem from '@material-ui/core/es/MenuItem/MenuItem';
import CustomWeekEvent from './customCalendar/CustomWeekEvent';
import { withStyles } from '@material-ui/core';
import classnames from 'classnames';
import ScheduleCreateModal from './ScheduleCreateModal';

moment.locale('ru');
BigCalendar.momentLocalizer(moment);

function ShowMore({ event }) {
  return <span className="link">Ещё</span>;
}

class Selectable extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    currentView: 'week'
  };

  render() {
    return (
      <div {...this.props}>
        <BigCalendar
          events={schoolEvents}
          step={60}
          timeslots={1}
          showMultiDayTimes
          defaultDate={new Date()}
          style={{ height: 740 }}
          min={new Date(2017, 10, 0, 8, 0, 0)}
          max={new Date(2017, 10, 0, 18, 0, 0)}
          components={{
            event: CustomEvent,
            toolbar: CustomToolbar,
            week: { event: CustomWeekEvent },
            day: { event: CustomWeekEvent }
          }}
          messages={{
            showMore: ShowMore
          }}
          view={this.state.currentView}
          onView={view => {
            this.setState({ currentView: view });
          }}
          className="common-calendar"
          selectable
          popup
        />
      </div>
    );
  }
}

@withStyles(theme => ({
  select: {
    height: '36px !important',
    lineHeight: '36px !important'
  }
}))
class CustomToolbar extends Toolbar {
  state = {
    CalendarView: 'month',
    scheduleModalOpened: false
  };

  closeModal() {
    this.setState({
      scheduleModalOpened: false
    });
  }

  openModal() {
    this.setState({
      scheduleModalOpened: true
    });
  }

  render() {
    let { messages, classes } = this.props;
    return (
      <Grid
        container
        alignItems="center"
        spacing={0}
        style={{ marginBottom: 18 }}
      >
        <ScheduleCreateModal
          handleClose={() => this.closeModal()}
          open={this.state.scheduleModalOpened}
        />
        <Grid item style={{ marginRight: 24 }}>
          <Button
            onClick={() => this.openModal()}
            color="primary"
            variant="raised"
          >
            Добавить событие
          </Button>
        </Grid>
        <Grid item style={{ marginRight: 24 }}>
          <Button
            variant="raised"
            style={{ fontWeight: 'bold', fontSize: 12, boxShadow: 'none' }}
            onClick={() => this.navigate('TODAY')}
          >
            Сегодня
          </Button>
        </Grid>
        <Grid item style={{ marginRight: 24 }}>
          <IconButton
            style={{ height: 36, width: 36 }}
            onClick={() => this.navigate('PREV')}
          >
            <Icon>keyboard_arrow_left</Icon>
          </IconButton>
        </Grid>
        <Grid item style={{ marginRight: 16 }}>
          <IconButton
            style={{ height: 36, width: 36 }}
            onClick={() => this.navigate('NEXT')}
          >
            <Icon>keyboard_arrow_right</Icon>
          </IconButton>
        </Grid>
        <Grid item>
          <Typography className="label-day">{this.props.label}</Typography>
        </Grid>
        <Grid item style={{ marginLeft: 46 }}>
          <FormControl>
            <Select
              style={{
                fontSize: '12px !important'
              }}
              value={this.state.CalendarView}
              variant="raised"
              onChange={this.onCalendarTypeChange}
              disableUnderline={true}
              classes={{
                select: classnames('Select', classes.select),
                icon: 'SelectIcon'
              }}
              autoWidth
            >
              <MenuItem key={1} value={'day'}>
                День
              </MenuItem>
              <MenuItem key={2} value={'week'}>
                Неделя
              </MenuItem>
              <MenuItem key={3} value={'month'}>
                Месяц
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} style={{ marginTop: 16 }}>
          <Grid container spacing={0} alignItems="center">
            <Grid item>
              <span className="square blue" />
            </Grid>
            <Grid item>
              <span className="square-label">Лёд</span>
            </Grid>
            <Grid item>
              <span className="square yellow" />
            </Grid>
            <Grid item>
              <span className="square-label">Зал</span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  navigate = action => {
    this.props.onNavigate(action);
  };

  onCalendarTypeChange = event => {
    this.setState({ CalendarView: event.target.value });
    this.props.onViewChange(event.target.value);
  };
}

export default Selectable;
