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
                            <TableCell style={{borderBottom:0}}>{props.date_of_birth}</TableCell>
                            <TableCell style={{borderBottom:0}}>{props.recruitment_year}</TableCell>
                            <TableCell style={{borderBottom:0}}>{props.gender}</TableCell>
                            <TableCell style={{borderBottom:0}}>{props.role}</TableCell>
                            <TableCell style={{borderBottom:0}}>{props.stage_of_preparation}</TableCell>
                            <TableCell style={{borderBottom:0}}>{props.rank}</TableCell>
                            <TableCell style={{borderBottom:0}}>{props.hold}</TableCell>
                            <TableCell style={{borderBottom:0}}>{props.growth}</TableCell>
                            <TableCell style={{borderBottom:0}}>{props.weight}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </Grid>
);

export default CommonInformation;
