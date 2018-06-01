import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Subheader from "../headers/Subheader";
import Header from "../headers/Header";
import NewsPageContent from "./NewsPageContent";

const styles = theme => ({


});


class NewsPage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <div>
                <Header/>
                <Subheader
                    title="Новости"
                />
                <NewsPageContent/>
            </div>
        )
    }
}

NewsPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsPage);