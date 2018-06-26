import React from 'react';
import {Grid} from "material-ui";
import Paper from "material-ui/es/Paper/Paper";
import Typography from "material-ui/es/Typography/Typography";
import Avatar from "material-ui/es/Avatar/Avatar";
import {withStyles} from 'material-ui/styles';
import Link from "react-router-dom/es/Link";

const styles = theme => ({
    paper: {
        boxShadow: 'none',
        borderRadius: 12,
        paddingTop: 23,
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 26,
        marginBottom: 10,
        border: '1px solid rgba(0,0,0,0.1);',
        fontSize: 16,
        fontFamily: '"BlissPro",sans-serif',
    },
    primaryText: {
        fontSize: 14,
        fontFamily: '"BlissPro",sans-serif',
        textOverflow: 'ellipsis',
        maxHeight: 140,
        overflow: 'hidden',

    },
    primaryBigText: {
        fontSize: 18,
        fontFamily: '"BlissPro",sans-serif',
        fontWeight: 'bold',
        display:'block'
    },
    avatar: {
        width: 30,
        height: 30,
    },
    link: {
        fontSize: 13,
        borderBottom: '1px solid rgba(36,36,33,0.2)',
        color: 'rgba(36,36,33,1)',
        '&:hover': {
            color: 'rgba(0,118,94,1)'
        }
    },
    date: {
        fontSize: 13,
        color: 'rgba(36,36,33,0.6)',

    }

});

class NewsPaper extends React.Component {
    constructor(props) {
        super(props);
        this.titles = ['Обучение в школе', 'Руководство школы', 'История школы', 'Новости школы']
    }

    render() {
        const {classes} = this.props;
        return (
            <Link to='/news/1'>
                <Paper className={classes.paper}>
                    <Typography className={classes.date}>10.01.2018</Typography>

                    <Typography className={classes.primaryText}>
                        <span className={classes.primaryBigText}>Воспитанники академии получили бесплатные
                            комплекты экипировки</span>
                        В этом сезоне «Академия хоккея Ак Барс» при
                        наборе мальчиков 5 лет создала специальные условия для льготных... категорий семей — нуждающиеся
                        в
                        хоккейной экипировке дети получили стартовый... комплект формы в бесплатное пользование на весь
                        год.</Typography>
                    <Grid container style={{paddingTop: 22, alignItems: 'center'}}>
                        <Grid item xs={2}>
                            <Avatar
                                alt="Adelle Charles"
                                src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
                                classes={{
                                    root: classes.avatar
                                }}
                            />

                        </Grid>
                        <Grid item xs={10} style={{padding:0}}>
                            <Typography><Link to="/author/1" className={classes.link}>Константинопольский Константин</Link></Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Link>

        )

    }
}

// NewsPaper.propTypes = {
//     classes: NewsPaper.object.isRequired,
// };

export default withStyles(styles)(NewsPaper);

