import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import {routes} from "../../routers/AppRouter";
import Header from "../headers/Header";
import Subheader from "../headers/Subheader";
import CalendarView from "./CalendarView";
import Footer from "../footer/Footer";

const styles = theme => ({


});


class CalendarPage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <div>
                    <Header/>
                    <Subheader
                        title='Календарь'
                    />
                    <CalendarView/>
                <Footer/>
            </div>
        )
    }
}

CalendarPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CalendarPage);