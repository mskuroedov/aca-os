import React from 'react';
import {Grid} from "material-ui";

const TableTitle = (props) => (

    < Grid
        item
        xs={12} className="table__title">
        <h3 >{props.title}</h3>
    </Grid>
);
export default TableTitle;
