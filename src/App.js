import TodoFilters from './containers/TodoFilters/TodoFilters';
import VisibleTodoList from './containers/VisibleTodoList';
import React, { Component } from 'react';
import TodoComposer from './containers/TodoComposer/TodoComposer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoComposer />
        <TodoFilters />
        <VisibleTodoList />
      </div>
    );
  }
}

export default App;
