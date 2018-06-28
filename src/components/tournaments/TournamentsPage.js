import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Subheader from "../headers/Subheader";
import Header from "../headers/Header";
import TournamentsContent from "./TournamentsContent";
import Footer from "../footer/Footer";
import {routes} from "../../routers/AppRouter";

const styles = theme => ({


});


class TournamentsPage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <div>
            <Header/>
                <Subheader breadcrumbs={[
                    {title: 'Турниры', link: '/tournaments'},
                    {title: 'Турнир по хоккею им. Геннадия Цыганкова', link: ''},
                ]} />
                <TournamentsContent/>
                <Footer/>
            </div>
        )
    }
}

TournamentsPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TournamentsPage);