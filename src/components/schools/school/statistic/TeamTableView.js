import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import Table from "@material-ui/core/es/Table/Table";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import TableFooter from "@material-ui/core/es/TableFooter/TableFooter";
import TablePagination from "@material-ui/core/es/TablePagination/TablePagination";
import TeamTableItem from "./TeamTableItem";




class TeamTableView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rowsPerPage: 5,
            count: this.props.TeamStats.length,
            page: 0,
            TeamStats: []
        };
    }

// обновляет данные сразу после загрузки компонента
    componentDidMount() {
        this.setTableData(this.props.TeamStats, this.state.rowsPerPage, this.state.page)
    }

    // обновляет данные при поиске из родительского компонента
    componentWillReceiveProps(props) {
        this.setTableData(props.TeamStats, this.state.rowsPerPage, this.state.page)
    }

    setTableData = (TeamStats, rowsPerPage, page) => {
        const startIndex = page * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        this.setState({
            TeamStats: TeamStats.slice(startIndex, endIndex),
            count: TeamStats.length,
            rowsPerPage,
            page
        });
    };

    onPageChange = (event, page) => {
        this.setTableData(this.props.TeamStats, this.state.rowsPerPage, page)
    };

    onRowsPerPageChange = (event) => {
        this.setTableData(this.props.TeamStats, event.target.value, this.state.page)
    };

    render() {
        const {rowsPerPage, count, page, TeamStats} = this.state;

        return (
            <Grid container>
                <Grid item xs={12}>
                    <Paper className="paper">
                        <Table className="table_stats no-bottom">
                            <TableHead>
                                <TableRow>
                                    <TableCell numeric style={{maxWidth:50,paddingRight:16}}>Место</TableCell>
                                    <TableCell style={{width:350,paddingLeft:24}}>Команда</TableCell>
                                    <TableCell numeric>И</TableCell>
                                    <TableCell numeric>В</TableCell>
                                    <TableCell numeric>ВО</TableCell>
                                    <TableCell numeric>ВБ</TableCell>
                                    <TableCell numeric>ПБ</TableCell>
                                    <TableCell numeric>ПО</TableCell>
                                    <TableCell numeric>П</TableCell>
                                    <TableCell numeric>Ш</TableCell>
                                    <TableCell numeric>О</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    TeamStats.map((item) => {
                                        return <TeamTableItem key={item.id} {...item} />
                                    })
                                }
                            </TableBody>
                            {/*<TableFooter>*/}
                                {/*<TableRow>*/}
                                    {/*<TablePagination*/}
                                        {/*classes={{*/}
                                            {/*caption: 'sportsman_table_footer',*/}
                                            {/*actions: "1"*/}
                                        {/*}}*/}
                                        {/*colSpan={12}*/}
                                        {/*backIconButtonProps={{*/}
                                            {/*'aria-label': 'Previous Page',*/}
                                        {/*}}*/}
                                        {/*nextIconButtonProps={{*/}
                                            {/*'aria-label': 'Next Page',*/}
                                        {/*}}*/}
                                        {/*labelDisplayedRows={*/}
                                            {/*({from, to, count}) => `${from}-${to} из ${count}`*/}
                                        {/*}*/}
                                        {/*rowsPerPage={rowsPerPage}*/}
                                        {/*count={count}*/}
                                        {/*page={page}*/}
                                        {/*onChangePage={this.onPageChange}*/}
                                        {/*onChangeRowsPerPage={this.onRowsPerPageChange}*/}
                                        {/*rowsPerPageOptions={[1, 5, 10, 20]}*/}
                                    {/*/>*/}
                                {/*</TableRow>*/}
                            {/*</TableFooter>*/}
                        </Table>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

TeamTableView.propTypes = {
    TeamStats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TeamTableView;