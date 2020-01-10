import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import DeleteRounded from '@material-ui/icons/DeleteRounded'
import Header from '../Header/Header'
import Form from '../Form/Form'

const styles = theme => ({
  root: {
    width: '90%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: 'auto'
  },
})


class ToDoList extends Component {


  render() {
    const { classes, toDos, completed, handleCheck } = this.props

    return (
      <>
        <Header />
        <br />
        <List className={classes.root}>
          {
            toDos.map(item => (
              <ListItem key={item} role={undefined} dense button onClick={() => handleCheck(item)}>
                <Checkbox checked={completed.indexOf(item) != -1} tabIndex={-1} disableRipple />
                <ListItemText primary={item} />
              </ListItem>

            ))
          }
        </List>
      </>
    )
  }
}

ToDoList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ToDoList)