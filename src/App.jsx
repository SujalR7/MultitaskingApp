import React, { useState, useEffect } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import Todo from './Todo/Todo';
import { MainSection } from './MainSection';
import NotesApp from './Notes/NotesApp';
import Calculator from './Calculator/Calculator';
import WeatherApp from './Weather/Weather';
import News from './News/News';
import MemoryGame from './MemoryGame/MemoryGame';
import Converter from './Currency Converter/Converter';
import CowsAndBulls from './Cows and Bulls/CowsandBulls';
function App() {
  const router=createBrowserRouter([{
    path:'/',
    element:<AppLayout />,
    children:[{
      path:'/',
      element:<MainSection />
    },
    {
      path:"/Todo",
     element:<Todo />
    },
    {
      path:"/Notes",
     element:<NotesApp />
    },
    {
      path:"/Calculator",
     element:<Calculator />
    },
    {
      path:"/Weather",
     element:<WeatherApp/>
    },
    {
      path:"/News",
     element:<News />
    },
    {
      path:"/MemoryGame",
     element:<MemoryGame />
    },
    {
      path:"/CurrencyConverter",
     element:<Converter />
    },
    {
      path:"/CowsandBulls",
     element:<CowsAndBulls />
    },]
  }])
  return<><RouterProvider router={router} />
</>
}
export default App;