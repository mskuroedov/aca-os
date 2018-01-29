import React from 'react';
import {Grid} from "material-ui";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import SportsmenMenu from "./SportsmenMenu";


const styles = {
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        width: 90,
        height: 90,
    },
    sportsmenName: {
        fontSize: 24,
        fontFamily: 'BlissPro',
        color: 'black',
        fontWeight: 'bold'
    },
    sportsmenHeader: {
        alignItems: 'center',
        paddingLeft: 165,
        paddingRight: 165,
        paddingTop: 50,
        backgroundColor: '#fff',
        display:'flex'
    },
    sportsmenRightSec: {
        justifyItems: 'flex-end',
        textAlign: 'right',
        color: '#242421',
        fontSize: 14
    },
    sportsmenRatingNum: {
        fontSize: 40,
        color: '#242421',
        fontFamily:'AkBarsFont'
    }
};
const SportmenHeader = (props) => {
    const {classes} = props;
    return (
<section className={classNames(classes.sportsmenHeader)}>

            <Grid
                item  align={'flex-basis'}>
                <Avatar
                    alt="Adelle Charles"
                    src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
                    className={classNames(classes.avatar, classes.bigAvatar)}
                />
            </Grid>
            <Grid item xs={4}>
                <span className={classNames(classes.sportsmenName)}>Малышев Андрей</span>
            </Grid>
            <Grid item xs={6} className={classNames(classes.sportsmenRightSec)}>
                <span>Рейтинг</span><br/>
                <span className={classNames(classes.sportsmenRatingNum)}>140</span>
            </Grid>
</section>
    );

};
SportmenHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SportmenHeader);
