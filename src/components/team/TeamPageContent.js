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
        [theme.breakpoints.down('lg')]:{
            textAlign:'center',
            fontSize:18
        },
        [theme.breakpoints.up('lg')]:{
            fontSize:20,
        }
    },
    imgFluid:{
        maxWidth:'100%'
    },
    xsMxAuto:{
        [theme.breakpoints.down('lg')]:{
            marginLeft:'auto',
            marginRight:'auto'
        }
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
                    <Grid item xs={8} lg={2} className={classes.xsMxAuto}><img src="https://upload.wikimedia.org/wikipedia/ru/0/09/Ak_Bars_Kazan_Logo.png" alt="test" className={classes.imgFluid}/> </Grid>
                    <Grid item xs={10} lg={10} className={classes.xsMxAuto}><Typography className={classNames(classes.name)}>Хоккейный клуб «Ак Барс» г. Казань</Typography> </Grid>
                    <Grid item xs={12} style={{marginBottom:16}}>
                        <CommonInfo/>
                    </Grid>
                    <Grid item xs={12} lg={10} style={{marginBottom:16}}>
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
                    <Grid item xs={12} lg={6}>
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