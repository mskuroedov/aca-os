import React from 'react';
import {Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "material-ui";

const CommonInformation = () => (
    <Grid container spacing={24}>
        <Grid item xs={12}>
            <Paper>
                <Table className="table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Дата рождения</TableCell>
                            <TableCell numeric>Год набора</TableCell>
                            <TableCell numeric>Пол</TableCell>
                            <TableCell numeric>Амплуа</TableCell>
                            <TableCell numeric>Этап подготовки</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key='profile-info'>
                            <TableCell>Test</TableCell>
                            <TableCell>Test</TableCell>
                            <TableCell>Test</TableCell>
                            <TableCell>Test</TableCell>
                            <TableCell>Test</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </Grid>
    </Grid>
);

export default CommonInformation;
