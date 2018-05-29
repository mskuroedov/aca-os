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
        fontFamily: '"BlissPro",sans-serif',
    },

});


class Profile extends React.Component {
    render() {
        const {sportsmen} = this.props;
        return (
            <div>
                <Grid container spacing={16}
                >
                    {/*<Button variant="raised" color="primary" className={this.props.classes.button}>*/}
                        {/*редактировать информацию*/}
                    {/*</Button>*/}
                    <TableTitle title="Общая инфомация"/>
                    <CommonInformation {...sportsmen.common} />
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

//<TableTitle title="Контакты спортсмена"/>
//<ContactsOfSportsmen {...sportsmen.contacts}/>
//<TableTitle title="Контакты родителей или законных представителей"/>
//{
 //   sportsmen.parents.map((item) => (
   //     <ParentContacts key={item.id} {...item}/>
    //))
//}