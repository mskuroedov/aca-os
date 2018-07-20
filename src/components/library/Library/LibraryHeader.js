import React from 'react';
import {Grid} from "material-ui";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from "@material-ui/core/es/styles/withStyles";
import Icon from 'material-ui/Icon';
import styles from '../../styles'

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
