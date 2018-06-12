import React from 'react';
import {Grid} from "material-ui";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from 'material-ui/styles';
import Icon from 'material-ui/Icon';

const styles = theme => ({

    building:{
      color:'white',
      fontSize:'48px !important',
      backgroundColor:'#00755E',
      borderRadius:'100%',
      padding:24,
        width:96,
        height:96
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
        [theme.breakpoints.down('lg')]: {
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: 165,
            paddingRight: 165,
            paddingTop: 50,
        },
        backgroundColor: '#fff',
        display:'flex'
    },
    schoolRightSec: {
        justifyItems: 'flex-end',
        textAlign: 'right',
        color: '#242421',
        fontSize: 14,
        marginLeft:24
    },
    mlauto:{
        marginLeft:'auto',
    }
    ,
    schoolRatingNum: {
        fontSize: '40px !important',
        color: '#242421',
        fontFamily:'AkBarsFont'
    },
    schoolAdress:{
        fontSize:16,
        color:'rgba(36,36,33,1)',
        position:'relative',
        top:-5
    },
    xsh:{
        [theme.breakpoints.down('lg')]: {
            display:'none',
        },
        [theme.breakpoints.up('lg')]: {
            display:'block',
        },
    }
});
const SchoolHeader = (props) => {
    const {classes} = props;
    return (
        <section className={classNames(classes.schoolHeader)}>

            <Grid
                item  align={'flex-basis'} className='xs-hidden'>
                <Icon className={classes.building} classes={{
                    root:classes.building
                }}>location_city</Icon>

            </Grid>
            <Grid item style={{marginLeft:16}}>
                <span className={classNames(classes.schoolName)}>ДЮСШ №1</span><br/>
                <span className={classNames(classes.schoolAdress)}>г. Казань, ул. Петербургская, д. 37</span>
            </Grid>
            <Grid item className={classNames(classes.schoolRightSec,classes.mlauto,classes.xsh)}>
                <span>Спортсмены</span><br/>
                <span className={classNames(classes.schoolRatingNum)}>100</span>
            </Grid>

            <Grid item className={classNames(classes.schoolRightSec,classes.xsh)}>
                <span>Тренеры</span><br/>
                <span className={classNames(classes.schoolRatingNum)}>20</span>
            </Grid>

            <Grid item className={classNames(classes.schoolRightSec,classes.xsh)}>
                <span>Группы</span><br/>
                <span className={classNames(classes.schoolRatingNum)}>15</span>
            </Grid>
        </section>
    );

};
SchoolHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SchoolHeader);
