import React from 'react';
import { withStyles } from 'material-ui/styles';
import CloseIcon from '@material-ui/icons/Close';

import {
  Icon,
  TextField,
  DialogContent,
  Button,
  DialogActions,
  Dialog,
  DialogTitle,
  FormControl,
  Select,
  InputLabel,
  Typography,
  Input,
  MenuItem,
  IconButton,
  Grid
} from '@material-ui/core';

@withStyles(theme => ({
  formcontrol: {
    display: 'block'
  },
  timeInput: {},
  dialog: {
    minWidth: 420,
    paddingRight: 90
  },
  closeBtn: {
    position: 'absolute',
    top: 6,
    right: 6
  },
  subtitle: {
    fontSize: 16,
    margin: '24px 0 6px 0',
    fontWeight: 600,
    fontFamily: '"BlissPro", "sans-serif"'
  },
  dynamicControl: {
    position: 'relative'
  },
  dynamicControlButtons: {
    top: 8,
    right: -60,
    position: 'absolute'
  },
  cancel: {
    opacity: 0.5,
    cursor: 'pointer'
  },
  addCircle: {
    cursor: 'pointer'
  },
  timesep: {
    fontSize: 16,
    fontWeight: 'normal'
  },
  timeField: {
    marginTop: 10,
    '& > div:before': {
      display: 'none'
    },
    '& > div:after': {
      display: 'none'
    }
  },
  timeInput: {
    height: 48,
    paddingLeft: 8,
    paddingRight: 8,
    'background-color': 'rgba(36, 36, 33, 0.1)'
  },
  label: {
    whiteSpace: 'nowrap'
  }
}))
class ScheduleCreateModal extends React.Component {
  state = {
    days: [
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
      'Воскресенье'
    ]
  };
  render() {
    return (
      <Dialog onClose={this.props.onClose} open={this.props.open}>
        <DialogTitle>
          Добавить событие
          <IconButton
            onClick={this.props.handleClose}
            className={this.props.classes.closeBtn}
            style={{ float: 'right' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent className={this.props.classes.dialog}>
          <FormControl className={this.props.classes.formcontrol}>
            <InputLabel>Расписание</InputLabel>
            <Select
              fullWidth
              value={1}
              input={<Input name="status" id="status-helper" />}
            >
              <MenuItem value={1}>Расписание группы 1</MenuItem>
            </Select>
          </FormControl>
          {this.state.days.map(d => {
            return (
              <div key={d}>
                <Typography className={this.props.classes.subtitle}>
                  {d}
                </Typography>
                <Grid
                  container
                  spacing={16}
                  alignItems="center"
                  className={this.props.classes.dynamicControl}
                >
                  <Grid item>
                    <FormControl className={this.props.classes.timeInput}>
                      <TextField
                        defaultValue="08:00"
                        margin="dense"
                        label=""
                        type="time"
                        fullWidth
                        className={this.props.classes.timeField}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item className={this.props.classes.timesep}>
                    &ndash;
                  </Grid>
                  <Grid item>
                    <FormControl className={this.props.classes.timeInput}>
                      <TextField
                        defaultValue="08:00"
                        margin="dense"
                        label=""
                        type="time"
                        fullWidth
                        className={this.props.classes.timeField}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item style={{ minWidth: 150 }}>
                    <FormControl className={this.props.classes.formcontrol}>
                      <InputLabel className={this.props.classes.label}>
                        Место проведения
                      </InputLabel>
                      <Select
                        fullWidth
                        value={1}
                        input={<Input name="status" id="status-helper" />}
                      >
                        <MenuItem value={1}>Лед</MenuItem>
                        <MenuItem value={2}>Зал</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid
                    item
                    className={this.props.classes.dynamicControlButtons}
                  >
                    <Icon className={this.props.classes.cancel}>cancel</Icon>
                    <Icon
                      className={this.props.classes.addCircle}
                      color="primary"
                    >
                      add_circle
                    </Icon>
                  </Grid>
                </Grid>
              </div>
            );
          })}
          <FormControl
            style={{ marginTop: 24 }}
            className={this.props.classes.formcontrol}
          >
            <InputLabel>Выберите повторение расписания</InputLabel>
            <Select
              fullWidth
              value={1}
              input={<Input name="status" id="status-helper" />}
            >
              <MenuItem value={1} />
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Отмена
          </Button>
          <Button
            onClick={this.props.handleClose}
            variant="raised"
            color="primary"
          >
            Сохранить
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default ScheduleCreateModal;
