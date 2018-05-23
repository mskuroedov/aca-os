import React from 'react';
import {Grid} from "material-ui";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from 'material-ui/styles';
import Icon from 'material-ui/Icon';

const styles = {

    building: {
        color: 'white',
        fontSize: '48px !important',
        backgroundColor: '#00755E',
        borderRadius: '100%',
        padding: 24,
        width: 96,
        height: 96
    },
    bigAvatar: {
        width: 90,
        height: 90,
    },
    schoolName: {
        fontSize: 24,
        fontFamily: '"BlissPro",sans-serif',
        color: 'black',
        fontWeight: 'bold'
    },
    schoolHeader: {
        alignItems: 'center',
        paddingLeft: 165,
        paddingRight: 165,
        paddingTop: 50,
        backgroundColor: '#fff',
        display: 'flex'
    },
    schoolRightSec: {
        justifyItems: 'flex-end',
        textAlign: 'right',
        color: '#242421',
        fontSize: 14,
        marginLeft: 24
    },
    mlauto: {
        marginLeft: 'auto',
    }
    ,
    schoolRatingNum: {
        fontSize: '40px !important',
        color: '#242421',
        fontFamily: 'AkBarsFont'
    },
    schoolAdress: {
        fontSize: 16,
        color: 'rgba(36,36,33,1)',
        position: 'relative',
        top: -5
    }
};
const LibraryHeader = (props) => {
    const {classes} = props;
    return (
        <section className={classNames(classes.schoolHeader)}>

            <Grid
                item align={'flex-basis'}>
                {/*<LocationCityIcon />*/}
                <Icon className={classes.building} classes={{
                    root: classes.building
                }}>local_library</Icon>

            </Grid>
            <Grid item className={classNames(classes.schoolRightSec, classes.mlauto)}>
                <span>Материалы</span><br/>
                <span className={classNames(classes.schoolRatingNum)}>347</span>
            </Grid>
        </section>
    );

};
LibraryHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LibraryHeader);
