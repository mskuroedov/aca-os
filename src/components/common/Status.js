import React from 'react';
import { withStyles } from 'material-ui/styles';
import Icon from '@material-ui/core/Icon';

@withStyles(theme => ({
  visIcon: {
    display: 'inline-block',
    fontSize: '20px',
    marginLeft: '0.5em',
    opacity: 0.54,
    verticalAlign: 'middle'
  }
}))
class Status extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return <Icon className={classes.visIcon}>visibility</Icon>;
  }
}

export default Status;
