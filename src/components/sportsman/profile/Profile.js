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


class SportsmenPageProfile extends React.Component {
    constructor(props) {
        super(props);
        this.titles = ['Общая инфомация', 'Контакты спортсмена', 'Контакты родителей или законных представителей', 'Спортивная карьера', 'Награды и достижения', 'Образование']
    }

    render() {
        return (
                <div >
                    <Grid container
                    >
                        <Button raised color="primary" className={this.props.classes.button}>
                            редактировать информацию
                        </Button>
                        <TableTitle title={this.titles[0]}/>
                        <CommonInformation/>
                        <TableTitle title={this.titles[1]}/>
                        <ContactsOfSportsmen/>
                        <TableTitle title={this.titles[2]}/>
                        <ParentContacts/>
                        <ParentContacts/>
                        <TableTitle title={this.titles[3]}/>
                        <Career/>
                        <TableTitle title={this.titles[4]}/>
                        <Rewards/>
                        <TableTitle title={this.titles[5]}/>
                        <Achievements/>
                    </Grid>
                </div>
        )
    }
}

SportsmenPageProfile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SportsmenPageProfile);

