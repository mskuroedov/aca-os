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
import styles from '../../styles'



class Catalog extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <div>
                <Grid container spacing={16}>
                    <Grid item xs={12} lg={4}>
                        <FormControl className={classes.formControl}>
                            <Input classes={{
                                root: classes.searchInput,
                                underline: classes.searchInkbar
                            }}
                                   endAdornment={
                                       <InputAdornment position="end">
                                           <Icon classes={{
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
                    <div style={{width:'100%'}}></div>
                    <Grid item xs={12} lg={4}>
                        <CatalogItem cart/>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <CatalogItem cart/>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <CatalogItem cart/>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <CatalogItem cart/>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <CatalogItem/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.title}>Пакетные предложения</Typography>
                    </Grid>
                    <Grid item xs={12} lg={4}>
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