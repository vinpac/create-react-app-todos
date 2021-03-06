let nextTodoId = 0;

export const TOGGLE_TODO = "TOGGLE_TODO"
export const ADD_TODO = "ADD_TODO"


export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
})


export function asyncAction(text) {
  return (dispatch) => {
    dispatch(addTodo(text))
  }
}
