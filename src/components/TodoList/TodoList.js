import Todo from '../Todo/Todo';
import React from 'react';
import './TodoList.css'

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <div className="todo-list">
      { todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )}
    </div>
  );
};

TodoList.displayName = 'TodoList';

export default TodoList;
