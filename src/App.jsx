import Estrenos from './components/Estrenos'
import Detalles from './components/Detalles'
import { useState, useEffect } from 'react'
import { urlMovie } from './settings';
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  const [state, setState] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjEyNjRmZTRmYThmYWQzZWUwNDM0ZDEwZDUzZTA4NiIsInN1YiI6IjY0OGM4YWUxNDJiZjAxMDEwMWJkOWI0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kIXkxkUAsHgLBujf4mHJeLkCCu9otU7ydSjjeDzsQPk'
    }
  };

  useEffect(() => {
      fetch(urlMovie, options)
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .then(data => {
          setState(data.results);
        })
        .catch(error => {
          console.log(error);
        })
  }, [])
  

  

  return (
    <div className='bg-dark min-h-screen'>
      <Routes>
        <Route path='/' element={<Estrenos movies={state} />} />
        <Route path='peliculas/:id' element={<Detalles />} />
      </Routes>
    </div>
  )
}

export default App
