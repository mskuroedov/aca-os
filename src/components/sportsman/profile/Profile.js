import React from 'react';
import { Grid } from 'material-ui';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import CommonInformation from './CommonInformation';
import ContactsOfSportsmen from './ContactsOfSportsmen';
import ParentContacts from './ParentContacts';
import Career from './Career';
import Rewards from './Rewards';
import Achievements from './Achievements';
import TableTitle from './TableTitle';

class Profile extends React.Component {
  render() {
    const { sportsmen } = this.props;
    return (
      <div>
        <Grid container spacing={16}>
          <TableTitle title="Общая инфомация" />
          <CommonInformation sportsman={sportsmen.common} />

          <TableTitle title="Контакты спортсмена" />
          <ContactsOfSportsmen {...sportsmen.contacts} />

          <TableTitle title="Контакты родителей или законных представителей" />
          {sportsmen.parents.map(item => (
            <ParentContacts key={item.id} {...item} />
          ))}

          <TableTitle title="Спортивная карьера" />
          <Career />

          <TableTitle title="Награды и достижения" />
          <Rewards />

          <TableTitle title="Образование" />
          <Achievements />
        </Grid>
      </div>
    );
  }
}

export default Profile;
