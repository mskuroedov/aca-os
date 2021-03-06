import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Header from "../headers/Header";
import Subheader from "../headers/Subheader";
import UsersInfoMenu from "./UsersInfoMenu";
import Footer from "../footer/Footer";
import withStyles from "@material-ui/core/es/styles/withStyles";

const styles = theme => ({});


class UsersInfoPage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <div>
                <Header/>
                <Subheader title='Пользователям' cart/>
                <UsersInfoMenu value={this.props.match.params.value}/>
                <Footer/>
            </div>
        )
    }
}

UsersInfoPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UsersInfoPage);