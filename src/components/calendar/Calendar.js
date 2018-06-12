import React from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment';
import 'moment/locale/ru';
import events from "../../fixtures/events";
moment.locale('ru');
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

function Event({event}) {
    return (
        <span style={{fontSize:13,color:'white'}} >
            {   moment(event.start).format('hh:mm') }
            <strong style={{fontWeight:'bold'}}> {event.title}</strong>

        </span>
    )
}
function ShowMore({event}){
    return (
        <span className="link">Ещё</span>
    )
}

class Selectable extends React.Component {
    render() {
        return (
            <div {...this.props}>
                {/*<BigCalendar*/}
                {/*selectable*/}
                {/*events={[]}*/}
                {/*defaultView='week'*/}
                {/*scrollToTime={new Date(1970, 1, 1, 6)}*/}
                {/*defaultDate={new Date(2015, 3, 12)}*/}
                {/*onSelectEvent={event => alert(event.title)}*/}
                {/*onSelectSlot={(slotInfo) => alert(*/}
                {/*`selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +*/}
                {/*`\nend: ${slotInfo.end.toLocaleString()}` +*/}
                {/*`\naction: ${slotInfo.action}`*/}
                {/*)}*/}
                {/*/>*/}
                <BigCalendar
                    events={events}
                    step={60}
                    showMultiDayTimes
                    defaultDate={new Date(2015, 3, 1)}
                    style={{height: 740}}
                    components={{
                        event: Event,
                    }}
                    messages={{
                        showMore:ShowMore
                    }}
                    className='common-calendar'
                />
            </div>
        )
    }
}

export default Selectable;