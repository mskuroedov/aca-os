import React from 'react';
import {Grid} from "material-ui";
import CommonInformation from "./CommonInformation";
import TableTitle from "./TableTitle";


const SportsmenPageProfile = () => (
    <div style={{ padding: 168}}>
        <Grid container
              justify={'center'}
              spacing={40}
        >
            <TableTitle />
            <CommonInformation/>
        </Grid>
    </div>
);

export default SportsmenPageProfile;
