import styles from '../../../styles'
import React from 'react';
import {Grid} from "material-ui";
import Typography from "material-ui/es/Typography/Typography";
import Avatar from "material-ui/es/Avatar/Avatar";
import Link from "react-router-dom/es/Link";
import Paper from "@material-ui/core/es/Paper/Paper";
import withStyles from "@material-ui/core/es/styles/withStyles";

class NewsPaper extends React.Component {
    constructor(props) {
        super(props);
        this.titles = ['Обучение в школе', 'Руководство школы', 'История школы', 'Новости школы']
    }

    render() {
        const {classes} = this.props;
        return (
            <Link to='/news/1'>
                <Paper className={classes.newsPaper} classes={{
                    root:classes.newsPaper
                }}>
                    <Typography className={classes.date}>10.01.2018</Typography>

                    <Typography className={classes.primaryTextfs14}>
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
                                    root: classes.avatarw30
                                }}
                            />

                        </Grid>
                        <Grid item xs={10} style={{padding:0}}>
                            <Typography><Link to="/author/1" className={classes.linkfs13}>Константинопольский Константин</Link></Typography>
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

