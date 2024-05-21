import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './componetens/Navbar'

function App() {
  

  return (
    <>
      <Navbar />      
      <Outlet/>
    </>
  )
}

export default App
