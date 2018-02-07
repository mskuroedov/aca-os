import React from 'react';
import {Grid} from "material-ui";
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import CommonInformation from "./CommonInformation";
import ContactsOfSportsmen from "./ContactsOfSportsmen";
import ParentContacts from "./ParentContacts";
import Career from "./Career";
import Rewards from "./Rewards";
import Achievements from "./Achievements";
import TableTitle from "./TableTitle";


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        fontSize: 13,
        marginLeft: 'auto',
        marginRight: 20,
        fontFamily: 'BlissPro',
    },

});


class Profile extends React.Component {
    render() {
        return (
            <div>
                <Grid container
                >
                    <Button raised color="primary" className={this.props.classes.button}>
                        редактировать информацию
                    </Button>
                    <TableTitle title="Общая инфомация"/>
                    <CommonInformation/>
                    <TableTitle title="Контакты спортсмена"/>
                    <ContactsOfSportsmen/>
                    <TableTitle title="Контакты родителей или законных представителей"/>
                    <ParentContacts/>
                    <ParentContacts/>
                    <TableTitle title="Спортивная карьера"/>
                    <Career/>
                    <TableTitle title="Награды и достижения"/>
                    <Rewards/>
                    <TableTitle title="Образование"/>
                    <Achievements/>
                </Grid>
            </div>
        )
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired
};


export default withStyles(styles)(Profile);

