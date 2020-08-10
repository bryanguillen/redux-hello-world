import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addTodoItem } from './actions/todo-actions';

/************************
 * Sub Components
 ************************/

function TodoForm(props) {
  return (
    <form className="Todo-Form">
      <input onChange={props.onChange} value={props.value} />
      <button onClick={props.onClick} type="submit">Add</button>
    </form>
  );
}

function TodoList(props) {
  return (
    <ul>
      {props.todoList.map((todo, index) => <TodoItem text={todo} key={index}/>)}
    </ul>
  );
}

function TodoItem(props) {
  return (
    <li>{props.text}</li>
  );
}

/************************
 * Main Component
 ************************/

function App({ todos, addTodoItem }) {
  const [todoInput, setTodoInput] = useState('');

  return (
    <div className="App">
      <TodoForm
        onChange={event => setTodoInput(event.target.value)}
        onClick={event => {
          event.preventDefault();
          addTodoItem(todoInput);
          setTodoInput('');
        }}
        value={todoInput}
      />
      <TodoList
        todoList={todos}
      />
    </div>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = { addTodoItem };

/**
 * Differences I've noticed with react-redux
 * - I don't have to subscribe
 * - I don't have to call getState
 * - I don't have to dispacth
 * - Essentially, I do not have to interact with the store;
 *   they do that for me; all I have to do is map state props
 *   and also dispatch (i.e. action creators) to props
 */

export default connect(mapStateToProps, mapDispatchToProps)(App);
