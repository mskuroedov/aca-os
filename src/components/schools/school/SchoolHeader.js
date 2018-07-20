import React from 'react';
import {Grid} from "material-ui";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from "@material-ui/core/es/styles/withStyles";
import Icon from 'material-ui/Icon';
import styles from '../../styles'

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
