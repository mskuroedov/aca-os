import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import NewsPaper from "../schools/school/common/NewsPaper";
import Button from "material-ui/es/Button/Button";
import FormControl from "material-ui/es/Form/FormControl";
import Input from "material-ui/es/Input/Input";
import styles from '../styles'

class NewsPageContent extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <section className='main-section'>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <FormControl className={classes.mwformControl}>
                            <Input classes={{
                                root: classes.searchInput,
                                underline: classes.searchInkbar
                            }}
                                   fullwidth
                                   multiline
                                   placeholder="Поиск по названию..."

                            />
                        </FormControl>

                    </Grid>
                    <Grid item xs={12} lg={4}><NewsPaper/></Grid>
                    <Grid item xs={12} lg={4}><NewsPaper/></Grid>
                    <Grid item xs={12} lg={4}><NewsPaper/></Grid>
                    <Grid item xs={12} lg={4}><NewsPaper/></Grid>
                    <Grid item xs={12} lg={4}><NewsPaper/></Grid>
                    <Grid item xs={12} lg={4}><NewsPaper/></Grid>
                    <Grid item xs={12} style={{textAlign:'center'}}>
                        <Button variant="raised" color='primary' className={classes.button}>Загрузить ещё</Button>

                    </Grid>
                </Grid>
            </section>
        )
    }
}

NewsPageContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsPageContent);