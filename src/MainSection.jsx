import { NavLink } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
export const MainSection=()=>{
    const [tasks, setTasks] = useState([
        { id: 1,  description: "Todos", path:'/Todo',img:'./public/todo.jpg'},
        { id: 2, description: "Notes",path:'/Notes',img:'./public/notes.png'},
        { id: 3, description: "Calculator",path:'/Calculator',img:'./public/calculator.png'},
        { id: 4,description: "Weather",path:'/Weather',img:'./public/weather.jpg'},
        { id: 5,  description: "News",path:'/News',img:'./public/news.png'},
        { id: 6, description: "Currency Converter",path:'/CurrencyConverter',img:'./public/converter.jpg'},
        { id: 7, description: "Memory Game",path:'/MemoryGame',img:'./public/brain.png'},
        { id: 8, description: "Cows And Bulls",path:'/CowsandBulls',img:'./public/Cb.jpg'},
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
