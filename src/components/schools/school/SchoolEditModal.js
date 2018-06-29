import React from 'react'
import { withStyles } from 'material-ui/styles'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'

@withStyles(theme => ({
}))
class SchoolEditModal extends React.Component {
  render() {
    return <Dialog onClose={ this.props.onClose } open={ this.props.open }>
      <DialogTitle>Добавить школу</DialogTitle>
      <DialogActions>
        <Button onClick={ this.props.handleClose } color='primary'>
          Отмена
        </Button>
        <Button onClick={ this.props.handleClose } variant='raised' color='primary'>
          Сохранить
        </Button>
      </DialogActions>
    </Dialog>
  }
}

export default SchoolEditModal
