import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Header from "../headers/Header";
import Subheader from "../headers/Subheader";
import {routes} from "../../routers/AppRouter";
import TeamPageContent from "./TeamPageContent";
import Footer from "../footer/Footer";

const styles = theme => ({});


class TeamPage extends React.Component {
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
                    {title: 'Ак Барс Казань', link: ''},
                ]}/>
                <TeamPageContent/>
                <Footer/>
            </div>
        )
    }π
}

TeamPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamPage);