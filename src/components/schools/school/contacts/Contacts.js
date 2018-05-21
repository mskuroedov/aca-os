import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import {Redirect} from "react-router-dom";
import Grid from "material-ui/es/Grid/Grid";
import {Paper} from "material-ui";
import Icon from "material-ui/es/Icon/Icon";
import Link from "react-router-dom/es/Link";


const styles = theme => ({
    paper: {
        boxShadow: 'none',
        borderRadius: 12,
        paddingTop: 24,
        paddingLeft: 24,
        paddingRight:32,
        paddingBottom: 21,
        marginBottom: 10,
        border: '1px solid rgba(0,0,0,0.1);',
        fontSize: 16,
        fontFamily: 'BlissPro',
    },
    title: {
        marginBottom: 11,
        fontSize: 20,
        color: ' rgba(36,36,33,0.6);',
        fontFamily: '"BlissPro",sans-serif',
        fontWeight: 'normal'
    },
    map: {
        border: '1px solid rgba(0,0,0,0.1);',
        width: '100%',
        zIndex: 1,
        boxShadow: 'none',
        borderRadius: 12,
        minHeight: 368
    },
    mainText:{
        color:'rgba(36,36,33,1)',
        fontSize:16
    },
    secondaryText:{
        color:'rgba(128,128,128,.6)',
        fontWeight:'bold',
        fontSize:14
    },
    iconGray:{
        color:'rgba(191,191,184,1)',
        fontSize:24
    },
    link:{
        lineHeight:1.6,
        color:'rgba(36,36,33,1);',
        transition:'all 0.4s',
        borderBottom: ' 1px solid rgba(36,36,33,0.2)',
        fontSize:16,
        '&:hover':{
            transition:'all 0.4s',
            borderBottomColor:'rgba(36,36,33,.5)'
        }
    }

});

class Contacts extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <div>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography className={classes.title}>Контакты</Typography>
                        <Paper className={classes.paper}>
                            <Grid container>
                                <Grid item xs={1}><Icon className={classes.iconGray}>location_on</Icon></Grid>
                                <Grid item xs={11}>
                                    <Typography className={classes.mainText}>г. Казань, ул. Петербургская, д. 37, РТ, 420107</Typography>
                                </Grid>
                                <Grid item xs={1}><Icon className={classes.iconGray}>phone</Icon></Grid>
                                <Grid item xs={11}>
                                    <Typography className={classes.mainText}> (+7 843) 221-81-10</Typography>
                                </Grid>
                                <Grid item xs={1}><Icon className={classes.iconGray}>email</Icon></Grid>
                                <Grid item xs={11}>
                                    <Link to='#' className={classes.link}>info@akbars.academy</Link>

                                </Grid>
                                <Grid item xs={1}><Icon className={classes.iconGray}>link</Icon></Grid>
                                <Grid item xs={11}>
                                    <Link to='#' className={classes.link}>akbars.academy</Link>

                                </Grid>
                            </Grid>
                        </Paper>
                        <Typography className={classes.title} style={{marginTop:20}}>Режим работы</Typography>
                        <Paper className={classes.paper}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography className={classes.secondaryText}>Администрация</Typography>
                                    <Typography className={classes.mainText}>Пн — Пт: 8:00–18:00 <br/>
                                        Сб, Вс — выходной</Typography>

                                </Grid>
                                <Grid item xs={6}>
                                    <Typography className={classes.secondaryText}>Тренеры</Typography>
                                    <Link to='#' className={classes.link}>По расписанию</Link>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} style={{marginTop:40}}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.769646348371!2d49.13627801561383!3d55.77987249737175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415ead08319bc063%3A0xbfe42899bd5dc4cf!2z0YPQuy4g0J_QtdGC0LXRgNCx0YPRgNCz0YHQutCw0Y8sIDU3LCDQmtCw0LfQsNC90YwsINCg0LXRgdC_LiDQotCw0YLQsNGA0YHRgtCw0L0sIDQyMDAxMQ!5e0!3m2!1sru!2sru!4v1517557063831"
                            className={classes.map}></iframe>

                    </Grid>
                    <Grid item xs={8}>
                        <Typography className={classes.title}>Реквизиты</Typography>
                        <Paper className={classes.paper}>
                            <Grid container>
                                <Grid item xs={12} style={{marginBottom:8}}>
                                    <Typography className={classes.mainText}>ООО «Академия хоккея Ак Барс» имени Ю. И. Моисеева</Typography>
                                </Grid>
                                <Grid item style={{marginRight:55}}>
                                    <Typography className={classes.secondaryText}>Юридический адрес</Typography>
                                    <Typography className={classes.mainText}>г. Казань, ул. Карла Маркса, д. 71, РТ, 420045</Typography>

                                </Grid>
                                <Grid item  style={{marginRight:55}}>
                                    <Typography className={classes.secondaryText}>ИНН</Typography>
                                    <Typography className={classes.mainText}>1655379198</Typography>
                                </Grid>
                                <Grid item style={{marginRight:55}}>
                                    <Typography className={classes.secondaryText}>ОГРН</Typography>
                                    <Typography className={classes.mainText}> 1171690003055</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>

                    </Grid>

                </Grid>
            </div>
        )
    }

}

Contacts.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contacts);