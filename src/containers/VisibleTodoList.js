import TodoList from '../components/TodoList/TodoList';
import { connect } from 'react-redux';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../actions/visibilityActions";
import { toggleTodo } from '../actions/todoActions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      return todos;
  }
}

export default connect(
  (state) => (
    {
      todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
  ),
  (dispatch) => (
    {
      onTodoClick: (id) => dispatch(toggleTodo(id))
    }
  )
)(TodoList);
