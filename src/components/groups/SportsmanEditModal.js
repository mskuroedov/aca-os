import React from 'react';
import { withStyles } from 'material-ui/styles';
import FileUpload from 'components/common/FileUpload';
import CloseIcon from '@material-ui/icons/Close';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
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
  root: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  },
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
class SchoolEditModal extends React.Component {
  state = {
    value: 'female'
  };

  static defaultProps = {
    title: 'спортсмена'
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes, title } = this.props;
    return (
      <Dialog onClose={this.props.onClose} open={this.props.open}>
        <DialogTitle>
          Добавить {title}
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
            <TextField
              margin="dense"
              label="Фамилия"
              type="text"
              fullWidth
              value=""
            />
          </FormControl>
          <FormControl className={this.props.classes.formcontrol}>
            <TextField
              margin="dense"
              label="Имя"
              type="text"
              fullWidth
              value=""
            />
          </FormControl>
          <FormControl className={this.props.classes.formcontrol}>
            <TextField
              margin="dense"
              label="Отчество"
              type="text"
              fullWidth
              value=""
            />
          </FormControl>
          <Typography className={this.props.classes.subtitle}>Пол</Typography>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="male"
              control={<Radio color="primary" />}
              label="Мужской"
            />
            <FormControlLabel
              value="female"
              control={<Radio color="primary" />}
              label="Женский"
            />
          </RadioGroup>
          <FormControl className={this.props.classes.formcontrol}>
            <TextField
              margin="dense"
              label="Страна/населенный пункт"
              type="text"
              fullWidth
              value=""
            />
          </FormControl>
          <FormControl className={this.props.classes.formcontrol}>
            <TextField
              margin="dense"
              label="Телефон"
              type="text"
              fullWidth
              value=""
            />
          </FormControl>
          <FormControl className={this.props.classes.formcontrol}>
            <TextField
              margin="dense"
              label="Email"
              type="text"
              fullWidth
              value=""
            />
          </FormControl>
          <Typography className={this.props.classes.subtitle}>
            Добавить фото
          </Typography>
          <FileUpload />
          <Typography className={this.props.classes.subtitle}>
            Родители спортсмена
          </Typography>
          <FormControl className={this.props.classes.formcontrol}>
            <Grid container className={this.props.classes.dynamicControl}>
              <Grid className={this.props.classes.dynamicControlForm}>
                <FormControl className={this.props.classes.formcontrol}>
                  <TextField
                    margin="dense"
                    label="Фамилия"
                    type="text"
                    fullWidth
                    value=""
                  />
                </FormControl>
                <FormControl className={this.props.classes.formcontrol}>
                  <TextField
                    margin="dense"
                    label="Имя"
                    type="text"
                    fullWidth
                    value=""
                  />
                </FormControl>
                <FormControl className={this.props.classes.formcontrol}>
                  <TextField
                    margin="dense"
                    label="Отчество"
                    type="text"
                    fullWidth
                    value=""
                  />
                </FormControl>
                <FormControl className={this.props.classes.formcontrol}>
                  <TextField
                    margin="dense"
                    label="Дата рождения"
                    type="date"
                    fullWidth
                    defaultValue="0000-00-00"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </FormControl>
                <Typography className={this.props.classes.subtitle}>
                  Пол
                </Typography>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  className={classes.group}
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio color="primary" />}
                    label="Мужской"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio color="primary" />}
                    label="Женский"
                  />
                </RadioGroup>
                <FormControl className={this.props.classes.formcontrol}>
                  <TextField
                    margin="dense"
                    label="Страна/населенный пункт"
                    type="text"
                    fullWidth
                    value=""
                  />
                </FormControl>
                <FormControl className={this.props.classes.formcontrol}>
                  <TextField
                    margin="dense"
                    label="Телефон"
                    type="text"
                    fullWidth
                    value=""
                  />
                </FormControl>
                <FormControl className={this.props.classes.formcontrol}>
                  <TextField
                    margin="dense"
                    label="Email"
                    type="text"
                    fullWidth
                    value=""
                  />
                </FormControl>
                <Typography className={this.props.classes.subtitle}>
                  Добавить фото
                </Typography>
                <FileUpload />
              </Grid>
              <Grid className={this.props.classes.dynamicControlButtons}>
                <Icon className={this.props.classes.cancel}>cancel</Icon>
                <Icon className={this.props.classes.addCircle} color="primary">
                  add_circle
                </Icon>
              </Grid>
            </Grid>
          </FormControl>
          <Typography className={this.props.classes.subtitle}>
            Спортивная карьера
          </Typography>
          <FormControl className={this.props.classes.formcontrol}>
            <TextField
              margin="dense"
              label="Год начала"
              type="text"
              fullWidth
              value=""
            />
          </FormControl>
          <FormControl className={this.props.classes.formcontrol}>
            <TextField
              margin="dense"
              label="Год окончания"
              type="text"
              fullWidth
              value=""
            />
          </FormControl>
          <FormControl className={this.props.classes.formcontrol}>
            <TextField
              margin="dense"
              label="Вид спорта"
              type="text"
              fullWidth
              value=""
            />
          </FormControl>
          <FormControl className={this.props.classes.formcontrol}>
            <TextField
              margin="dense"
              label="Команда"
              type="text"
              fullWidth
              value=""
            />
          </FormControl>
          <FormControl className={this.props.classes.formcontrol}>
            <TextField
              margin="dense"
              label="Игровой номер"
              type="text"
              fullWidth
              value=""
            />
          </FormControl>
          <FormControl className={this.props.classes.formcontrol}>
            <InputLabel>Амплуа</InputLabel>
            <Select fullWidth value="" />
          </FormControl>
          <FormControl className={this.props.classes.formcontrol}>
            <InputLabel>Спортивный разряд</InputLabel>
            <Select fullWidth value="" />
          </FormControl>
          <Typography className={this.props.classes.subtitle}>
            Награды и звания
          </Typography>
          <FormControl className={this.props.classes.formcontrol}>
            <TextField
              margin="dense"
              label="Дата"
              type="date"
              fullWidth
              defaultValue="0000-00-00"
              InputLabelProps={{
                shrink: true
              }}
            />
          </FormControl>
          <FormControl className={this.props.classes.formcontrol}>
            <TextField
              margin="dense"
              label="Название"
              type="text"
              fullWidth
              value=""
            />
          </FormControl>
          <Typography className={this.props.classes.subtitle}>
            Образование
          </Typography>
          <FormControl className={this.props.classes.formcontrol}>
            <TextField
              margin="dense"
              label="Дата"
              type="date"
              fullWidth
              defaultValue="0000-00-00"
              InputLabelProps={{
                shrink: true
              }}
            />
          </FormControl>
          <FormControl className={this.props.classes.formcontrol}>
            <TextField
              margin="dense"
              label="Название"
              type="text"
              fullWidth
              value=""
            />
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

export default SchoolEditModal;
