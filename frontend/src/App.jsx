import './App.css'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Layout2 from './components/Layout2'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Trainings from './components/Trainings'
import Template1 from './Templates/Template1'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'

import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import TemplateView from './Templates/Templateview'

// Protected route component
const ProtectedRoute = ({ children }) => {
  const userInfo = localStorage.getItem('userInfo');
  
  if (!userInfo) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      try {
        // const parsedUserInfo = JSON.parse(storedUserInfo);
        // setUserInfo(parsedUserInfo);
        setUserInfo(storedUserInfo);
      } catch (error) {
        console.error('Error parsing user info:', error);
        localStorage.removeItem('userInfo');
      }
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    setUserInfo(null);
    navigate('/login');
  };

  // Redirect already logged in users away from login/register pages
  const RedirectIfLoggedIn = ({ children }) => {
    if (userInfo) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  return (
    <>
      <Navbar userInfo={userInfo} setUserInfo={setUserInfo} handleLogout={handleLogout} />
  
      <Routes>
        {/* Public routes with redirect if already logged in */}
        <Route path="/login" element={
          <RedirectIfLoggedIn>
            <Login />
          </RedirectIfLoggedIn>
        } />
        <Route path="/register" element={
          <RedirectIfLoggedIn>
            <Register />
          </RedirectIfLoggedIn>
        } />
        
        {/* Protected routes */}
        <Route path="/" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/resume-form" element={
          <ProtectedRoute>
            <Layout2 />
          </ProtectedRoute>
        } />
        <Route path="/templates" element={
          <ProtectedRoute>
            <TemplateView />
          </ProtectedRoute>
        } />
        <Route path="/layout2/:template" element={
          <ProtectedRoute>
            <Layout2 />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}

export default App
