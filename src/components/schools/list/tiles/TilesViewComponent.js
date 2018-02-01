import React from 'react';
import TilesItem from "./TilesItem";
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Grid from "material-ui/es/Grid/Grid";
import Typography from "material-ui/es/Typography/Typography";
import Button from "material-ui/es/Button/Button";

const styles = theme => ({
    button: {
        float: 'right',
        fontSize: 13,
        fontWeight: 'bold'
    },
    title: {
        color: 'rgba(36,36,33,0.6)',
        fontSize: 20
    }
});

class TilesView extends React.Component {

    render() {
        const {classes, schoolType, schools} = this.props;

        return (
            <Grid container>
                <Grid item xs={6}>
                    <Typography className={classes.title}>{schoolType}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Button color="primary" className={classes.button}>показать все</Button>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
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


