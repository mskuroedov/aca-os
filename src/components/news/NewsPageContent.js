import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import NewsPaper from "../schools/school/common/NewsPaper";
import Button from "material-ui/es/Button/Button";
import FormControl from "material-ui/es/Form/FormControl";
import Input from "material-ui/es/Input/Input";

const styles = theme => ({

    button: {
        margin: theme.spacing.unit,
        fontSize: 13,
        fontWeight: 'bold',
        fontFamily: '"BlissPro",sans-serif',
    },

    formControl:{
        minWidth:280,
        marginBottom:24
    },
    searchInkbar: {
        color: 'rgba(36,36,33,1)',
        '&:before': {
            backgroundColor: 'rgba(0,0,0,0.2) !important'
        },
        '&:after': {
            backgroundColor: 'rgba(0,0,0,0.2) !important'
        }
    },

    searchInput: {
        fontSize: 16,
        color: 'rgba(36,36,33,1)',

        marginTop: 11,
        paddingBottom: 5,
        width:'100%',
        '&:before': {
            backgroundColor: 'rgba(0,0,0,0.2)'
        },
        '&:after': {
            backgroundColor: 'rgba(0,0,0,0.2)'
        }
    }

});


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
                        <FormControl className={classes.formControl}>
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