/**
 * @description Module containing action's types and action creators
 */
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';

export function addTodoItem(todo) {
  return {
    todo,
    type: ADD_TODO_ITEM
  }
}