import React, { useReducer, useState } from 'react';
import './App.css';
import './Todo.css'
import Todo from './Todo';


export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
DELETE_TODO: 'delete-todo'
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, newTodo(action.payload.name)];
 
      case ACTIONS.DELETE_TODO:
        return state.filter(e=>e.id!==action.payload.id)
        default:
        return state
  
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

const setchange =(e)=>{
  const aee=e.target.value
  setName(aee)
}

  function handleSubmit(e){

    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    console.log(todos);
    setName('');
  }

  return (
    <div className='nn'>
    <nav><h1>ToDo App</h1></nav>
      <form onSubmit={handleSubmit}>
       <div mn> <input type="text" className='nm' value={name} onChange={setchange} placeholder='Enter your Todos'/></div>
      </form>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>;
      })}
    </div>
  );
}

export default App;
