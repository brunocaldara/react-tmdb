import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Movie from './pages/movie'
import Search from './pages/search'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/react-tmdb/' element={<Home />} />
          <Route path='/react-tmdb/movie/:id' element={<Movie />} />
          <Route path='/react-tmdb/search' element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
