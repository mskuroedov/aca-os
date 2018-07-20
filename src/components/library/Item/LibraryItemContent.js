import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import Link from "react-router-dom/es/Link";
import Typography from "@material-ui/core/es/Typography/Typography";
import Chip from "material-ui/es/Chip/Chip";
import Icon from "@material-ui/core/es/Icon/Icon";
import styles from '../../styles'


class LibraryItemContent extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <section className='main-section'>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className={classNames(classes.LIpaper,'paper','paper-news')}>
                            <Grid container spacing={16}>
                                <Grid item>
                                    <Avatar
                                        alt="Adelle Charles"
                                        src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
                                        classes={{
                                            root: classes.avatarw32
                                        }}
                                    />
                                </Grid>
                                <Grid item>
                                    <Link to='/author/1' className={classes.link}>Родин Алексей</Link>
                                </Grid>
                                <Grid item>
                                    <Typography  className={classes.LItextDate}>12.12.2017</Typography>
                                </Grid>
                            </Grid>



                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography className={classes.LIheader}>Как не разубедить ребенка заниматься хоккеем</Typography>
                                </Grid>
                                
                                <Grid item xs={12}>
                                    <Typography className={classes.LItext}>В первую очередь, когда только ребенок стал заниматься хоккеем, нужно чаще водить его на матчи, чтобы показать что его ждет в будущем, слава и успех. Можно смотреть по телевизору как проходят матчи. Тогда ребенок будет больше впечатлен и не бросит заниматься любимым делом. Нельзя позволять мальчишкам пропускать тренировки, нужно объяснить всю важность ребенка в команде.
                                       </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className={classes.LItext}> Игра хоккей, это конечно технически сложная игра и большинство родителей ищут альтернативу данному виду спорта, например футбол. Но нельзя забыть, что хоккей намного зрелищней, тем, что он опасней. Это не есть плохо, если быть хорошо подготовленным, то можно достичь ошеломительных результатов. Можно поговорить с тренером об увеличении тренировок ребенку, если это возможно. Но не стоит думать, что ребенок непременно станет чемпионом, может стать, но только один из большого количества воспитанников становится реальным профессиональным хоккеистом.</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <img src="https://s00.yaplakal.com/pics/pics_original/3/0/9/9484903.jpg" alt="" className={classes.img}/>
                                    <Typography className={classes.imgDescription}>Подпись к картинке</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className={classes.LItext}>Чтобы этого достичь, нужно очень много тренироваться и иметь хорошую подготовку. И не надо расстраиваться, если ребенок не стал профессионалом спорта, зато у него отменное здоровье и все свое детство он потратил на действительно интересное увлечение. А так же играя в хоккей, мальчик станет ответственным, и возможно приобретет уровень смекалки, что в жизни пригодиться. Но если ребенок отчаянно проситься и хочет быть лидером, то опять же все зависит от тренера, если он не хочет увеличивать нагрузки или давать шанс играть в первой пятерке, то можно поискать другого тренера.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className={classes.LItext}>Родителям важно самим быть подготовленными, ведь у ребенка могут быть вопросы по хоккею, нужно вовремя дать ответы. Нужно больше заботиться об укреплении здоровья, а не о том, чтобы ребенок достиг высот. Только здоровый мальчик станет чемпионом. Нельзя заранее ставить цель - слава и успех.</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className='quoting'>Родителям важно самим быть подготовленными, ведь у ребенка могут быть вопросы по хоккею, нужно вовремя дать ответы. Нужно больше заботиться об укреплении здоровья, а не о том, чтобы ребенок достиг высот. Только здоровый мальчик станет чемпионом. Нельзя заранее ставить цель - слава и успех.</Typography>
                                </Grid>
                            </Grid>



                            <Grid container spacing={16} alignItems='center'>
                                <Grid item>
                                    <Typography className={classes.iconText}>Авторы:
                                        <Link to='#' className={classes.link}>123</Link>,
                                        <Link to='#' className={classes.link}>123</Link>,
                                        <Link to='#' className={classes.link}>123</Link>,
                                        <Link to='#' className={classes.link}>123</Link>,
                                        <Link to='#' className={classes.link}>123</Link>
                                        , еще n
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container spacing={16} alignItems='center' style={{marginBottom: 20}}>
                                <Grid item className={classes.icon}>
                                    <Icon>bookmark_border</Icon>
                                </Grid>
                                <Grid item>
                                    <Link to='#' className={classes.link}>Теория и методика</Link>
                                </Grid>
                            </Grid>
                            <Grid container spacing={16}>
                                <Grid item>
                                    <Chip label="фото" className={classes.buttonChip}/>
                                </Grid>

                                <Grid item>
                                    <Chip label="1" className={classes.buttonChip}/>
                                </Grid>

                                <Grid item>
                                    <Chip label="платный материал" className={classes.buttonChip}/>
                                </Grid>

                                <Grid item>
                                    <Chip label="пособие" className={classes.buttonChip}/>
                                </Grid>
                            </Grid>

                        </Paper>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

LibraryItemContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LibraryItemContent);