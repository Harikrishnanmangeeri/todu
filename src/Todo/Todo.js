import React, { useEffect, useState } from 'react';
import "./Todo.css"
import Addtask from './Addtask';
import List from './List';

const Todo = () => {
  const [tasks,settask]= useState([]);
  useEffect(()=>{
    document.write=`you have ${tasks.length}pending task(s)`
  });
  const AddTask = (title) => {
    const newTask =[...tasks,{title}]
    settask(newTask)
  }
  const removetask =(index)=>{
    const oldtask =[...tasks]
    oldtask.splice(index,1)
    settask(oldtask)
  }
  return (
    <>
      <div className='todu-main'>
        <div className='header'>TODO APP</div>
        <div className='add-task'>
        <Addtask propss={AddTask}/></div>
        <div className='task'>
          {tasks.map((task , index)=>(
          <List props={task} remtask={removetask} index={index} key={index}
          />
          ))}</div>
      </div>
    </>
  );
}

export default Todo;