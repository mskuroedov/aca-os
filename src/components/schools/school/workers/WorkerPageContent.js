import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import CommonInfo from "./content/CommonInfo";
import TrainCareer from "./content/TrainCareer";
import Education from "./content/Education";
import SportCareer from "./content/SportCareer";
import Achievements from "./content/Achievements";
import Experience from "./content/Experience";
import StaffCommonInfo from "./content/StaffCommonInfo";
import StaffWork from "./content/StaffWork";

const styles = theme => ({


});


class WorkerPageContent extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes,staff} = this.props;
        return  staff ? (
            <section style={{paddingLeft:168,paddingRight:168,paddingTop:24,paddingBottom:54}}>
                <Grid container spacing={16}>
                    <Grid item xs={6}>
                        <CommonInfo/>
                    </Grid>
                    <Grid item xs={7}>
                        <TrainCareer/>
                    </Grid>
                    <Grid item xs={12}>
                        <Education/>
                    </Grid>
                    <Grid item xs={12}>
                        <SportCareer/>
                    </Grid>
                    <Grid item xs={8}>
                        <Achievements/>
                    </Grid>
                    <Grid item xs={8}>
                        <Experience/>
                    </Grid>
                </Grid>
            </section>
        ) : (
            <section style={{paddingLeft:168,paddingRight:168,paddingTop:24,paddingBottom:54}}>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <StaffCommonInfo/>
                    </Grid>
                    <Grid item xs={8}>
                        <StaffWork/>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

WorkerPageContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WorkerPageContent);