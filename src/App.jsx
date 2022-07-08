import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar'

import './App.css'

const App = () => (
  <div className='App'>
    <Navbar />
    <Outlet />
  </div>
)

export default App
