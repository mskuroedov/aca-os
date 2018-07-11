import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import { Redirect } from "react-router-dom";
import Grid from "material-ui/es/Grid/Grid";
import { Paper } from "material-ui";
import Icon from "material-ui/es/Icon/Icon";
import Link from "react-router-dom/es/Link";
import styles from '../../../styles'

class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }


    render() {
        const {classes} = this.props;
        return (
            <div>
                <Grid container spacing={16}>
                    <Grid item xs={12} lg={6}>
                        <Typography className={classes.title}>Контакты</Typography>
                        <Paper className={classes.contactsPaper} style={{marginBottom: 24}}>
                            <Grid container spacing={16}>
                                <Grid item xs={2} lg={1}><Icon className={classes.iconGray}>location_on</Icon></Grid>
                                <Grid item xs={10} lg={11}>
                                    <Typography className={classes.mainText} style={{marginBottom:0}}>г. Казань, ул. Петербургская, д. 37, РТ,
                                        420107</Typography>
                                </Grid>
                                <Grid item xs={2} lg={1}><Icon className={classes.iconGray}>phone</Icon></Grid>
                                <Grid item xs={10} lg={11}>
                                    <Typography className={classes.mainText} style={{marginBottom:0}}> (+7 843) 221-81-10</Typography>
                                </Grid>
                                <Grid item xs={2} lg={1}><Icon className={classes.iconGray}>email</Icon></Grid>
                                <Grid item xs={10} lg={11}>
                                    <Link to='#' className={classes.link}>info@akbars.academy</Link>

                                </Grid>
                                <Grid item xs={2} lg={1}><Icon className={classes.iconGray}>link</Icon></Grid>
                                <Grid item xs={10} lg={11}>
                                    <Link to='#' className={classes.link}>akbars.academy</Link>

                                </Grid>
                            </Grid>
                        </Paper>
                        <Typography className={classes.title}>Режим работы</Typography>
                        <Paper className={classes.paper}>
                            <Grid container spacing={8}>
                                <Grid item xs={12} lg={6}>
                                    <Typography className={classes.secondaryText}>Администрация</Typography>
                                    <Typography className={classes.mainText} style={{marginBottom:0}}>Пн — Пт: 8:00–18:00 <br/>
                                        Сб, Вс — выходной</Typography>

                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Typography className={classes.secondaryText}
                                                style={{marginBottom: 5}}>Тренеры</Typography>
                                    <Link to='/schools/1/schedule' className={classes.link}>По расписанию</Link>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} lg={6} style={{marginTop: 40, overflow: 'hidden'}}>
                        <div className={classes.mapContainer}>

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.769646348371!2d49.13627801561383!3d55.77987249737175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415ead08319bc063%3A0xbfe42899bd5dc4cf!2z0YPQuy4g0J_QtdGC0LXRgNCx0YPRgNCz0YHQutCw0Y8sIDU3LCDQmtCw0LfQsNC90YwsINCg0LXRgdC_LiDQotCw0YLQsNGA0YHRgtCw0L0sIDQyMDAxMQ!5e0!3m2!1sru!2sru!4v1517557063831"
                                className={classes.map}></iframe>
                        </div>

                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <Typography className={classes.title}>Реквизиты</Typography>
                        <Paper className={classes.paper}>
                            <Grid container spacing={8}>
                                <Grid item xs={12} style={{marginBottom: 8}}>
                                    <Typography className={classes.mainText} style={{marginBottom:0}}>ООО «Академия хоккея Ак Барс» имени Ю. И.
                                        Моисеева</Typography>
                                </Grid>
                                <Grid item style={{marginRight: 55}}>
                                    <Typography className={classes.secondaryText}>Юридический адрес</Typography>
                                    <Typography className={classes.mainText} style={{marginBottom:0}}>г. Казань, ул. Карла Маркса, д. 71, РТ,
                                        420045</Typography>

                                </Grid>
                                <Grid item style={{marginRight: 55}}>
                                    <Typography className={classes.secondaryText}>ИНН</Typography>
                                    <Typography className={classes.mainText} style={{marginBottom:0}}>1655379198</Typography>
                                </Grid>
                                <Grid item style={{marginRight: 55}}>
                                    <Typography className={classes.secondaryText}>ОГРН</Typography>
                                    <Typography className={classes.mainText} style={{marginBottom:0}}> 1171690003055</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                </Grid>
            </div>
        )
    }

}

Contacts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contacts);
