import React from 'react';
import PropTypes from 'prop-types';
import {Paper, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow} from "material-ui";
import TableItem from "./TableItem";


class TableView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            rowsPerPage: 5,
            count: this.props.schools.length,
            page: 0,
            schools: []
        };
    }

    // обновляет данные сразу после загрузки компонента
    componentDidMount() {
        this.setTableData(this.props.schools, this.state.rowsPerPage, this.state.page)
    }
    // обновляет данные при поиске из родительского компонента
    componentWillReceiveProps(props) {
        this.setTableData(props.schools, this.state.rowsPerPage, this.state.page)
    }

    setTableData = (schools, rowsPerPage, page) => {
        const startIndex = page * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        this.setState({
            schools: schools.slice(startIndex, endIndex),
            count: schools.length,
            rowsPerPage,
            page
        });
    };

    onPageChange = (event, page) => {
        this.setTableData(this.props.schools, this.state.rowsPerPage, page)
    };

    onRowsPerPageChange = (event) => {
        this.setTableData(this.props.schools, event.target.value, this.state.page)
    };

    render() {
        const {rowsPerPage, count, page, schools} = this.state;
        return (

            <Paper className="paper">
                <Table className="table_sportsman">
                    <TableHead>
                        <TableRow>
                            <TableCell>Организация</TableCell>
                            <TableCell>Статус</TableCell>
                            <TableCell>Директор</TableCell>
                            <TableCell>Адрес</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            schools.map((item) => {
                                return <TableItem key={item.id} {...item} />
                            })
                        }
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                classes={{
                                    caption: 'sportsman_table_footer',
                                    actions: "1"
                                }}
                                colSpan={12}
                                rowsPerPage={rowsPerPage}
                                count={count}
                                page={page}
                                backIconButtonProps={{
                                    'aria-label': 'Previous Page',
                                }}
                                nextIconButtonProps={{
                                    'aria-label': 'Next Page',
                                }}
                                labelDisplayedRows={
                                    ({from, to, count}) => `${from}-${to} из ${count}`
                                }
                                onChangePage={this.onPageChange}
                                onChangeRowsPerPage={this.onRowsPerPageChange}
                                rowsPerPageOptions={[1,5,10,20]}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </Paper>
        )
    }
}

TableView.propTypes = {
    schools: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableView;

