import React from 'react';
import {Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "material-ui";

const Rewards = () => (
    <Grid item xs={8} className="paper_w_table">
        <Paper className="paper">
            <Table className="table">
                <TableHead>
                    <TableRow>
                        <TableCell className="table_w_icon"></TableCell>
                        <TableCell >Название</TableCell>
                        <TableCell numeric>Дата</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell className="table_w_icon">
                            <i className="material-icons">star_rate</i>
                        </TableCell>
                        <TableCell>
                            Диплом за 1 место в сезоне 2016
                        </TableCell>
                        <TableCell numeric>
                            21.07.2016
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    </Grid>
);

export default Rewards;
