import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import Icon from "material-ui/es/Icon/Icon";

const styles = {

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



class GroupHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <section className={classNames(classes.schoolHeader)}>

                <Grid
                    item  align={'flex-basis'}>
                    <Icon className={classes.building} classes={{
                        root:classes.building
                    }}>group</Icon>

                </Grid>
                <Grid item style={{marginLeft:16}}>
                    <span className={classNames(classes.schoolName)}>Группа мальчиков 2010 г. р.</span><br/>
                    <span className={classNames(classes.schoolAdress)}>2010 год набора</span>
                </Grid>
                <Grid item className={classNames(classes.schoolRightSec,classes.mlauto)}>
                    <span>Спортсмены</span><br/>
                    <span className={classNames(classes.schoolRatingNum)}>25</span>
                </Grid>

                <Grid item className={classNames(classes.schoolRightSec)}>
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