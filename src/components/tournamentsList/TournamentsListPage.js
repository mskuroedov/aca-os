import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import classNames from 'classnames';
import Subheader from "../headers/Subheader";
import Header from "../headers/Header";
import TournamentsListPageContent from "./TournamentsListPageContent";


class TournamentsListPage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <div>
                <Header/>
                <Subheader title={'Турниры'}/>
                <TournamentsListPageContent/>
            </div>
        )
    }
}

TournamentsListPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default TournamentsListPage;