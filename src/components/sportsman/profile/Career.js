import React from 'react';
import {Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "material-ui";

const Career = () => (
    <Grid item xs={12} className="paper_w_table">
        <Paper className="paper">
            <Table className="table">
                <TableHead>
                    <TableRow>
                        <TableCell >Период</TableCell>
                        <TableCell >Амплуа</TableCell>
                        <TableCell >Команда</TableCell>
                        <TableCell  numeric>Игры</TableCell>
                        <TableCell  numeric>Выигрыши</TableCell>
                        <TableCell  >Тренер</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell style={{borderBottom:0}}>2010-2017</TableCell>
                        <TableCell style={{borderBottom:0}}>Нападающий</TableCell>
                        <TableCell style={{borderBottom:0}}>АкБарс</TableCell>
                        <TableCell style={{borderBottom:0}} numeric>36</TableCell>
                        <TableCell style={{borderBottom:0}} numeric>14</TableCell>
                        <TableCell style={{borderBottom:0}} ><span className='trainer'>Саяпов Ренат Маратович</span></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    </Grid>
);

export default Career;
