import React, { useState } from 'react'
import TodoForm from './TodoForm';
import './Todo.css';
import Todolist from './Todolist';
import { getLocaleStorage, setLocaleStorage } from './TodoLocaleStorage';
import { DateTodo } from './Date';
const Todo = () => {
  const[todos,setTodos]=useState(getLocaleStorage);
  const onaddTodo=(task)=>{
   const{id,content,checked}=task;
   if(content=='')return "";
   let todocontains=todos.find((task)=>task.content===content);
   if(todocontains)return "";
   setTodos((prev)=>([...prev,{id,content,checked}]));
  }
  const handleDelete=(task)=>{
    const updatedTodos=todos.filter((currtask)=>currtask!==task);
    setTodos(updatedTodos);
  }
  const handleChecked=(value)=>{
    const updatedTodos=todos.map((currtask)=>{
      if(currtask.content==value)
        return{...currtask,checked:!currtask.checked};
      else
      return currtask;
    })
    setTodos(updatedTodos);
  }
  setLocaleStorage(todos);
  return (
    <>
    <div className="todos">
      <DateTodo />
      <div className="todo-container">
   <TodoForm onaddTodo={onaddTodo} />
   {
    todos.map((currtask)=><Todolist key={currtask.id} task={currtask} handleDelete={handleDelete} handleChecked={handleChecked} />
  )
   }
   </div>
   </div>
    </>
  )
}

export default Todo