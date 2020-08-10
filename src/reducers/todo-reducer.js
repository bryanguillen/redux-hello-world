import { ADD_TODO_ITEM } from '../actions/todo-actions';

export default function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO_ITEM:
      return [...state, action.todo]
    default:
      return []
  }
}