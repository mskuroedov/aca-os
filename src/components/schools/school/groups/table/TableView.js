import React from "react";
import PropTypes from "prop-types";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow
} from "material-ui";
import TableItem from "./TableItem";
import Checkbox from "@material-ui/core/Checkbox";
import { xor } from "lodash";

class TableView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rowsPerPage: 5,
      count: this.props.groups.length,
      page: 0,
      groups: [],
      selected: []
    };
  }

  // обновляет данные сразу после загрузки компонента
  componentDidMount() {
    this.setTableData(
      this.props.groups,
      this.state.rowsPerPage,
      this.state.page
    );
  }
  // обновляет данные при поиске из родительского компонента
  componentWillReceiveProps(props) {
    this.setTableData(props.groups, this.state.rowsPerPage, this.state.page);
  }

  setTableData = (groups, rowsPerPage, page) => {
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    this.setState({
      groups: groups.slice(startIndex, endIndex),
      count: groups.length,
      rowsPerPage,
      page
    });
  };

  onPageChange = (event, page) => {
    this.setTableData(this.props.groups, this.state.rowsPerPage, page);
  };

  onRowsPerPageChange = event => {
    this.setTableData(this.props.groups, event.target.value, this.state.page);
  };

  onSelectAll = (event, checked) => {
    if (checked) {
      return this.setState(state => ({
        selected: this.props.groups.map(n => n.id)
      }));
    }

    this.setState({ selected: [] });
  };

  onSelectItem = id => {
    this.setState(state => ({
      selected: xor(this.state.selected, [id])
    }));
  };

  render() {
    const { rowsPerPage, count, page, groups, selected } = this.state;

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
              <TableCell>Название</TableCell>
              <TableCell numeric>Год набора</TableCell>
              <TableCell numeric>Спортстмены</TableCell>
              <TableCell numeric>Тренеры</TableCell>
              <TableCell numeric />
            </TableRow>
          </TableHead>
          <TableBody>
            {groups.map(item => (
              <TableItem
                key={item.id}
                isChecked={isItemChecked(item.id)}
                onSelectRequest={() => this.onSelectItem(item.id)}
                {...item}
              />
            ))}
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
  groups: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TableView;
