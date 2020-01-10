import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { FormControl } from '@material-ui/core';


const styles = theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  formDiv: {
    marginLeft: 100,
    marginTop: 60
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    margin: 'auto'
  },
  buttonDiv: {
    margin: 'auto',
    maxWidth: 50
  }

})


class Form extends Component {

  render() {
    const { handleAddToDo, classes, item, onItemChange } = this.props

    return (
      <>
        <div className={classes.formDiv}>
          {/* Textfield */}
          <TextField
            id="item"
            rowsMax="3"
            value={item}
            className={classes.textField}
            margin="normal"
            placeholder="To Do item"
            variant="outlined"
            onChange={onItemChange}
          />
          {/* End textfield */}
        </div >



        <div className={classes.buttonDiv}>
          <Fab color="primary" aria-label="Add" className={classes.fab} onClick={() => handleAddToDo(item)}>
            <AddIcon />
          </Fab>
        </div>

      </>

    )
  }
}




export default withStyles(styles)(Form)