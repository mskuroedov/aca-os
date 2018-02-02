import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from "material-ui/es/Paper/Paper";
import Grid from "material-ui/es/Grid/Grid";
import Avatar from "material-ui/es/Avatar/Avatar";
import Link from "react-router-dom/es/Link";
import Typography from "material-ui/es/Typography/Typography";
import Icon from "material-ui/es/Icon/Icon";
import Button from "material-ui/es/Button/Button";
import Chip from "material-ui/es/Chip/Chip";


const styles = theme => ({

    paper: {
        boxShadow: 'none',
        borderRadius: 12,
        paddingBottom: 16,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 16,
        marginBottom: 10,
        border: '1px solid rgba(0,0,0,0.1);',
        fontSize: 16,
        fontFamily: 'BlissPro',
    },
    avatar: {
        width: 32,
        height: 32
    },
    link: {
        borderBottom: '1px solid rgba(36,36,33,0.2)',
        color: 'rgba(36,36,33,1)',
        '&:hover': {
            color: 'rgba(0,118,94,1)'
        }
    },
    video: {
        width: '100%',
        minHeight: 234,
        border: 0
    },
    promo: {
        width: 'calc(100% + 48px)',
        position: 'relative',
        left: '-24px'
    },
    itemGallery: {
        width: '20%',
        '& img': {
            width: '100%'
        }
    },
    buttonChip:{
        fontSize:14,
        color:'rgba(36,36,33,0.6)',
        border:'1px solid rgba(36,36,33,0.6)',
        maxHeight:28,
        backgroundColor:'white',
        borderRadius:0
    },
    heading:{
        fontSize:20,
        color:'rgba(36,36,33,1)',
        fontWeight:'bold'
    },
    basicText:{
        fontSize:16,
        color:'rgba(36,36,33,1)'
    },
    textDate:{
        fontSize:12,
        color:'rgba(36,36,33,0.6)'
    },
    icon:{
        color:'rgba(36,36,33,0.3)'
    },
    iconText:{
        fontSize:14
    }

});

class NewsItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;

        return (
            <Paper className={classes.paper}>
                {/*хедер новости*/}
                <Grid container alignItems='center' >
                    <Grid item>
                        <Avatar
                            alt="Adelle Charles"
                            src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
                            classes={{
                                root: classes.avatar
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <Link to='#' className={classes.link}>Родин Алексей</Link>
                    </Grid>
                    <Grid item>
                        <Typography to='#' className={classes.textDate}>12.12.2017</Typography>
                    </Grid>
                </Grid>

                {/*Платный материал*/}
                <Grid container alignItems='center'>
                    <Grid item>
                        <Icon className={classes.icon}>lock</Icon>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.iconText}>Платный материал</Typography>
                    </Grid>
                </Grid>

                {/*заголовок и начало текста*/}
                <Grid container style={{marginBottom:20}}>
                    <Grid item xs={12}>
                        <Typography className={classes.heading}>Как не разубедить ребенка заниматься хоккеем</Typography>
                        <Typography className={classes.basicText}>В первую очередь, когда только ребенок стал заниматься хоккеем, нужно чаще водить
                            его на матчи, чтобы показать что его ждет в будущем, слава и успех. Можно смотреть... по
                            телевизору как проходят матчи. Тогда ребенок будет больше впечатлен и не бросит заниматься
                            любимым делом. Нельзя позволять мальчишкам пропуска</Typography>
                    </Grid>
                </Grid>


                {/*ютуб*/}
                <Grid container style={{marginBottom:20}}>
                    <Grid item xs={12}>
                        <iframe src="https://www.youtube.com/embed/Y3ZKmi2SO9U" className={classes.video}></iframe>
                    </Grid>
                </Grid>

                {/*картинка*/}
                <Grid container style={{marginBottom:20}}>
                    <Grid item xs={12}>
                        <img src="https://s00.yaplakal.com/pics/pics_original/3/0/9/9484903.jpg" alt=""
                             className={classes.promo}/>
                    </Grid>
                </Grid>

                {/*авторы*/}
                <Grid container alignItems='center'>
                    <Grid     item>
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

                {/*галерея*/}
                <Grid container style={{marginBottom:20}}>
                    <Grid item className={classes.itemGallery}>
                        <img src="https://s00.yaplakal.com/pics/pics_original/3/0/9/9484903.jpg" alt=""
                        />
                    </Grid>
                    <Grid item className={classes.itemGallery}>
                        <img src="https://s00.yaplakal.com/pics/pics_original/3/0/9/9484903.jpg" alt=""
                        />
                    </Grid>
                    <Grid item className={classes.itemGallery}>
                        <img src="https://s00.yaplakal.com/pics/pics_original/3/0/9/9484903.jpg" alt=""
                        />
                    </Grid>
                    <Grid item className={classes.itemGallery}>
                        <img src="https://s00.yaplakal.com/pics/pics_original/3/0/9/9484903.jpg" alt=""
                        />
                    </Grid>
                    <Grid item className={classes.itemGallery}>
                        <img src="https://s00.yaplakal.com/pics/pics_original/3/0/9/9484903.jpg" alt=""
                        />
                    </Grid>
                    <Grid item>
                        <Link to='#' className={classes.link}>Все фотографии (12)</Link>
                    </Grid>
                </Grid>

                {/*тэг*/}
                <Grid container alignItems='center' style={{marginBottom:20}}>
                    <Grid item className={classes.icon}>
                        <Icon>bookmark_border</Icon>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.iconText}>Платный материал</Typography>
                    </Grid>
                </Grid>

                {/*чипсы*/}
                <Grid container>
                    <Grid item>
                        <Chip label="фото" className={classes.buttonChip} />
                    </Grid>

                    <Grid item>
                        <Chip label="asdjkfa;lsdkjfl" className={classes.buttonChip} />
                    </Grid>

                    <Grid item>
                        <Chip label="laksdjf" className={classes.buttonChip} />
                    </Grid>

                    <Grid item>
                        <Chip label="1239810928310" className={classes.buttonChip} />
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

NewsItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsItem);