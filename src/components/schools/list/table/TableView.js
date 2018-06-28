import React from 'react';
import PropTypes from 'prop-types';
import {Paper, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow} from "material-ui";
import TableItem from "./TableItem";
import Checkbox from '@material-ui/core/Checkbox';
import { xor } from 'lodash'

class TableView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            rowsPerPage: 5,
            count: this.props.schools.length,
            page: 0,
            schools: [],
            selected: []
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

    onSelectAll = (event, checked) => {
        if (checked) {
            return this.setState(state => ({
                selected: this.props.schools.map(n => n.id)
            }));
        }

        this.setState({ selected: [] });
    };

    onSelectItem = (id) => {
        this.setState(state => ({
            selected: xor(this.state.selected, [id])
        }));
    };

    render() {
        const {rowsPerPage, count, page, schools, selected} = this.state;

        const isAllChecked = (selected.length === count);
        const isItemChecked = id => !!~selected.indexOf(id);
        const indeterminate = (selected.length > 0 && selected.length < count);

        return (
            <Paper className="paper">
                <Table className="table_sportsman">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Checkbox
                                    onChange={this.onSelectAll}
                                    checked={isAllChecked}
                                    indeterminate={indeterminate}
                                />
                            </TableCell>
                            <TableCell>Организация</TableCell>
                            <TableCell>Статус</TableCell>
                            <TableCell>Директор</TableCell>
                            <TableCell>Адрес</TableCell>
                            <TableCell/>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            schools.map((item) =>
                                <TableItem
                                    key={item.id}
                                    isChecked={isItemChecked(item.id)}
                                    onSelectRequest={() =>
                                        this.onSelectItem(item.id)
                                    }
                                    {...item}
                                />
                            )
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

