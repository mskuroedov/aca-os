import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import classNames from 'classnames';
import Header from "../../../headers/Header";
import Subheader from "../../../headers/Subheader";
import UsersBuySmt from "../UsersBuySmt";
import UsersInfoMenu from "../../UsersInfoMenu";
import Footer from "../../../footer/Footer";

const styles = theme => ({});


class ItemPage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <div>
                <Header/>
                <Subheader title='Пользователям' cart/>
                <UsersInfoMenu nocontent/>

                <section className='main-section'>
                    <UsersBuySmt/>
                </section>
                <Footer/>
            </div>
        )
    }
}

ItemPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemPage);