import React from 'react';
import {Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "material-ui";

const Career = () => (
    <Grid item xs={8} className="paper_w_table">
        <Paper className="paper">
            <Table className="table">
                <TableHead>
                    <TableRow>
                        <TableCell >Вид спорта</TableCell>
                        <TableCell >Игровой номер</TableCell>
                        <TableCell >Амплуа</TableCell>
                        <TableCell  >Команда</TableCell>
                        <TableCell  numeric>Спортивный разряд</TableCell>
                        {/*<TableCell  >Тренер</TableCell>*/}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell style={{borderBottom:0}}>Хоккей</TableCell>
                        <TableCell style={{borderBottom:0}}>13</TableCell>
                        <TableCell style={{borderBottom:0}}>Нападающий</TableCell>
                        <TableCell style={{borderBottom:0}}>Ак Барс</TableCell>
                        <TableCell style={{borderBottom:0}} numeric>2</TableCell>
                        {/*<TableCell style={{borderBottom:0}} ><span className='trainer'>Саяпов Ренат Маратович</span></TableCell>*/}
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    </Grid>
);

export default Career;
