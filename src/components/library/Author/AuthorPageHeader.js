import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import styles from '../../styles'


class AuthorPageHeader extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (

                <section className={classNames(classes.sportsmenHeader)}>
                    <Grid
                        item align={'flex-basis'}>
                        <Avatar
                            alt="Adelle Charles"
                            src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
                            className={classNames(classes.avatar, classes.bigAvatar)}
                        style={{margin:10}}
                            />
                    </Grid>
                    <Grid item xs={8} lg>
                        <span className={classNames(classes.sportsmenName)}>Абдрашитов Вадим Юсупович</span>
                    </Grid>
                </section>

        )
    }
}

AuthorPageHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AuthorPageHeader);