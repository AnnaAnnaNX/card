let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
/////////

let nextLayoutId = 1
export const addLayout = (image) => ({
  type: 'ADD_LAYOUT',
  id: nextLayoutId++,
  image
})


export const addCurrentLayout = (image) => ({
  type: 'SELECT_CURRENT_LAYOUT',
  image
})

export const deleteLayout = (image) => ({
  type: 'DELETE_LAYOUT',
  image
})
