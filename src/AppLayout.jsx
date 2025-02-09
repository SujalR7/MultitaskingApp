import './App.css';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
export const AppLayout=()=>{
  const navigate=useNavigate();
  return (
    <div className="app-container">
      <header>
        <h1>Multitasking App</h1>
        <button onClick={()=>navigate('/')}>Go Back</button>
      </header>
      <Outlet />
      <footer>
        <p>&copy;Multitasking App</p>
      </footer>
    </div>
  );
}