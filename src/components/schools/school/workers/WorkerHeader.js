import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import Icon from "material-ui/es/Icon/Icon";
import Avatar from "material-ui/es/Avatar/Avatar";

const styles = {

    avatar: {
        margin: 10,
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
        display:'flex',
        paddingBottom:40,
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
        fontSize:16,
        color:'rgba(36,36,33,1)',
        position:'relative',
        top:-5
    }
};



class WorkerHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <section className={classNames(classes.schoolHeader)}>

                <Grid
                    item  align={'flex-basis'}>
                    <Avatar
                        alt="Adelle Charles"
                        src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
                        className={classNames(classes.avatar, classes.bigAvatar)}
                    />

                </Grid>
                <Grid item style={{marginLeft:16}}>
                    <span className={classNames(classes.schoolName)}>Мирханов Айрат Талгатович</span><br/>
                    <span className={classNames(classes.schoolAdress)}>Тренер преподаватель высшей категории</span>
                </Grid>


            </section>

        )
    }
}

WorkerHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WorkerHeader);