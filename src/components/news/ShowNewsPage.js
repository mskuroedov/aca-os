import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Header from "../headers/Header";
import Subheader from "../headers/PublicSubheader";
import ShowNewsPaper from "./ShowNewsPaper";

const styles = theme => ({
  

});


class ShowNewsPage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <div>
                <div>
                    <Header/>
                    <Subheader
                        title="Новости"
                    />
                    <ShowNewsPaper/>
                </div>
            </div>
        )
    }
}

ShowNewsPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowNewsPage);