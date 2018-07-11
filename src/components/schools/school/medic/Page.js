import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import { routes } from '../../../../routers/AppRouter';
import Header from '../../../headers/Header';
import Subheader from '../../../headers/Subheader';
import WorkerHeader from './Header';
import WorkerPageContent from './Content';
import Footer from '../../../footer/Footer';

const styles = theme => ({});

class WorkerPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, match } = this.props;
    const staff = true;
    return (
      <div>
        <Header />
        <Subheader
          breadcrumbs={[
            { title: 'Школы', link: '/schools' },
            { title: 'Спортивная школа №43', link: '/schools/1' },
            { title: 'Группа мальчиков 2010 г.р.', link: '/groups' }
          ]}
        />
        <WorkerHeader />
        <WorkerPageContent staff={staff} />
        <Footer />
      </div>
    );
  }
}

WorkerPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WorkerPage);
