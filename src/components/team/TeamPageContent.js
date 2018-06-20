import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "material-ui/es/Grid/Grid";
import CommonInfo from "./content/CommonInfo";
import Arena from "./content/Arena";
import GoalKeepers from "./content/GoalKeepers";
import Defenders from "./content/Defenders";
import Forwards from "./content/Forwards";
import Personal from "./content/Personal";
import Typography from "@material-ui/core/es/Typography/Typography";

const styles = theme => ({
    name:{
        fontSize:20
    },
    imgFluid:{
        maxWidth:'100%'
    }

});


class TeamPageContent extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <section className={'main-section'}>
                <Grid container spacing={24} alignItems={'center'}>
                    <Grid item xs={2} lg={2}><img src="https://upload.wikimedia.org/wikipedia/ru/0/09/Ak_Bars_Kazan_Logo.png" alt="test" className={classes.imgFluid}/> </Grid>
                    <Grid item xs={10} lg={10} ><Typography className={classes.name}>Хоккейный клуб «Ак Барс» г. Казань</Typography> </Grid>
                    <Grid item xs={12} style={{marginBottom:16}}>
                        <CommonInfo/>
                    </Grid>
                    <Grid item xs={10} style={{marginBottom:16}}>
                        <Arena/>
                    </Grid>
                    <Grid item xs={12} style={{marginBottom:16}}>
                        <GoalKeepers/>
                    </Grid>
                    <Grid item xs={12} style={{marginBottom:16}}>
                        <Defenders/>
                    </Grid>
                    <Grid item xs={12} style={{marginBottom:16}}>
                        <Forwards/>
                    </Grid>
                    <Grid item xs={6}>
                        <Personal/>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

TeamPageContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamPageContent);