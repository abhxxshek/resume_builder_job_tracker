import './App.css'
import About from './components/About'
import Achievements from './components/Achievements'
import Awards from './components/Awards'
import Education from './components/Education'
import Experience from './components/Experience'

import Navbar from './components/Navbar'
import Layout2 from './components/Layout2'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Trainings from './components/Trainings'
import Template1 from './Templates/Template1'
import { Route, Routes } from 'react-router-dom'



function App() {

  return (
    <>
         <Navbar/>
  
  <Routes>
    {/* Route for Template Selection Page */}
    <Route path="/" element={<TemplateView />} />

    {/* Route for Layout2 with Template Selection */}
    <Route path="/layout2/:template" element={<Layout2 />} />
  </Routes>

</>
      
    
  )
}

export default App
