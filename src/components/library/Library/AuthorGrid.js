import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import AuthorCard from "./AuthorCard";

const styles = theme => ({
  

});


class AuthorGrid extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <Grid container spacing={16}>
                <Grid item xs={4}>
                    <AuthorCard/>
                </Grid>
                <Grid item xs={4}>
                    <AuthorCard/>
                </Grid>
                <Grid item xs={4}>
                    <AuthorCard/>
                </Grid>
                <Grid item xs={4}>
                    <AuthorCard/>
                </Grid>
            </Grid>
        )
    }
}

AuthorGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AuthorGrid);