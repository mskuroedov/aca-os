import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TableFooter from "@material-ui/core/TableFooter/TableFooter";
import TablePagination from "@material-ui/core/TablePagination/TablePagination";
import SelfTableItem from "./SelfTableItem";




class SelfTableView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rowsPerPage: 5,
            count: this.props.SelfStats.length,
            page: 0,
            SelfStats: []
        };
    }

    // обновляет данные сразу после загрузки компонента
    componentDidMount() {
        this.setTableData(this.props.SelfStats, this.state.rowsPerPage, this.state.page)
    }

    // обновляет данные при поиске из родительского компонента
    componentWillReceiveProps(props) {
        this.setTableData(props.SelfStats, this.state.rowsPerPage, this.state.page)
    }

    setTableData = (SelfStats, rowsPerPage, page) => {
        const startIndex = page * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        this.setState({
            SelfStats: SelfStats.slice(startIndex, endIndex),
            count: SelfStats.length,
            rowsPerPage,
            page
        });
    };

    onPageChange = (event, page) => {
        this.setTableData(this.props.SelfStats, this.state.rowsPerPage, page)
    };

    onRowsPerPageChange = (event) => {
        this.setTableData(this.props.SelfStats, event.target.value, this.state.page)
    };

    render() {
        const {rowsPerPage, count, page, SelfStats} = this.state;
        const {common} = this.props;
        return (
            <Grid container>
                <Grid item xs={12}>
                    <Paper className="paper">
                        <Table className="table_stats">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Номер</TableCell>
                                    {/*<TableCell>Фамилия, имя</TableCell>*/}
                                    <TableCell>
                                        {
                                            common ? 'Школа' : 'Группа'
                                        }
                                    </TableCell>
                                    {/*<TableCell>А</TableCell>*/}
                                    <TableCell numeric>И</TableCell>
                                    {/*<TableCell numeric>В</TableCell>*/}
                                    <TableCell numeric>Г</TableCell>
                                    {/*<TableCell numeric>Гср</TableCell>*/}
                                    <TableCell numeric>П</TableCell>
                                    <TableCell numeric>О</TableCell>
                                    <TableCell numeric>+/-</TableCell>
                                    <TableCell numeric>Штр</TableCell>
                                    <TableCell numeric>БВ</TableCell>
                                    <TableCell numeric>%Вбр</TableCell>
                                    <TableCell numeric>ИВ</TableCell>
                                    {/*<TableCell numeric>ОИ</TableCell>*/}
                                    {/*<TableCell numeric>ГП</TableCell>*/}
                                    {/*<TableCell numeric>ГБ</TableCell>*/}
                                    {/*<TableCell numeric>Ш</TableCell>*/}

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    SelfStats.map((item) => {
                                        return <SelfTableItem common={common} key={item.id} {...item} />
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
                </Grid>
            </Grid>
        )
    }
}

SelfTableView.propTypes = {
    SelfStats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SelfTableView;