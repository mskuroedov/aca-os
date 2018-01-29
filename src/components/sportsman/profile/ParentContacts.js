import React from 'react';
import {Grid, Paper} from "material-ui";
import IconButton from "material-ui/es/IconButton/IconButton";
import MoreVertIcon from 'material-ui-icons/MoreVert';


const ParentContacts = () => (
    <Grid item xs={12}>
        <Paper className="paper paper__info" align={'start'} style={{padding: 15}}>
            <Grid container>
                <Grid item xs={1}>
                    <img width="50" height="50" alt=""/>
                </Grid>
                <Grid item xs={4}>
                    <a>Леденев Александр Николаевич</a>
                </Grid>
                <Grid item>
                    <span>+7 927 729-92-17</span>
                </Grid>
                <Grid item>
                    <a href="mailto:malishev@yandex.ru">malishev@yandex.ru</a>
                </Grid>
                <Grid item  className="contact_status" style={{marginLeft: 'auto'}}>
                    <span>Активный</span>
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
