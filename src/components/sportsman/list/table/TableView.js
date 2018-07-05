import React from "react";
import PropTypes from "prop-types";
import Paper from "material-ui/es/Paper/Paper";
import Table from "material-ui/es/Table/Table";
import TableRow from "material-ui/es/Table/TableRow";
import TableCell from "material-ui/es/Table/TableCell";
import { TableBody, TableHead } from "material-ui";
import TableItem from "./TableItem";
import TableFooter from "material-ui/Table/TableFooter";
import TablePagination from "material-ui/es/Table/TablePagination";
import Checkbox from "@material-ui/core/Checkbox";
import { xor } from "lodash";

class TableView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rowsPerPage: 5,
      count: this.props.sportsman.length,
      page: 0,
      sportsman: [],
      selected: []
    };
  }

  // обновляет данные сразу после загрузки компонента
  componentDidMount() {
    this.setTableData(
      this.props.sportsman,
      this.state.rowsPerPage,
      this.state.page
    );
  }

  // обновляет данные при поиске из родительского компонента
  componentWillReceiveProps(props) {
    this.setTableData(props.sportsman, this.state.rowsPerPage, this.state.page);
  }

  setTableData = (sportsman, rowsPerPage, page) => {
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    this.setState({
      sportsman: sportsman.slice(startIndex, endIndex),
      count: sportsman.length,
      rowsPerPage,
      page
    });
  };

  onSelectAll = (event, checked) => {
    if (checked) {
      return this.setState(state => ({
        selected: this.props.sportsman.map(n => n.id)
      }));
    }

    this.setState({ selected: [] });
  };

  onSelectItem = id => {
    this.setState(state => ({
      selected: xor(this.state.selected, [id])
    }));
  };

  onPageChange = (event, page) => {
    this.setTableData(this.props.sportsman, this.state.rowsPerPage, page);
  };

  onRowsPerPageChange = event => {
    this.setTableData(
      this.props.sportsman,
      event.target.value,
      this.state.page
    );
  };

  render() {
    const { rowsPerPage, count, page, sportsman, selected } = this.state;

    const isAllChecked = selected.length === count;
    const isItemChecked = id => !!~selected.indexOf(id);
    const indeterminate = selected.length > 0 && selected.length < count;

    return (
      <Paper className="paper">
        <Table className="table_sportsman">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: 10 }}>
                <Checkbox
                  onChange={this.onSelectAll}
                  checked={isAllChecked}
                  indeterminate={indeterminate}
                />
              </TableCell>
              <TableCell />
              <TableCell>ФИО</TableCell>
              <TableCell>Группа</TableCell>
              <TableCell numeric>Год набора</TableCell>
              <TableCell numeric>Дата рождения</TableCell>
              <TableCell>Амплуа</TableCell>
              <TableCell numeric>Рейтинг</TableCell>
              <TableCell numeric />
            </TableRow>
          </TableHead>
          <TableBody>
            {sportsman.map(item => {
              return (
                <TableItem
                  isChecked={isItemChecked(item.id)}
                  key={item.id}
                  onSelectRequest={() => this.onSelectItem(item.id)}
                  {...item}
                />
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                classes={{
                  caption: "sportsman_table_footer",
                  actions: "1"
                }}
                colSpan={12}
                backIconButtonProps={{
                  "aria-label": "Previous Page"
                }}
                nextIconButtonProps={{
                  "aria-label": "Next Page"
                }}
                labelDisplayedRows={({ from, to, count }) =>
                  `${from}-${to} из ${count}`
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
    );
  }
}

TableView.propTypes = {
  sportsman: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TableView;
