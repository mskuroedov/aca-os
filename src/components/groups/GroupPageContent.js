import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import Select from "material-ui/es/Select/Select";
import MenuItem from "material-ui/es/Menu/MenuItem";
import {statsAmplua} from "../../fixtures/stats";
import {sportsman} from "../../fixtures/sportsman";
import Typography from "@material-ui/core/es/Typography/Typography";
import TilesView from "../schools/school/sportsman/tiles/TilesView";
import TrainerView from "./TrainerView";
import styles from '../styles'

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
                label="Тренировки"
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
                label="Журналы"
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
          {view === 'journal' && <Journal />}
        </TabContainer>
      </section>
    ) : (
      <Redirect to={`/groups/common`} />
    );
  }
}

export default withStyles(styles)(GroupPageContent);
