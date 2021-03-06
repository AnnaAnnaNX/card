const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_LAYOUT':
        return [
          ...state,
          {
            image: action.image,
            text: action.text,
            editing: false
          }
        ]
      case 'DELETE_LAYOUT':
      return state.filter(layout =>
        {return layout.image != action.image} 
      )
      case 'SELECT_LAYOUT':
        return state.map(layout =>
          (layout.image === action.image) 
            ? {...layout, editing: true}
            : layout
        )
      default:
        return state
    }
  }
  
  export default todos
  