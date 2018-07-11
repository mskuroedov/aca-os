import React from 'react';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import { Avatar, IconButton, Grid, Paper } from '@material-ui/core';
import PaperMenu from './PaperMenu';

const ParentContacts = props => (
  <Grid item xs={12} style={{ marginBottom: 16 }}>
    <Paper
      className="Paper"
      align={'start'}
      style={{ padding: 15, marg: 16, position: 'relative' }}
    >
      <Grid container spacing={16} alignItems="center">
        <Grid item>
          <Avatar
            alt="Adelle Charles"
            src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
            style={{
              width: 56,
              height: 56
            }}
          />
        </Grid>
        <Grid item lg={4}>
          <a href="#">{props.fio}</a>
        </Grid>
        <Grid item xs={12} lg={3}>
          <span>{props.phone}</span>
        </Grid>
        <Grid item xs={12} lg={3}>
          <a href={`mailto:${props.email}`}>{props.email}</a>
        </Grid>
        <PaperMenu />
      </Grid>
    </Paper>
  </Grid>
);

export default ParentContacts;
