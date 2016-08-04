import classnames from 'classnames';
import React from 'react'
import "./Todo.css"

const Todo = ({ text, completed, onClick }) => {
  return (
    <div
      className={classnames("todo", { "completed": completed })}
      onClick={onClick}
    >
      <span className="checkbox"></span>
      <div className="todo-text">
        { text }
      </div>
    </div>
  );
};

Todo.displayName = 'Todo';

export default Todo;
