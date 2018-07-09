import React from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Grid from '@material-ui/core/es/Grid/Grid';
import { statsAmplua } from '../../fixtures/stats';
import { sportsman } from '../../fixtures/sportsman';
import { Tabs, Tab } from '@material-ui/core';
import { history } from '../../routers/AppRouter';
import Common from './content/Common';
import Stats from './content/statistic/StatsPage';

const styles = theme => ({
  select: {
    backgroundColor: 'rgba(36,36,33,0.1)',
    paddingLeft: 17,
    paddingTop: 16,
    paddingBottom: 10,
    paddingRight: 40,
    fontSize: 16,
    color: '#242421',
    '&:after': {
      backgroundColor: '#242421'
    }
  },
  selectIcon: {
    color: '#6D6D6D'
  },
  selectLine: {
    color: 'transparent'
  },
  title: {
    marginBottom: 11,
    fontSize: 20,
    color: ' rgba(36,36,33,0.6);',
    fontFamily: '"BlissPro",sans-serif',
    fontWeight: 'normal'
  },
  root: {
    color: '#00755E',
    fontSize: 1.4,
    fontWeight: 'bold',
    opacity: 1
  },
  rootPrimarySelected: {
    color: '#000'
  },
  appBar: {
    fontSize: 1.4,
    backgroundColor: '#fff',
    fontWeight: 'bold',
    justifyContent: 'center',
    boxShadow: 'none'
  },
  tabs: {
    justifyContent: 'flex-end',
    fontSize: 14
  },
  menuItem: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  button: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: '"BlissPro",sans-serif',
    opacity: '1 !important'
  },
  bc: {
    color: '#000 !important'
  },
  rootTabPrimary: {
    minWidth: 0,
    color: '#00755E',
    opacity: 1
  },
  menuFlexContainer: {
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'start',
      paddingLeft: 16,
      paddingRight: 16
    },
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'center'
    }
  },
  tabScroller: {
    overflowX: 'scroll'
  }
});

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

class GroupPageContent extends React.Component {
  state = {
    tableView: false,
    statsAmplua,
    sportsman,
    selectedAmpluaFilter: 1
  };

  constructor(props) {
    super(props);
  }

  static defaultProps = {
    view: 'common'
  };

  handleChange = (event, value) => {
    history.push(`/groups/${value}`);
  };

  render() {
    const { classes, view } = this.props;

    return view ? (
      <section style={{ backgroundColor: 'white' }}>
        <Grid container>
          <Grid item xs={12}>
            <Tabs
              value={view}
              onChange={this.handleChange}
              className={classes.tabs}
              indicatorColor="primary"
              scrollable={true}
              classes={{
                root: classes.root,
                flexContainer: classes.menuFlexContainer
              }}
              style={{
                backgroundColor: 'white'
              }}
            >
              <Tab
                label="Общее"
                value="common"
                textColor="primary"
                classes={{
                  label: classes.button,
                  labelContainer: classes.button,
                  wrapper: classes.button,
                  selected: classes.bc,
                  root: classes.rootTabPrimary
                }}
              />
              <Tab
                label="Тренировочный план"
                value="training"
                textColor="primary"
                classes={{
                  label: classes.button,
                  labelContainer: classes.button,
                  wrapper: classes.button,
                  selected: classes.bc,
                  root: classes.rootTabPrimary
                }}
              />
              <Tab
                label="Журнал посещения"
                value="journal"
                textColor="primary"
                classes={{
                  label: classes.button,
                  labelContainer: classes.button,
                  wrapper: classes.button,
                  selected: classes.bc,
                  root: classes.rootTabPrimary
                }}
              />
              <Tab
                label="Статистика"
                value="stats"
                textColor="primary"
                classes={{
                  label: classes.button,
                  labelContainer: classes.button,
                  wrapper: classes.button,
                  selected: classes.bc,
                  root: classes.rootTabPrimary
                }}
              />
            </Tabs>
          </Grid>
        </Grid>
        <TabContainer
          style={{ paddingTop: 30 }}
          classes={{
            scroller: classes.tabScroller
          }}
        >
          {view === 'common' && <Common />}
          {view === 'stats' && <Stats />}
        </TabContainer>
      </section>
    ) : (
      <Redirect to={`/groups/common`} />
    );
  }
}

export default withStyles(styles)(GroupPageContent);
