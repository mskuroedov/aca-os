import React from 'react';
import {Grid, Paper} from "material-ui";

const ParentContacts = () => (
    <Grid item xs={12}>
        <Paper className="paper paper__info" align={'start'} style={{padding:15}}>
            <Grid container  >
                <Grid item xs={1}>
                    <img width="50" height="50" alt=""/>
                </Grid>
                <Grid item xs={5}>
                    <span>+7 927 729-92-17</span>
                </Grid>
                <Grid item xs={3}>
                    <i className="material-icons">phone_android</i>
                    <span>+7 927 729-92-17</span>
                </Grid>
                <Grid item xs={3}>
                    <i className="material-icons">email</i>
                    <a href="mailto:malishev@yandex.ru">malishev@yandex.ru</a>
                </Grid>


            </Grid>

        </Paper>
    </Grid>
);

export default ParentContacts;
