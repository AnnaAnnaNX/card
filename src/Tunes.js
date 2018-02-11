import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Check from 'material-ui-icons/Check';
import LocationSearching from 'material-ui-icons/LocationSearching';
import PhotoCamera from 'material-ui-icons/PhotoCamera';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function IconButtons(props) {
  const { classes } = props;
  return (
    <div>
        
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

IconButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconButtons);