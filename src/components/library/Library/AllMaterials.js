import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import FormControl from "material-ui/es/Form/FormControl";
import Grid from "material-ui/es/Grid/Grid";
import Input from "material-ui/es/Input/Input";
import InputAdornment from "material-ui/es/Input/InputAdornment";
import Icon from "material-ui/es/Icon/Icon";
import Paper from "material-ui/es/Paper/Paper";
import NewsItem from "./NewsItem";


const styles = theme => ({
    mlauto: {
        display: 'flex'
    },
    searchInput: {
        fontSize: 14,
        color: 'rgba(36,36,33,1)',
        marginTop: 11,
        paddingBottom: 5,
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
        top: 3
    },
    button: {
        margin: theme.spacing.unit,
        fontSize: 13,
        fontWeight: 'bold',
        fontFamily: '"BlissPro",sans-serif',
    },

});


class AllMaterials extends React.Component {
    constructor(props) {
        super(props);
    }

    items = [
        {text:true, video: false, paid: false, album: false, gallery: false, authors: true},
        {text:false, video: true, paid: false, album: false, gallery: false, authors: false},
        {text:false, video: false, paid: false, album: false, gallery: true, authors: false},
        {text:true,video: false, paid: false, album: true, gallery: false, authors: false},
        {text:true,video: false, paid: false, album: true, gallery: false, authors: false},
        {text:true, video: false, paid: false, album: false, gallery: false, authors: false},
    ];

    render() {
        const {classes} = this.props;

        return (
            <Grid container spacing={16}
            >
                <Grid item xs={12} lg={4} className={classes.mlauto}>
                    <FormControl style={{width:'100%'}}>
                        <Input
                            classes={{
                                root: classes.searchInput,
                                underline: classes.searchInkbar
                            }}
                            onChange={this.onSearchChange}
                            placeholder="Поиск по названию"
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
                <Grid item xs={12} style={{marginTop:34,textAlign:'center'}}>
                        <Button variant="raised" color='primary' className={classes.button}>Загрузить ещё</Button>


                </Grid>
            </Grid>
        )
    }
}

AllMaterials.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AllMaterials);

