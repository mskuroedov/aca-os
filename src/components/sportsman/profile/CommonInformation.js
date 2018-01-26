import React from 'react';
import {Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "material-ui";

const CommonInformation = () => (
        <Grid item xs={12} className="paper_w_table">
            <Paper className="paper">
                <Table className="table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Дата рождения</TableCell>
                            <TableCell >Год набора</TableCell>
                            <TableCell >Пол</TableCell>
                            <TableCell >Амплуа</TableCell>
                            <TableCell >Этап подготовки</TableCell>
                            <TableCell >Разряд</TableCell>
                            <TableCell >Хват</TableCell>
                            <TableCell >Рост</TableCell>
                            <TableCell >Вес</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>01.10.1995</TableCell>
                            <TableCell>2000</TableCell>
                            <TableCell>Мужской</TableCell>
                            <TableCell>Нападающий</TableCell>
                            <TableCell>Начальный</TableCell>
                            <TableCell>2 юношеский</TableCell>
                            <TableCell>Левый</TableCell>
                            <TableCell>175 см</TableCell>
                            <TableCell>80 кг</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </Grid>
);

export default CommonInformation;
