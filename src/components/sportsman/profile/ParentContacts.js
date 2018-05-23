import React from 'react';
import {Grid, Paper} from "material-ui";
import IconButton from "material-ui/es/IconButton/IconButton";
import MoreVertIcon from 'material-ui-icons/MoreVert';


const ParentContacts = (props) => (
    <Grid item xs={12}>
        <Paper className="paper paper__info" align={'start'} style={{padding: 15}}>
            <Grid container spacing={16}>
                <Grid item xs={1}>
                    <img width="50" height="50" alt=""/>
                </Grid>
                <Grid item xs={4}>
                    <a>{props.fio}</a>
                </Grid>
                <Grid item>
                    <span>{props.phone}</span>
                </Grid>
                <Grid item>
                    <a href={`mailto:${props.email}`}>{props.email}</a>
                </Grid>
                <Grid item className="contact_status" style={{marginLeft: 'auto'}}>
                    <span>{props.status}</span>
                </Grid>
                <Grid item style={{marginLeft: 'auto'}}>
                    <IconButton aria-label="Delete">
                        <MoreVertIcon/>
                    </IconButton>
                </Grid>
            </Grid>

        </Paper>
    </Grid>
);

export default ParentContacts;
