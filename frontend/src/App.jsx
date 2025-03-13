import './App.css'


import Navbar from './components/Navbar'
import Layout2 from './components/Layout2'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Trainings from './components/Trainings'
import Template1 from './Templates/Template1'
import Dashboard from './components/Dashboard'

import { Route, Routes } from 'react-router-dom'
import TemplateView from './Templates/Templateview'



function App() {

  return (
    <>
         <Navbar/>
  
  <Routes>
    <Route path='/' element={<Dashboard />}/>
    <Route path='/resume-form' element={<Layout2/>}/>
    {/* Route for Template Selection Page */}
    <Route path="/templates" element={<TemplateView />} />

    {/* Route for Layout2 with Template Selection */}
    <Route path="/layout2/:template" element={<Layout2 />} />
  </Routes>

</>
      
    
  )
}

export default App
