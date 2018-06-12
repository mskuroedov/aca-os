import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Paper from "@material-ui/core/es/Paper/Paper";
import Table from "@material-ui/core/es/Table/Table";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import TableFooter from "@material-ui/core/es/TableFooter/TableFooter";
import TablePagination from "@material-ui/core/es/TablePagination/TablePagination";
import TournamentTableItem from "./TournamentTableItem";

const styles = theme => ({


});


class TournamentTableView extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            calendar:[],
            rowsPerPage: 5,
            count: this.props.calendar.length,
            page: 0,
        }
    }


    // обновляет данные сразу после загрузки компонента
    componentDidMount() {
        this.setTableData(this.props.calendar, this.state.rowsPerPage, this.state.page)
    }

    // обновляет данные при поиске из родительского компонента
    componentWillReceiveProps(props) {
        this.setTableData(props.calendar, this.state.rowsPerPage, this.state.page)
    }

    onPageChange = (event, page) => {
        this.setTableData(this.props.calendar, this.state.rowsPerPage, page)
    };

    onRowsPerPageChange = (event) => {
        this.setTableData(this.props.calendar, event.target.value, this.state.page)
    };

    setTableData = (calendar, rowsPerPage, page) => {
        const startIndex = page * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        this.setState({
            calendar: calendar.slice(startIndex, endIndex),
            count: calendar.length,
            rowsPerPage,
            page
        });
    };

    render() {
        const {classes} = this.props;
        const {rowsPerPage, count, page, calendar} = this.state;

        return (
            <Paper className="paper">
                <Table className="table_stats">
                    <TableHead>
                        <TableRow>
                            <TableCell>Дата</TableCell>
                            <TableCell numeric>Время</TableCell>
                            <TableCell numeric>№</TableCell>
                            <TableCell numeric>Хозяева</TableCell>
                            <TableCell style={{textAlign:'center'}}>Счет</TableCell>
                            <TableCell >Гости</TableCell>
                            <TableCell >Статус</TableCell>
                            <TableCell >Лига</TableCell>
                            <TableCell >Этап</TableCell>
                            <TableCell numeric>Год рож.</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            calendar.map((item) => {
                                return <TournamentTableItem key={item.id} {...item} />
                            })
                        }
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                classes={{
                                    caption: 'sportsman_table_footer',
                                    actions: "1",
                                    selectRoot:'d-none'
                                }}

                                labelRowsPerPage=''
                                colSpan={12}
                                backIconButtonProps={{
                                    'aria-label': 'Previous Page',
                                }}
                                nextIconButtonProps={{
                                    'aria-label': 'Next Page',
                                }}
                                labelDisplayedRows={
                                    ({from, to, count}) => `${from}-${to} из ${count}`
                                }
                                rowsPerPage={rowsPerPage}
                                count={count}
                                page={page}
                                onChangePage={this.onPageChange}
                                onChangeRowsPerPage={this.onRowsPerPageChange}
                                rowsPerPageOptions={[1, 5, 10, 20]}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </Paper>

        )
    }
}

TournamentTableView.propTypes = {
    classes: PropTypes.object.isRequired,
    calendar: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(TournamentTableView);