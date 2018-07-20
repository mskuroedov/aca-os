import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import classNames from 'classnames';
import Header from "../headers/Header";
import Subheader from "../headers/PublicSubheader";
import ShowNewsPaper from "./ShowNewsPaper";
import Footer from "../footer/Footer";


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
                        breadcrumbs={[
                            {title: 'Новости', link: '/news'},
                        ]}
                    />
                    <ShowNewsPaper/>
                    <Footer/>
                </div>
            </div>
        )
    }
}

ShowNewsPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default ShowNewsPage;