import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {Paper, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow} from "material-ui";
import TableItem from "./TableItem";


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        fontSize: 13,
        marginLeft: 'auto',
        marginRight: 20,
        fontFamily: 'BlissPro',
    },
    select: {
        backgroundColor: 'rgba(36,36,33,0.1)',
        paddingLeft: 17,
        paddingTop: 13,
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
        marginTop: 3
    },
    selectLine: {
        color: 'transparent'
    },
    row: {
        paddingTop: 18,
        paddingBottom: 18
    },
    tableFooter: {
        fontSize: '13px !important'
    }
});


class TableView extends React.Component {
    handleChangePage(){
        console.log('handleChangePage')
    };
    handleChangeRowsPerPage(){
        console.log('handleChangeRowsPerPage')
    };
    render() {
        const {classes} = this.props;
        return (

            <Paper className="paper">
                <Table className="table_sportsman">
                    <TableHead>
                        <TableRow>
                            <TableCell>Организация</TableCell>
                            <TableCell>Статус</TableCell>
                            <TableCell>Директор</TableCell>
                            <TableCell >Адрес</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.props.sportsman.map((item) => {
                                return <TableItem key={item.id} {...item} />
                            })
                        }
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination classes={{
                                caption: 'sportsman_table_footer',
                                actions: "1"
                            }}
                                             colSpan={12}
                                             rowsPerPage={2}
                                             count={10}
                                             page={1}
                                             backIconButtonProps={{
                                                 'aria-label': 'Previous Page',
                                             }}
                                             nextIconButtonProps={{
                                                 'aria-label': 'Next Page',
                                             }}
                                // labelDisplayedRows={{({ from, to, count }) => ${from}-+ 'из' + of ${count}}}
                                             onChangePage={this.handleChangePage}
                                             onChangeRowsPerPage={this.handleChangeRowsPerPage}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </Paper>
        )
    }
}

TableView.propTypes = {
    classes: PropTypes.object.isRequired,
    sportsman: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(TableView);

