import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import Icon from "material-ui/es/Icon/Icon";
import styles from '../styles'


class GroupHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <section className={classNames(classes.schoolHeader)}>

                <Grid
                    item align={'flex-basis'}>
                    <Icon className={classes.building} classes={{
                        root: classes.building
                    }}>group</Icon>

                </Grid>
                <Grid item  xs={7} lg style={{marginLeft: 16}}>
                    <p className={classNames(classes.schoolName)}>Группа мальчиков 2010 г. р.</p>
                    <p className={classNames(classes.schoolAdress)}>2010 год набора</p>
                </Grid>
                <Grid item className={classNames(classes.schoolRightSec, classes.mlauto, classes.xsh)}>
                    <span>Спортсмены</span><br/>
                    <span className={classNames(classes.schoolRatingNum)}>25</span>
                </Grid>

                <Grid item className={classNames(classes.schoolRightSec, classes.xsh)}>
                    <span>Тренеры</span><br/>
                    <span className={classNames(classes.schoolRatingNum)}>2</span>
                </Grid>


            </section>

        )
    }
}

GroupHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GroupHeader);