import Textarea from 'react-textarea-autosize'
import { addTodo } from '../../actions/todoActions';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import './TodoComposer.css';

class TodoComposer extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  onSubmit(evt) {
    evt.preventDefault()
    const { input } = this.refs;
    const { dispatch } = this.props;

    if (!input.value.trim())
      return

    dispatch(addTodo(input.value))
    input.value = ''
  }

  onKeyDown(evt) {
    if (evt.keyCode === 13 && !evt.shiftKey) {
      this.onSubmit(evt)
    }
  }

  render() {
    return (
      <div className="todo-composer">
        <form onSubmit={this.onSubmit}>
          <Textarea
            onKeyDown={this.onKeyDown}
            ref="input"
            placeholder="Add a todo" />
          <button type="submit">Add task</button>
        </form>
      </div>
    )
  }
}

export default connect()(TodoComposer);
