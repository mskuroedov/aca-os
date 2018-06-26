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
        fontFamily: '"BlissPro",sans-serif',
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
    buttonChip: {
        fontSize: 14,
        color: 'rgba(36,36,33,0.6)',
        border: '1px solid rgba(36,36,33,0.3)',
        maxHeight: 28,
        backgroundColor: 'white',
        borderRadius: 2
    },
    heading: {
        fontSize: 20,
        color: 'rgba(36,36,33,1)',
        fontWeight: 'bold'
    },
    basicText: {
        fontSize: 16,
        color: 'rgba(36,36,33,1)',
        maxHeight: 70,
        overflow: 'hidden',
        marginTop: 10,
        textOverflow: 'ellipsis'
    },
    textDate: {
        fontSize: 12,
        color: 'rgba(36,36,33,0.6)'
    },
    icon: {
        color: 'rgba(36,36,33,0.3)'
    },
    iconText: {
        fontSize: 14
    }

});

class NewsItem extends React.Component {

    render() {
        const {classes, video, paid, album, gallery, authors, text} = this.props;

        return (
            <Link to='/libraries/1'>

                <Paper className={classes.paper}>

                    {/*заголовок и начало текста*/}
                    <Grid container spacing={16} style={{marginBottom: 20}}>
                        <Grid item xs={12}>
                            <Typography className={classes.heading}>Как не разубедить ребенка заниматься
                                хоккеем</Typography>
                            {text &&
                            <Typography className={classes.basicText}>В первую очередь, когда только ребенок стал
                                заниматься хоккеем, нужно чаще водить
                                его на матчи, чтобы показать что его ждет в будущем, слава и успех. Можно смотреть... по
                                телевизору как проходят матчи. Тогда ребенок будет больше впечатлен и не бросит
                                заниматься
                                любимым делом. Нельзя позволять мальчишкам пропуска</Typography>
                            }
                        </Grid>
                    </Grid>


                    {/*ютуб*/}
                    {video &&
                    <Grid container spacing={16} style={{marginBottom: 20}}>
                        <Grid item xs={12}>
                            <iframe src="https://www.youtube.com/embed/Y3ZKmi2SO9U" className={classes.video}></iframe>
                        </Grid>
                    </Grid>
                    }

                    {/*картинка*/}
                    {album &&
                    <Grid container spacing={16} style={{marginBottom: 20}}>
                        <Grid item xs={12}>
                            <img src="https://s00.yaplakal.com/pics/pics_original/3/0/9/9484903.jpg" alt=""
                                 className={classes.promo}/>
                        </Grid>
                    </Grid>
                    }

                    {/*авторы*/}
                    {authors &&
                    <Grid container spacing={16} alignItems='center'>
                        <Grid item>
                            <Typography className={classes.iconText}>Авторы:
                                <Link to='author/1' className={classes.link}>123</Link>,
                                <Link to='author/1' className={classes.link}>123</Link>,
                                <Link to='author/1' className={classes.link}>123</Link>,
                                <Link to='author/1' className={classes.link}>123</Link>,
                                <Link to='author/1' className={classes.link}>123</Link>
                                , еще n
                            </Typography>
                        </Grid>
                    </Grid>
                    }

                    {/*галерея*/}
                    {gallery &&
                    <Grid container spacing={8} style={{marginBottom: 20}}>
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
                    }

                    {/*тэг*/}
                    <Grid container spacing={16} alignItems='center' style={{marginBottom: 20}}>
                        <Grid item className={classes.icon}>
                            <Icon>bookmark_border</Icon>
                        </Grid>
                        <Grid item>
                            <Link to='#' className={classes.link}>Чемпионат России</Link>
                        </Grid>
                    </Grid>

                    {/*чипсы*/}
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
                    {/*футер новости*/}
                    <Grid container spacing={16} alignItems='center' style={{marginTop: 16}}>
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
                            <Link to='/author/1' className={classes.link}>Родин Алексей</Link>
                        </Grid>
                        <Grid item>
                            <Typography to='#' className={classes.textDate}>12.12.2017</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Link>
        );
    }
}

NewsItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsItem);