import { ADD_TODO_ITEM } from '../../actions/todo-actions';
import todoReducer from '../todo-reducer.js';

test('should return the initial state when unknown action', () => {
  expect(todoReducer(undefined, {})).toEqual({});
});

test('should handle ADD_TODO_ITEM', () => {
  expect(todoReducer({ todos: [] }, { type: ADD_TODO_ITEM, todo: 'todo' })).toEqual({ todos: ['todo'] });
});