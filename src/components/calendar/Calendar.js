import React from 'react';
import BigCalendar from 'react-big-calendar';
import Toolbar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment';
import 'moment/locale/ru';
import events from "../../fixtures/events";
import Button from "@material-ui/core/es/Button/Button";
import Grid from "@material-ui/core/es/Grid/Grid";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Icon from "@material-ui/core/es/Icon/Icon";
import Typography from "@material-ui/core/es/Typography/Typography";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import Select from "material-ui/es/Select/Select";
import FormControl from "material-ui/es/Form/FormControl";
import {withStyles} from 'material-ui/styles';
import CustomEvent from './calendarCustom/CustomEvent';


import PropTypes from 'prop-types';


function ShowMore({event}) {
    return (
        <span className="link">Ещё</span>
    )
}

moment.locale('ru');
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer


const styles = theme => ({
    paper: {
        padding: theme.spacing.unit,
    },
    popover: {
        pointerEvents: 'none',
    },
    popperClose: {
        pointerEvents: 'none',
    },
});

class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        currentView: 'month',
    };


    render() {
        return (
            <div {...this.props}>


                <BigCalendar
                    events={events}
                    step={60}
                    view={this.state.currentView}
                    onView={(view) => {
                        this.setState({currentView: view});
                    }}
                    showMultiDayTimes
                    defaultDate={new Date(2015, 3, 1)}
                    style={{height: 740}}
                    components={{
                        event: CustomEvent,
                        toolbar: CustomToolbar
                    }}
                    messages={{
                        showMore: ShowMore
                    }}
                    className='common-calendar'
                    selectable
                    popup

                />
            </div>
        )
    }
}

class CustomToolbar extends Toolbar {
    state = {
        CalendarView: 'month'
    };


    render() {
        let {messages} = this.props;
        return (
            <Grid container alignItems='center' spacing={0} style={{marginBottom: 18}}>
                <Grid item style={{marginRight: 24}}>
                    <Button variant="raised" style={{fontWeight: 'bold', fontSize: 12, boxShadow: 'none'}}
                            onClick={() => this.navigate('TODAY')}>Сегодня</Button>
                </Grid>
                <Grid item style={{marginRight: 24}}>
                    <IconButton style={{height: 36, width: 36}} onClick={() => this.navigate('PREV')}>
                        <Icon>
                            keyboard_arrow_left
                        </Icon>
                    </IconButton>
                </Grid>
                <Grid item style={{marginRight: 16}}>
                    <IconButton style={{height: 36, width: 36}} onClick={() => this.navigate('NEXT')}>
                        <Icon>
                            keyboard_arrow_right
                        </Icon>
                    </IconButton>
                </Grid>
                <Grid item>
                    <Typography className='label-day'>{this.props.label}</Typography>
                </Grid>
                <Grid item style={{marginLeft: 46}}>
                    <FormControl>
                        <Select style={{
                            fontSize: '12px !important'
                        }}
                                value={this.state.CalendarView}
                                variant='raised'
                                onChange={this.onCalendarTypeChange}
                                disableUnderline={true}
                                classes={{
                                    select: 'select-root',
                                    icon: 'select-icon'
                                }}
                                autoWidth
                        >
                            <MenuItem key={1} value={'day'}>День</MenuItem>
                            <MenuItem key={2} value={'week'}>Неделя</MenuItem>
                            <MenuItem key={3} value={'month'}>Месяц</MenuItem>
                        </Select>


                    </FormControl>
                </Grid>
            </Grid>
        );
    }

    navigate = action => {
        this.props.onNavigate(action)
    }

    onCalendarTypeChange = event => {
        this.setState({CalendarView: event.target.value});
        this.props.onViewChange(event.target.value)
    };
}






export default withStyles(styles)(Calendar);