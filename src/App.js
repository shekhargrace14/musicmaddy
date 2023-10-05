
import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from "./pages/Blog"
import About from "./pages/About"
import Contact from './pages/Contact'
import SongPage from './pages/SongPage'

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/blog' element={<Blog/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/songpage' element={<SongPage/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App