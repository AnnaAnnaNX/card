import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Check from 'material-ui-icons/Check';
import LocationSearching from 'material-ui-icons/LocationSearching';
import PhotoCamera from 'material-ui-icons/PhotoCamera';

import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { connect } from 'react-redux'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class IconButtons extends Component {
  state = {
    age: '',
    name: 'hai',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render(){
    const { classes, layouts } = this.props;
    console.log('layouts');
    console.log(layouts);
    return (
      <div>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="list-layouts">List layouts</InputLabel>
            <Select
              value={this.state.age}
              onChange={this.handleChange}
              inputProps={{
                name: 'age',
                id: 'age-simple',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {layouts.map((layout) => (
                <MenuItem value={ layout.image }>{ layout.image }</MenuItem>
              ))}
            </Select>
          </FormControl>
          
        <IconButton color="secondary" className={classes.button} aria-label="Add an alarm">
          <LocationSearching />
        </IconButton>
        <IconButton color="primary" className={classes.button} aria-label="Add to shopping cart">
          {/* <AddShoppingCartIcon /> */}
        </IconButton>
        <IconButton className={classes.button} aria-label="Delete" color="primary">
          <DeleteIcon />
        </IconButton>
        <IconButton className={classes.button} aria-label="Delete">
          <Check />
        </IconButton>
        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
        <label htmlFor="icon-button-file">
          <IconButton color="primary" className={classes.button} component="span">
            <PhotoCamera />
          </IconButton>
        </label>
      </div>
    );
  }
}

IconButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    // user: state.user,
    // page: state.page
    layouts: state.layouts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // pageActions: bindActionCreators(pageActions, dispatch)
    
    // add: image => {
    //   dispatch(addLayout(image))
    // }
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(IconButtons))