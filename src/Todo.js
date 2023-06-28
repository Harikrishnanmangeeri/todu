import React from 'react';
import { ACTIONS } from './App.js';
import './Todo.css'


const Todo = ({ todo, dispatch }) => {
  console.log(todo.name);
  return (
    <div className='main'>
      <span className='textbox'>{todo.name}</span>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
    </div>
  );
}

export default Todo;
