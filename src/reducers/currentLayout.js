const currentLayout = (state = null, action) => {
    switch (action.type) {
      case 'SELECT_CURRENT_LAYOUT':
        return action.image
      case 'DELETE_CURRENT_LAYOUT':
        return null
      default:
        return state
    }
  }
  
  export default currentLayout
  