import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Layout2 from "./components/Layout2";
import AdminDashboard from "./components/AdminDashboard";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminPayment from "./components/AdminPayment"; 
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import TemplateView from "./Templates/Templateview";
import PrivateRoutes from "./components/PrivateRoutes";
import JobSearch from "./components/JobSearch";
import Home from "./components/Home";
import Payment from "./components/Payment";
import ForgotPassword from "./components/ForgotPassword";
import Contact from "./components/Contact";
import AboutUs from "./components/Aboutus";
import AdminTemplate from "./components/AdminTemplate";
import UserPayments from "./components/UserPayments";
import TemplateEditor from "./components/TemplateEditor";
// import Myresumes from "./components/Myresumes";


// // Protected route component
// const ProtectedRoute = ({ children }) => {
//   const userInfo = sessionStorage.getItem('userInfo');

//   if (!userInfo) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    // Check if user is logged in
    const storedUserInfo = sessionStorage.getItem("userInfo");
    if (storedUserInfo) {
      try {
        // const parsedUserInfo = JSON.parse(storedUserInfo);
        // setUserInfo(parsedUserInfo);
        setUserInfo(storedUserInfo);
      } catch (error) {
        console.error("Error parsing user info:", error);
        sessionStorage.removeItem("userInfo");
      }
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    sessionStorage.removeItem("userInfo");
    setUserInfo(null);
    navigate("/login");
  };

  // Redirect already logged in users away from login/register pages
  const RedirectIfLoggedIn = ({ children }) => {
    if (userInfo) {
      return <Navigate to="/dashboard" replace />;
    }
    return children;
  };

  return (
    <>
      <Navbar
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        handleLogout={handleLogout}
      />

      <Routes>
        {/* Public routes with redirect if already logged in */}
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ForgotPassword/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route element={<PrivateRoutes />}>
          {/* Protected routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/resume-form" element={<Layout2 />} />
          <Route path="/templates" element={<TemplateView />} />
          <Route path="/layout2/:template" element={<Layout2 />} />
          <Route path="/admin-dashboard" element={<AdminDashboard/>} /> 
          <Route path="/admin-payment" element={<AdminPayment/>} />
          <Route path="/job-search" element={<JobSearch/>} />
          <Route path="/admin-template" element={<AdminTemplate/>} />
          <Route path="/user-payments" element={<UserPayments/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/edit-template" element={<TemplateEditor/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
