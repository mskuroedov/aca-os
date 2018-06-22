import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Header from "../../headers/Header";
import Subheader from "../../headers/Subheader";
import {routes} from "../../../routers/AppRouter";
import DateView from "./DateView";
import Footer from "../../footer/Footer";

const styles = theme => ({


});


class DatePage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <div>
                <Header/>
                <Subheader
                    breadcrumbs={[
                        {title: 'Календарь', link: '/calendar'},
                        {title: 'Матч №751', link: '/calendar/1'},
                    ]}
                />
                <DateView/>
                <Footer/>
            </div>
        )
    }
}

DatePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePage);