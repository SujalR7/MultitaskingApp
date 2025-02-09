import React from 'react'

const Todolist = ({task,handleChecked,handleDelete}) => {
    const handleCheck=()=>{
      handleChecked(task.content);
    }
    const handleDel=()=>{
      handleDelete(task);
    }
  return (
    <li><p style={task.checked?{textDecoration:'line-through #00ff00'}:{textDecoration:'none'}}>{task.content}</p>
    <button onClick={handleCheck} style={{color:'white',backgroundColor:'green'}} >&#x2705;</button>
    <button onClick={handleDel} style={{color:'white',backgroundColor:'red'}}>&#128465;</button></li>
  )
}

export default Todolist