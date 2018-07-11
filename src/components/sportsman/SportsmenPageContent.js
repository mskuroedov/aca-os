import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import Profile from './profile/Profile';
import Perfomance from './profile/Perfomance';
import { history } from '../../routers/AppRouter';
import Grid from '@material-ui/core/es/Grid/Grid';

function TabContainer(props) {
  return (
    <div
      className="main-section"
      style={{ paddingTop: 24, backgroundColor: '#f6f6f6' }}
    >
      {props.children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};


class SportsmenPageContent extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    view: 'profile'
  };

  handleChange = (event, value) => {
    history.push(`/sportsman/${this.props.sportsmenId}/${value}`);
  };

  render() {
    const { classes, view, sportsmenId, sportsmen } = this.props;
    return (
      <section style={{ backgroundColor: 'white' }}>
        <Grid container>
          <Grid item xs={12}>
            <Tabs
              value={view}
              scrollable={true}
              onChange={this.handleChange}
              className={classes.tabs}
              indicatorColor="primary"
              textColor="primary"
              classes={{
                root: classes.root,
                flexContainer: classes.menuFlexContainer // className, e.g. `OverridesClasses-label-X`
              }}
            >
              <Tab
                label="Профиль"
                value="profile"
                textColor="primary"
                classes={{
                  label: classes.button,
                  selected: classes.bc,
                  root: classes.rootTabPrimary
                }}
              />
              <Tab
                label="Тренировки"
                value="plan"
                textColor="primary"
                classes={{
                  label: classes.button,
                  selected: classes.bc,
                  root: classes.rootTabPrimary
                }}
              />
              <Tab
                label="Журналы"
                value="journal"
                textColor="primary"
                classes={{
                  label: classes.button,
                  selected: classes.bc,
                  root: classes.rootTabPrimary // className, e.g. `OverridesClasses-label-X`
                }}
              />
              <Tab
                label="Спортивные показатели"
                value="perfomance"
                textColor="primary"
                classes={{
                  label: classes.button,
                  selected: classes.bc,
                  root: classes.rootTabPrimary // className, e.g. `OverridesClasses-label-X`
                }}
              />
              <Tab
                label="Медицинские показатели"
                value="medical"
                textColor="primary"
                classes={{
                  label: classes.button,
                  selected: classes.bc,
                  root: classes.rootTabPrimary // className, e.g. `OverridesClasses-label-X`
                }}
              />
            </Tabs>
          </Grid>
        </Grid>
        <TabContainer
          classes={{
            scroller: classes.tabScroller
          }}
          style={{ paddingTop: 30 }}
        >
          {view === 'profile' && <Profile sportsmen={sportsmen} />}
          {view === 'plan' && ''}
          {view === 'journal' && ''}
          {view === 'perfomance' && <Perfomance />}
          {view === 'medical' && ''}
        </TabContainer>
      </section>
    );
  }
}

// SportsmenPageContent.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default SportsmenPageContent;
