import React from 'react';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from "../../actions/visibilityActions";
import TodoFilter from './TodoFilter';
import "./TodoFilters.css"

const TodoFilters = () => {
  return (
    <div className="todo-filters">
      <TodoFilter filter={SHOW_ALL}>All</TodoFilter>
      <TodoFilter filter={SHOW_ACTIVE}>Active</TodoFilter>
      <TodoFilter filter={SHOW_COMPLETED}>Completed</TodoFilter>
    </div>
  );
};

TodoFilters.displayName = 'TodoFilters';

export default TodoFilters;
