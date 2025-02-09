import React, { useState } from 'react'
import './Todo.css';
const TodoForm = ({onaddTodo}) => {
    const[task,setTask]=useState({id:'',content:'',checked:false});
    const handleTask=(value)=>{
        setTask({id:value,content:value,checked:false});
    }
    const handleSubmit=(e)=>{
     e.preventDefault();
     onaddTodo(task);
     setTask({id:'',content:'',checked:false});
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <input type='text' placeholder="Enter your Task" value={task.content} onChange={(e)=>handleTask(e.target.value)} />
    </form>
    </>
  )
}

export default TodoForm