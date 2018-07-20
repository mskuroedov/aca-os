import React from 'react';
import TilesItem from "./TilesItem";
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import Grid from "material-ui/es/Grid/Grid";
import Typography from "material-ui/es/Typography/Typography";
import Button from "material-ui/es/Button/Button";
import styles from '../../../styles'

class TilesView extends React.Component {

    render() {
        const {classes, schoolType, schools} = this.props;

        return (
            <Grid container spacing={16}>
                <Grid item xs={6} className='xs-hidden'>
                    <Typography className={classes.title} style={{marginBottom:0}}>{schoolType}</Typography>
                </Grid>
                <Grid item xs={6} className='xs-hidden'>
                    <Button color="primary" className={classes.button} style={{float:'right'}}>показать все</Button>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={16}>
                        {
                            schools.map((item) => {
                                return <TilesItem key={item.id} {...item} />
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

TilesView.propTypes = {
    classes: PropTypes.object.isRequired,
    schoolType: PropTypes.string.isRequired,
    schools: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default withStyles(styles)(TilesView);


