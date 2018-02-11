import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import StarBorderIcon from 'material-ui-icons/StarBorder';
import { connect } from 'react-redux'
import { addLayout } from './actions'

import pic1 from './library_pictures/pic1.jpg'
import pic2 from './library_pictures/pic2.jpg'
import pic3 from './library_pictures/pic3.jpg'
import pic4 from './library_pictures/pic4.jpg'
import pic5 from './library_pictures/pic5.jpg'
import pic6 from './library_pictures/pic6.jpg'
import pic7 from './library_pictures/pic7.jpg'
import pic8 from './library_pictures/pic8.jpg'
import pic9 from './library_pictures/pic9.jpg'



const tileData = [
  {
    img: pic1,
    title: 'Image1',
    author: 'author1'
  },
  {
    img: pic2,
    title: 'Image2',
    author: 'author2'
  },
  {
    img: pic3,
    title: 'Image3',
    author: 'author3'
  },
  {
    img: pic4,
    title: 'Image4',
    author: 'author4'
  },
  {
    img: pic5,
    title: 'Image5',
    author: 'author5'
  },
  {
    img: pic6,
    title: 'Image6',
    author: 'author6'
  },
  {
    img: pic7,
    title: 'Image7',
    author: 'author7'
  },
  {
    img: pic8,
    title: 'Image8',
    author: 'author8'
  },
  {
    img: pic9,
    title: 'Image9',
    author: 'author9'
  }
];

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
});

class Pictures extends Component {
  render(){
    const { classes, add } = this.props;

    function f1(id) {console.log(id);
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      var img = document.getElementById(id);
      ctx.drawImage(img, 90, 130, 50, 60, 10, 10, 50, 60);
    
      //dispatch(addLayout(id))
      add(id)
    }

    return (
      <div className={classes.root}>
        <GridList cellHeight={200} spacing={1} className={classes.gridList}>
          {tileData.map( (tile, index) => (
            <GridListTile key={tile.img} cols={2} rows={2}>
              <img src={tile.img} alt={tile.title} id={ index } />
              <GridListTileBar
                title={tile.title}
                titlePosition="top"
                actionIcon={
                  <IconButton className={classes.icon} onClick={ () => f1(index) } >
                    <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
                className={classes.titleBar}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

// Pictures.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Pictures);



function mapStateToProps(state) {
  return {
    // user: state.user,
    // page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // pageActions: bindActionCreators(pageActions, dispatch)
    
    add: image => {
      dispatch(addLayout(image))
    }
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Pictures))