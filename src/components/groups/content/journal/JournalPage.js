import React from 'react';
import { withStyles } from '@material-ui/core';
import Attendance from './Attendance';

class JournalPage extends React.Component {
  render() {
    return <Attendance />;
  }
}

export default withStyles(theme => ({}))(JournalPage);
