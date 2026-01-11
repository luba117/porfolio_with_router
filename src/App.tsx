
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  return (

    <>
    <Navbar/>
      <Routes>
        <Route path="/luba-portfolio" element={<Hero/>} />
        <Route path='/about' element={<About/>}/>
        <Route path="/skills" element={<Skills/>} />
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
