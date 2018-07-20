import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import Select from "material-ui/es/Select/Select";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import {statsChamp} from "../../../fixtures/stats";
import {payHistory,payHFilters} from "../../../fixtures/paymentHistory";
import InputAdornment from "material-ui/es/Input/InputAdornment";
import Icon from "material-ui/es/Icon/Icon";
import Input from "material-ui/es/Input/Input";
import Paper from "@material-ui/core/es/Paper/Paper";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import PayTableItem from "./PayTableItem";
import Table from "material-ui/es/Table/Table";
import TableHead from "material-ui/es/Table/TableHead";
import TableRow from "material-ui/es/Table/TableRow";

const styles = theme => ({

    select: {
        backgroundColor: 'rgba(36,36,33,0.1)',
        paddingLeft: 17,
        paddingTop: 16,
        paddingBottom: 10,
        paddingRight: 40,
        fontSize: 16,
        color: '#242421',
        '&:after': {
            backgroundColor: '#242421'
        }
    },
    selectIcon: {
        color: '#6D6D6D',
    },

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
    }

});


class PaymentHistory extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        statsChamp,
        payHistory,
        payHFilters,
        selectedChampionshipFilter: 1,
    };

    onChampionshipFilterChange = event => {
        this.setState({selectedChampionshipFilter: event.target.value});
    };

    render() {
        const {classes} = this.props;
        return (
            <Grid container spacing={16}>
                <Grid item>
                    <FormControl>
                        <Select
                            value={this.state.selectedChampionshipFilter}
                            onChange={this.onChampionshipFilterChange}
                            disableUnderline={true}
                            classes={{
                                select: classes.select,
                                icon: classes.selectIcon,
                            }}
                            autoWidth
                        >
                            {
                                this.state.payHFilters.map((item) => (
                                    <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
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
                <Grid item xs={12}>
                    <Paper className="paper" style={{marginBottom:100}}>
                        <Table className="table_stats no-bottom" >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Дата</TableCell>
                                    <TableCell>Услуга</TableCell>
                                    <TableCell >Стоимость</TableCell>
                                    <TableCell >Статус</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    payHistory.map((item) => {
                                        return <PayTableItem key={item.id} {...item} />
                                    })
                                }
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

PaymentHistory.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaymentHistory);