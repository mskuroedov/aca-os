import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import classNames from 'classnames';
import Link from "react-router-dom/es/Link";
import Paper from "@material-ui/core/es/Paper/Paper";
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import styles from '../../styles'


class AuthorCard extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <Link to='/author/1'>
                <Paper className='paper' style={{paddingTop:24,paddingBottom:32}}>
                    <Grid justify='center' container spacing={0}>
                        <Grid item xs={12}>
                            <Avatar
                                alt="Adelle Charles"
                                src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
                                classes={{
                                    root: classes.authoravatar
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.authorname}>Абдрашитов
                                Вадим Юсупович</Typography>
                        </Grid>
                        <Grid item>

                            <Typography className={classes.subtext}>Материалы: <span style={{fontSize:16,color:'#242421',fontWeight:'bold'}}>12</span></Typography>

                            {/*<Typography className={classes.subtext}>Платные: <span style={{fontSize:16,color:'#242421',fontWeight:'bold'}}>7</span></Typography>*/}
                        </Grid>
                    </Grid>
                </Paper>
            </Link>
        )
    }
}

AuthorCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AuthorCard);