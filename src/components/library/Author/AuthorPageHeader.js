import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import Avatar from "@material-ui/core/es/Avatar/Avatar";

const styles = theme => ({
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        width: 90,
        height: 90,
        [theme.breakpoints.down('lg')]: {

            width: 60,
            height: 60,
        },
        [theme.breakpoints.up('lg')]: {
            width: 90,
            height: 90,
        },
    },
    sportsmenName: {
        fontSize: 24,
        fontFamily: '"BlissPro",sans-serif',
        color: 'black',
        fontWeight: 'bold',
        [theme.breakpoints.down('lg')]: {
            fontSize: 18,

        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 24,

        },
    },
    sportsmenHeader: {
        alignItems: 'center',
        [theme.breakpoints.down('lg')]: {
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
            paddingBottom:16
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: 165,
            paddingRight: 165,
            paddingTop: 50,
            paddingBottom:32
        },
        backgroundColor: '#fff',
        display: 'flex',
        borderBottom:'1px solid lightgray'
    },

});


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