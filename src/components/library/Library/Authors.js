import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import Icon from "@material-ui/core/es/Icon/Icon";
import AuthorTabs from "./AuthorTabs";
import FormControl from "material-ui/es/Form/FormControl";
import Input from "material-ui/es/Input/Input";
import InputAdornment from "material-ui/es/Input/InputAdornment";
import AuthorGrid from "./AuthorGrid";
import styles from '../../styles'


class Authors extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <section>
                <Grid container spacing={16}>
                    <Grid item xs={12} lg={4} className={classes.mlauto}>
                        <FormControl style={{width:'100%'}}>
                            <Input
                                classes={{
                                    root: classes.searchInput,
                                    underline: classes.searchInkbar
                                }}
                                onChange={this.onSearchChange}
                                placeholder="Поиск по имени"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Icon classes={{
                                            root: classes.searchInputIcon
                                        }} style={{fontSize:18}}>
                                            search
                                        </Icon>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <AuthorTabs/>
                         <AuthorGrid/>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

Authors.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Authors);