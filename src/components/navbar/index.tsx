import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import './style.css'

const Navbar = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!search) return
    navigate(`/search?q=${search}`)
    setSearch('')
  }

  return (
    <nav id='navbar'>
      <h2>
        <Link to='/'>
          <BiCameraMovie />
          React TMDB
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Busque um filme'
          value={search}
          onChange={handleSearchChange}
        />
        <button type='submit'>
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  )
}

export default Navbar