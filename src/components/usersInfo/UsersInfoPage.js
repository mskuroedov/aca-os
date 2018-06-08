import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Header from "../headers/Header";
import Subheader from "../headers/Subheader";
import UsersInfoMenu from "./UsersInfoMenu";

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
            </div>
        )
    }
}

UsersInfoPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UsersInfoPage);