import React from 'react';
import SportsmenHeader from './SportsmenHeader';
import SportsmenPageContent from './SportsmenPageContent';
import Header from '../headers/Header';
import Subheader from '../headers/Subheader';
import { sportsman } from '../../fixtures/sportsman';
import { routes } from '../../routers/AppRouter';
import Footer from '../footer/Footer';

class SportsmenPage extends React.Component {
  state = {
    sportsmen: undefined,
    loaded: false
  };

  componentWillMount() {
    const sportsmenId = this.props.match.params.sportsmenId;
    this.setState({ sportsmen: sportsman.find(sportsmen => sportsmen.id == sportsmenId) });
  }

  render() {
    const { sportsmen } = this.state;
    return (
      <div>
        <Header />
        <Subheader
          breadcrumbs={[
            { title: 'Школы', link: routes.schoolsPage() },
            { title: 'Спортивная школа №43', link: routes.schoolPage(1) },
            { title: 'Группа мальчиков 2010 г. р.', link: '/groups' }
          ]}
        />
        <SportsmenHeader {...sportsmen} />
        <SportsmenPageContent {...this.props.match.params} sportsmen={sportsmen} />
        <Footer />
      </div>
    );
  }
}

export default SportsmenPage;
