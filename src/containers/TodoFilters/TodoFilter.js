import classNames from 'classnames';
import { connect } from 'react-redux';
import React from 'react';
import { setVisibilityFilter } from '../../actions/visibilityActions';

const TodoFilter = ({ children, filter, active, onClick }) => {
  return (
      <a
        className={ classNames("todo-filter", {
          "active": active
        })}
        onClick={(e) => e.preventDefault | onClick(filter) }
      >
        {children}
      </a>
  );
};

TodoFilter.displayName = 'TodoFilter';

export default connect(
  (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
  }),
  (dispatch) => ({
    onClick: (filter) => dispatch(setVisibilityFilter(filter))
  })
)(TodoFilter);
