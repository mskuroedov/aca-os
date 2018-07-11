import React from 'react';
import {Grid, Paper} from "material-ui";
import IconButton from "material-ui/es/IconButton/IconButton";
import MoreVertIcon from 'material-ui-icons/MoreVert';

const ContactsOfSportsmen = (props) => (
    <Grid item xs={9}>
        <Paper className="paper paper__info sportsmen_contact" align={'start'}>
            <Grid container spacing={40}>
                <Grid item style={{marginLeft: 15}}>
                    <i className="material-icons">location_on</i>
                    <span>{props.location}</span>
                </Grid>
                <Grid item style={{marginLeft: 15}}>
                    <i className="material-icons">phone_android</i>
                    <span>{props.phone}</span>
                </Grid>
                <Grid item style={{marginLeft: 15}}>
                    <i className="material-icons" style={{marginTop: 4}}>email</i>
                    <a href={`mailto:${props.email}`}>{props.email}</a>
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

export default ContactsOfSportsmen;
