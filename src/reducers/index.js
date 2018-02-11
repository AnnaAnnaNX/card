import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import layouts from './layouts';
import currentLayout from './currentLayout';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  layouts,
  currentLayout
})

export default todoApp
