import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import NewsPaper from "../schools/school/common/NewsPaper";

const styles = theme => ({


});


class NewsPageContent extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <section style={{paddingLeft:168,paddingRight:168,paddingTop:32,paddingBottom:64}}>
                <Grid container spacing={16}>
                    <Grid item xs={4}><NewsPaper/></Grid>
                    <Grid item xs={4}><NewsPaper/></Grid>
                    <Grid item xs={4}><NewsPaper/></Grid>
                    <Grid item xs={4}><NewsPaper/></Grid>
                    <Grid item xs={4}><NewsPaper/></Grid>
                    <Grid item xs={4}><NewsPaper/></Grid>
                </Grid>
            </section>
        )
    }
}

NewsPageContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsPageContent);