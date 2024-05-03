import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Projects from './pages/Projects'
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
   <main>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Home></Home>}/>
        <Route path='/about'element={<About></About>}/>
        <Route path='/projects'element={<Projects ></Projects>}/>
        <Route path='/contact'element={<Contact></Contact>}/>
      </Routes>
    </Router>
   </main>
    </> 
  )
}

export default App
