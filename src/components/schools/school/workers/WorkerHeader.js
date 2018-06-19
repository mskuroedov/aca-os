import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import Icon from "material-ui/es/Icon/Icon";
import Avatar from "material-ui/es/Avatar/Avatar";
import Typography from "material-ui/es/Typography/Typography";

const styles = theme  =>( {

    header:{
      [theme.breakpoints.down('lg')]:{
          alignItems:'start'
      }  ,
      [theme.breakpoints.up('lg')]:{
          alignItems:'center'
      }
    },
    bigAvatar: {
        [theme.breakpoints.down('lg')]: {

            width: 60,
            height: 60,
        },
        [theme.breakpoints.up('lg')]: {
            width: 90,
            height: 90,
        },
    },
    schoolName: {
        fontFamily: '"BlissPro",sans-serif',
        color: 'black',
        fontWeight: 'bold',
        marginBottom:16,
        [theme.breakpoints.down('lg')]: {
            fontSize: 18,

        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 24,

        },
    },
    schoolHeader: {
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
        display:'flex',
        borderBottom:'1px solid lightgray'
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
        [theme.breakpoints.down('lg')]: {
            fontSize: 12,

        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 16,

        },
        fontSize:16,
        color:'rgba(36,36,33,1)',
        position:'relative',
        top:-5
    }
});



class WorkerHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <section className={classNames(classes.schoolHeader)}>
                <Grid container spacing={16} className={classes.header}>
                    <Grid
                        item >
                        <Avatar
                            alt="Adelle Charles"
                            src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
                            className={classNames(classes.avatar, classes.bigAvatar)}
                        />

                    </Grid>
                    <Grid item lg={10} xs={9} >
                        <Typography className={classNames(classes.schoolName)}>Мирханов Айрат Талгатович</Typography>
                        <Typography className={classNames(classes.schoolAdress)}>Тренер преподаватель высшей категории</Typography>
                    </Grid>

                </Grid>


            </section>

        )
    }
}

WorkerHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WorkerHeader);