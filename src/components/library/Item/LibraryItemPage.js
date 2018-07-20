import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import classNames from 'classnames';
import Header from "../../headers/Header";
import Subheader from "../../headers/Subheader";
import LibraryItemContent from "./LibraryItemContent";
import Footer from "../../footer/Footer";



class LibraryItemPage extends React.Component {
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
                        {title: 'Библиотека', link: '/libraries'},
                    ]}/>
                <LibraryItemContent/>
                <Footer/>
            </div>
        )
    }
}

LibraryItemPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default LibraryItemPage;