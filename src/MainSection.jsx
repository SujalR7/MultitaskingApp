import { NavLink } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
export const MainSection=()=>{
    const [tasks, setTasks] = useState([
        { id: 1,  description: "Todos", path:'/Todo',img:'./todo.jpg'},
        { id: 2, description: "Notes",path:'/Notes',img:'./notes.png'},
        { id: 3, description: "Calculator",path:'/Calculator',img:'./calculator.png'},
        { id: 4,description: "Weather",path:'/Weather',img:'./weather.jpg'},
        { id: 5,  description: "News",path:'/News',img:'./news.png'},
        { id: 6, description: "Currency Converter",path:'/CurrencyConverter',img:'./converter.jpg'},
        { id: 7, description: "Memory Game",path:'/MemoryGame',img:'./brain.png'},
        { id: 8, description: "Cows And Bulls",path:'/CowsandBulls',img:'./Cb.jpg'},
      ]);
    return<>
<main>
<section className="content">
    {tasks.map((task) => (
      <div
        key={task.id}
        className="task-container"
      >
      <NavLink to={task.path}>
      <img src={task.img} height="50%" width="50%"/>
      <div className="task-title">
        <p>{task.description}</p>
        </div>
        </NavLink>
      </div>
    ))}
  </section>
</main>
</>
}
