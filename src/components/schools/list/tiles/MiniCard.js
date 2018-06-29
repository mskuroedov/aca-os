import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { withStyles } from 'material-ui/styles'
import { Link } from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from 'material-ui/es/IconButton/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Icon from '@material-ui/core/Icon'
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from 'material-ui'

@withStyles(theme => ({
  paper: {
    position: 'relative',
    padding: '1em 40px 1.25em .5em'
  },
  infoVal: {
      color: 'rgba(36, 36, 33, 1)',
      fontSize: 15,
      marginTop: 5,
      fontWeight:'bold',
      lineHeight: 1.2,
  },
  menuBtn: {
    top: '8px',
    right: '6px',
    position: 'absolute'
  },
  link: {
    borderBottom: '1px solid rgba(36,36,33,0.2)',
    color: 'rgba(36,36,33,1)',
    '&:hover': {
      color: 'rgba(0,118,94,1)'
    }
  },
  visIcon: {
    display: 'inline-block',
    verticalAlign: 'bottom',
    fontSize: '20px',
    marginLeft: '0.5em',
    opacity: 0.54,
    position: 'relative',
    bottom: -3
  }
}))
class MiniCard extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    anchorEl: null
  }

  static propTypes = {
    school: PropTypes.object.isRequired
  }

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    })
  }

  handleClose = () => {
    this.setState({
      anchorEl: null
    })
  }

  render() {
    const { school, classes } = this.props
    const { anchorEl } = this.state

    return <Paper className={ classnames('paper', classes.paper) }>
      <Table className='minicard'>
        <TableHead>
          <TableRow>
            <TableCell style={{ width: '15em' }}></TableCell>
            <TableCell>Директор</TableCell>
            <TableCell style={{ width: '12em' }}>Город</TableCell>
            <TableCell style={{ width: '6em' }}>Спортсмены</TableCell>
            <TableCell style={{ width: '6em' }}>Тренеры</TableCell>
            <TableCell style={{ width: '6em' }}>Группы</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={ classes.infoVal }>
              <Link to='/schools/1' className={ classes.link }>
                { school.title }
              </Link>
              <Icon className={classes.visIcon}>visibility</Icon>
            </TableCell>
            <TableCell className={ classes.infoVal }>
              <Link to='#' className={ classes.link }>
                { school.director.secondname } {''}
                { school.director.firstname } {''}
                { school.director.middlename }
              </Link>
            </TableCell>
            <TableCell className={ classes.infoVal }>Набережные челны</TableCell>
            <TableCell className={ classes.infoVal }>{ school.sportsman_count }</TableCell>
            <TableCell className={ classes.infoVal }>{ school.trainers_count }</TableCell>
            <TableCell className={ classes.infoVal }>{ school.groups_count }</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <IconButton
        className={ classes.menuBtn }
        aria-owns={ anchorEl ? 'menu' : null }
        aria-haspopup='true'
        onClick={ this.handleClick }
      >
        <MoreVertIcon/>
      </IconButton>
      <Menu
        id='menu'
        anchorEl={ anchorEl }
        open={ Boolean(anchorEl) }
        onClose={ this.handleClose }
      >
        <MenuItem onClick={ this.handleClose }>Редактировать</MenuItem>
        <MenuItem onClick={ this.handleClose }>Удалить</MenuItem>
      </Menu>
    </Paper>
  }
}

export default MiniCard
