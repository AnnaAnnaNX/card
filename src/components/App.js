import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import AddLayout from '../containers/AddLayout'
import VisibleTodoList from '../containers/VisibleTodoList'
import FullWidthGrid from '../Structure';
import SimpleAppBar from '../TopHeader';

const App = () => (
  <div>
    <SimpleAppBar title="Generator card Valentin's" />
    <FullWidthGrid />    
    <AddTodo />
    <AddLayout />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
