import React from 'react';
import {Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "material-ui";

const Achievements = () => (
    <Grid item xs={8} className="paper_w_table">
        <Paper className="paper">
            <Table className="table">
                <TableHead>
                    <TableRow>
                        <TableCell >Дата</TableCell>
                        <TableCell >Соревнования</TableCell>
                        <TableCell numeric>Результат</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell style={{borderBottom:0}} className="table_w_icon">
                            21.07.2016
                        </TableCell>
                        <TableCell style={{borderBottom:0}}>
                            Чемпионат мира 2016
                        </TableCell>
                        <TableCell style={{borderBottom:0}} numeric>
                            47
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    </Grid>
);

export default Achievements;
