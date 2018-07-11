import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "material-ui/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import NewsItem from "../Library/NewsItem";
import styles from '../../styles'


class AuthorPageContent extends React.Component {
    constructor(props) {
        super(props);
    }
    items = [
        {text:true, video: false, paid: false, album: false, gallery: false, authors: true},
        {text:true, video: false, paid: false, album: true, gallery: false, authors: false},
    ];

    render() {
        const {classes} = this.props;
        return (
            <section className='main-section'>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <Typography className={classes.title} style={{marginBottom:0}}>Материалы</Typography>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        {
                            this.items.map((item, i) => (
                                i % 2 === 0 ? <NewsItem {...item} /> : ''
                            ))
                        }
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        {
                            this.items.map((item, i) => (
                                i % 2 !== 0 ? <NewsItem {...item} /> : ''
                            ))
                        }
                    </Grid>
                </Grid>
            </section>
        )
    }
}

AuthorPageContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AuthorPageContent);