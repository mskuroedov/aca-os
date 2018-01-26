import React from 'react';
import {Grid, Paper} from "material-ui";

const ContactsOfSportsmen = () => (
    <Grid item xs={8} >
        <Paper className="paper paper__info" align={'start'} >
            <Grid container  >
                <Grid item xs={4} >
                    <i className="material-icons">location_on</i>
                    <span>Россия, Казань</span>
                </Grid>
                <Grid item xs={4}>
                    <i className="material-icons">phone_android</i>
                    <span>+7 927 729-92-17</span>
                </Grid>
                <Grid item xs={4} >
                    <i className="material-icons">email</i>
                    <a href="mailto:malishev@yandex.ru">malishev@yandex.ru</a>
                </Grid>
            </Grid>
        </Paper>
    </Grid>
);

export default ContactsOfSportsmen;
