import React from 'react';
import {Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "material-ui";

const CommonInformation = (props) => (
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
                            <TableCell>{props.date_of_birth}</TableCell>
                            <TableCell>{props.recruitment_year}</TableCell>
                            <TableCell>{props.gender}</TableCell>
                            <TableCell>{props.role}</TableCell>
                            <TableCell>{props.stage_of_preparation}</TableCell>
                            <TableCell>{props.rank}</TableCell>
                            <TableCell>{props.hold}</TableCell>
                            <TableCell>{props.growth}</TableCell>
                            <TableCell>{props.weight}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </Grid>
);

export default CommonInformation;
