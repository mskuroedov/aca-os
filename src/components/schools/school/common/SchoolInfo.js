import React from 'react';
import {Grid} from "material-ui";
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import classNames from 'classnames';
import Paper from "material-ui/es/Paper/Paper";
import Avatar from "material-ui/es/Avatar/Avatar";
import Icon from "material-ui/es/Icon/Icon";
import Typography from "material-ui/es/Typography/Typography";
import NewsPaper from "./NewsPaper";
import ContactUs from "./ContactUs";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        fontSize: 13,
        marginLeft: 'auto',
        fontWeight: 'bold',
        marginRight: 20,
        fontFamily: '"BlissPro",sans-serif',
    },
    paper: {
        boxShadow: 'none',
        borderRadius: 12,
        paddingTop: 28,
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 26,
        marginBottom: 10,
        border: '1px solid rgba(0,0,0,0.1);',
        fontSize: 16,
        fontFamily: '"BlissPro",sans-serif !important'

    },
    title: {
        marginBottom: 11,
        fontSize: 20,
        color: ' rgba(36,36,33,0.6);',
        fontFamily: '"BlissPro",sans-serif',
        fontWeight: 'normal'
    },
    primaryText: {
        fontSize: 16,
        fontFamily: 'BlissPro'
    },
    primaryBigText: {
        fontSize: 18,
        fontFamily: 'BlissPro'
    },
    avatar: {
        width: 100,
        height: 100,
        margin: 'auto'
    },
    textCentered: {
        textAlign: 'center'
    },
    icon: {
        verticalAlign: 'bottom',
        color: 'rgba(36,36,33,0.3)',
        marginLeft: 'auto'
    },
    link: {
        marginLeft: 16,
        borderBottom: '1px solid rgba(36,36,33,0.2)',
        color: 'rgba(36,36,33,1)',
        '&:hover': {
            color: 'rgba(0,118,94,1)'
        }
    },
    textGray: {
        color: 'rgba(36,36,33,0.6)'
    }

});


class SchoolInfo extends React.Component {
    constructor(props) {
        super(props);
        this.titles = ['Обучение в школе', 'Руководство школы', 'История школы', 'Новости школы']
    }

    state = {
        open: false
    };
    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    };

    handleClose = value => {
        this.setState({selectedValue: value, open: false});
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Grid container spacing={16}
                >
                    <Grid item xs={12} lg={8}>
                        <h3 className={classes.title}>{this.titles[0]}</h3>
                        <Paper classes={{
                            root: classes.paper
                        }}>
                            <Typography type="body1" gutterBottom className={classes.primaryText}>
                                Вы можете оформить заявку на обучение в СДЮСШ «Ак Барс» и ДЮСШ «Динамо» на сайте
                                академии «Ак Барс» имени Ю. И. Моисеева
                            </Typography>
                            <Typography type="body1" gutterBottom className={classes.primaryBigText}
                                        style={{marginTop: 12}}>
                                <Icon className={classes.icon}>link</Icon><a href="https://akbars.academy"
                                                                             className={classes.link}>akbars.academy</a>
                            </Typography>

                            <Typography type="body1" gutterBottom className={classes.primaryText}
                                        style={{marginTop: 30}}>
                                Либо позвонив в колл-центр академии по телефонам
                            </Typography>
                            <Grid container spacing={16} style={{
                                marginBottom: 35, marginTop: 12
                            }}>
                                <Grid item style={{paddingBottom:0,paddingTop:0}}>
                                    <Icon className={classes.icon}>phone</Icon>
                                </Grid>
                                <Grid item style={{paddingBottom:0,paddingTop:0}}>
                                    <Typography type="body1" gutterBottom className={classes.primaryBigText}>
                                        (+7 843) 221-81-81
                                    </Typography>
                                    <Typography type="body1" gutterBottom className={classes.primaryBigText}>
                                        (+7 843) 221-81-01
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Button variant="raised" color='primary' className={classes.button}>Подать заявку на обучение</Button>
                            <ContactUs open={this.state.open}
                                       onClose={this.handleClose}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <h3 className={classes.title}>{this.titles[1]}</h3>

                        <Paper className={classNames(classes.textCentered, classes.paper)}
                               style={{paddingLeft: 60, paddingRight: 60}}>
                            <Avatar
                                alt="Adelle Charles"
                                src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
                                classes={{
                                    root: classes.avatar
                                }}
                            />
                            <Typography type="body1" gutterBottom className={classes.primaryBigText} style={{
                                marginTop: 18, marginBottom: 0
                            }}>

                                Красильников <br/> Сергей Васильевич
                            </Typography>
                            <Typography type="body1" gutterBottom
                                        className={classNames(classes.primaryText, classes.textGray)} style={{
                                marginTop: 17, marginBottom: 33
                            }}>

                                Директор школы
                            </Typography>
                            <Grid container spacing={16}>
                                <Grid item xs={2} style={{paddingTop:0}}><Icon className={classes.icon}>phone_android</Icon></Grid>
                                <Grid item xs={10} style={{verticalAlign: 'center',paddingTop:0}}>
                                    <Typography type="body1" gutterBottom className={classes.primaryText}
                                                style={{textAlign: 'left'}}>

                                        +7 920 751-165-53
                                    </Typography>
                                </Grid>
                                <Grid item xs={2} style={{paddingTop:0,paddingBottom:0}}><Icon className={classes.icon}>email</Icon></Grid>
                                <Grid item xs={10} style={{paddingTop:0}}>
                                    <Typography type="body1" gutterBottom className={classes.primaryText}
                                                style={{textAlign: 'left'}}>
                                        <a href="" className={classes.link}
                                           style={{marginLeft: 0}}>info@akbars.academy</a>
                                    </Typography>
                                </Grid>
                            </Grid>


                        </Paper>

                    </Grid>
                    <Grid item xs={12}>
                        <h3 className={classes.title}>{this.titles[2]}</h3>

                        <Paper classes={{
                            root: classes.paper
                        }}>
                            <Typography type="body1" className={classes.primaryText}>
                                Школа №1 основана в январе 2017 года. Деятельность школы направлена на всестороннее
                                развитие юных хоккеистов: мы заботимся не только о развитии технических навыков молодых
                                игроков, но и о гармоничном развитии личности в физическом, психологическом и социальном
                                аспектах.
                            </Typography>
                            <Button color='primary' className={classes.button}
                                    style={{padding: 0, marginLeft: -7}}>подробнее</Button>
                        </Paper>

                    </Grid>
                    <Grid item xs={12}>
                        <h3 className={classes.title}>{this.titles[3]}</h3>
                        <Grid container spacing={16}>
                            <Grid item xs={12} lg={4}>
                                <NewsPaper/>

                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <NewsPaper/>

                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <NewsPaper/>

                            </Grid>
                            <Grid item xs={12} style={{textAlign: 'center'}}>
                                <Button variant="raised" color='primary' className={classes.button}>Загрузить ещё</Button>
                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>
            </div>
        )
    }
}

SchoolInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SchoolInfo);
