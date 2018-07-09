import React from 'react';
import { withStyles } from 'material-ui/styles';
import FileUpload from '../../common/FileUpload';
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
  dynamicControlForm: {
    flex: 1
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
  }
}))
class ScheduleCreateModal extends React.Component {
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
          <Typography className={this.props.classes.subtitle}>
            Понедельник
          </Typography>
          <FormControl className={this.props.classes.formcontrol}>
            <Grid container className={this.props.classes.dynamicControl}>
              <Grid className={this.props.classes.dynamicControlForm}>
                <Select
                  fullWidth
                  value={1}
                  input={<Input name="head" id="head-helper" />}
                >
                  <MenuItem value={1}>Красильников Пётр Михайлович</MenuItem>
                </Select>
              </Grid>
              <Grid className={this.props.classes.dynamicControlButtons}>
                <Icon className={this.props.classes.cancel}>cancel</Icon>
                <Icon className={this.props.classes.addCircle} color="primary">
                  add_circle
                </Icon>
              </Grid>
            </Grid>
          </FormControl>
          <FormControl className={this.props.classes.formcontrol}>
            <TextField
              margin="dense"
              label="Фамилия руководителя"
              type="text"
              fullWidth
            />
          </FormControl>
          <FormControl className={this.props.classes.formcontrol}>
            <TextField
              margin="dense"
              label="Имя руководителя"
              type="text"
              fullWidth
            />
          </FormControl>
          <FormControl className={this.props.classes.formcontrol}>
            <TextField
              margin="dense"
              label="Отчество руководителя"
              type="text"
              fullWidth
            />
          </FormControl>
          <Typography className={this.props.classes.subtitle}>
            Добавить фото руководителя
          </Typography>
          <FileUpload />
          <FormControl className={this.props.classes.formcontrol}>
            <TextField
              margin="dense"
              label="Режим работы"
              type="text"
              fullWidth
            />
          </FormControl>
          <Typography className={this.props.classes.subtitle}>
            Реквизиты
          </Typography>
          <FormControl className={this.props.classes.formcontrol}>
            <TextField
              margin="dense"
              label="Полное нзвание школы"
              type="text"
              fullWidth
            />
          </FormControl>
          <FormControl className={this.props.classes.formcontrol}>
            <TextField
              margin="dense"
              label="Юридический адрес"
              type="text"
              fullWidth
            />
          </FormControl>
          <FormControl className={this.props.classes.formcontrol}>
            <TextField margin="dense" label="ИНН" type="text" fullWidth />
          </FormControl>
          <FormControl className={this.props.classes.formcontrol}>
            <TextField margin="dense" label="ОГРН" type="text" fullWidth />
          </FormControl>
          <Typography className={this.props.classes.subtitle}>
            Группы
          </Typography>
          <FormControl className={this.props.classes.formcontrol}>
            <Grid container className={this.props.classes.dynamicControl}>
              <Grid className={this.props.classes.dynamicControlForm}>
                <InputLabel>Выберите группу</InputLabel>
                <Select
                  fullWidth
                  value={1}
                  input={<Input name="group" id="group-helper" />}
                >
                  <MenuItem value={1}>Группа 2012 г. р.</MenuItem>
                </Select>
              </Grid>
              <Grid className={this.props.classes.dynamicControlButtons}>
                <Icon className={this.props.classes.cancel}>cancel</Icon>
                <Icon className={this.props.classes.addCircle} color="primary">
                  add_circle
                </Icon>
              </Grid>
            </Grid>
          </FormControl>
          <Typography className={this.props.classes.subtitle}>Залы</Typography>
          <FormControl className={this.props.classes.formcontrol}>
            <InputLabel>Выберите зал</InputLabel>
            <Select fullWidth value="" />
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
