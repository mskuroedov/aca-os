import React from "react";
import { withStyles } from "material-ui/styles";
import FileUpload from "../../../common/FileUpload";
import CloseIcon from "@material-ui/icons/Close";

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
} from "@material-ui/core";

@withStyles(theme => ({
  formcontrol: {
    display: "block"
  },
  dialog: {
    minWidth: 420,
    paddingRight: 90
  },
  closeBtn: {
    position: "absolute",
    top: 6,
    right: 6
  },
  subtitle: {
    fontSize: 16,
    margin: "24px 0 6px 0",
    fontWeight: 600,
    fontFamily: '"BlissPro", "sans-serif"'
  },
  dynamicControl: {
    position: "relative"
  },
  dynamicControlForm: {
    flex: 1
  },
  dynamicControlButtons: {
    top: 8,
    right: -60,
    position: "absolute"
  },
  cancel: {
    opacity: 0.5,
    cursor: "pointer"
  },
  addCircle: {
    cursor: "pointer"
  }
}))
class SchoolEditModal extends React.Component {
  render() {
    return (
      <Dialog onClose={this.props.onClose} open={this.props.open}>
        <DialogTitle>
          Добавить группу
          <IconButton
            onClick={this.props.handleClose}
            className={this.props.classes.closeBtn}
            style={{ float: "right" }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent className={this.props.classes.dialog}>
          <FormControl className={this.props.classes.formcontrol}>
            <TextField
              margin="dense"
              label="Название группы"
              type="text"
              fullWidth
              value="Группа 2012 г.р."
            />
          </FormControl>
          <FormControl className={this.props.classes.formcontrol}>
            <InputLabel>Этап подготовки</InputLabel>
            <Select
              fullWidth
              value=""
              input={<Input name="stage" id="stage-helper" />}
            />
          </FormControl>
          <FormControl className={this.props.classes.formcontrol}>
            <InputLabel>Год набора группы</InputLabel>
            <Select
              fullWidth
              value=""
              input={<Input name="year" id="year-helper" />}
            />
          </FormControl>
          <Typography className={this.props.classes.subtitle}>
            Тренеры
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
          <Typography className={this.props.classes.subtitle}>
            Спортсмены
          </Typography>
          <FormControl className={this.props.classes.formcontrol}>
            <InputLabel>Выберите спортсмена</InputLabel>
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

export default SchoolEditModal;
