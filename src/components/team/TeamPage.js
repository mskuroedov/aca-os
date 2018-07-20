import React from 'react';
import PropTypes from 'prop-types';
import Header from "../headers/Header";
import Subheader from "../headers/Subheader";
import TeamPageContent from "./TeamPageContent";
import Footer from "../footer/Footer";



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

export default TeamPage;