import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import AuthorCard from "./AuthorCard";


class AuthorGrid extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <Grid container spacing={16}>
                <Grid item xs={12} lg={4}>
                    <AuthorCard/>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <AuthorCard/>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <AuthorCard/>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <AuthorCard/>
                </Grid>
            </Grid>
        )
    }
}

AuthorGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default AuthorGrid;