import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Subheader from "../../headers/Subheader";
import Header from "../../headers/Header";
import AuthorPageContent from "./AuthorPageContent";
import AuthorPageHeader from "./AuthorPageHeader";
import Footer from "../../footer/Footer";



class AuthorPage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <div>
                <Header/>
                <Subheader breadcrumbs={[{title:'Библиотека',link:'/libraries'},{title:'Авторы',link:'/libraries'}]}/>
                <AuthorPageHeader/>
                <AuthorPageContent/>
                <Footer/>
            </div>
        )
    }
}

AuthorPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default AuthorPage;