import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Header from "../../headers/Header";
import Subheader from "../../headers/Subheader";
import LibraryItemContent from "./LibraryItemContent";
import Footer from "../../footer/Footer";

const styles = theme => ({});


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

export default withStyles(styles)(LibraryItemPage);