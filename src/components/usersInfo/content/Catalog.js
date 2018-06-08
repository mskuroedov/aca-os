import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import CatalogItem from "./CatalogItem";
import FormControl from "material-ui/es/Form/FormControl";
import Input from "material-ui/es/Input/Input";
import InputAdornment from "material-ui/es/Input/InputAdornment";
import Icon from "material-ui/es/Icon/Icon";
import Typography from "@material-ui/core/es/Typography/Typography";

const styles = theme => ({
    searchInput: {
        fontSize: 14,
        color: 'rgba(36,36,33,1)',

        marginTop: 11,
        paddingBottom: 5,
        minWidth: 267,
        '&:before': {
            backgroundColor: 'rgba(0,0,0,0.2)'
        },
        '&:after': {
            backgroundColor: 'rgba(0,0,0,0.2)'
        }
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
    searchInputIcon: {
        color: 'rgba(145,143,138,1)',
        position: 'relative',
        fontSize: 16,
        top: 3,
    },
    title: {
        fontSize: 20,
        color: ' rgba(36,36,33,0.6);',
        fontFamily: '"BlissPro",sans-serif',
        fontWeight: 'normal'
    },
});


class Catalog extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <div>
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <FormControl className={classes.formControl}>
                        <Input classes={{
                            root: classes.searchInput,
                            underline: classes.searchInkbar
                        }}
                               endAdornment={
                                   <InputAdornment position="end"><Icon classes={{
                                       root: classes.searchInputIcon
                                   }}
                                                                        style={{
                                                                            fontSize: 18
                                                                        }}>
                                       search
                                   </Icon></InputAdornment>
                               }
                               placeholder="Поиск по названию..."

                        />
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <CatalogItem cart/>
                </Grid>
                <Grid item xs={4}>
                    <CatalogItem cart/>
                </Grid>
                <Grid item xs={4}>
                    <CatalogItem cart/>
                </Grid>
                <Grid item xs={4}>
                    <CatalogItem cart/>
                </Grid>
                <Grid item xs={4}>
                    <CatalogItem />
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.title}>Пакетные предложения</Typography>
                </Grid>
                <Grid item xs={4}>
                    <CatalogItem cart option='6 месяцев'/>
                </Grid>
            </Grid>
            </div>
        )
    }
}

Catalog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Catalog);