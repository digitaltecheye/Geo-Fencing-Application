import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MarkMeInLanding from "../src/Pages/LandingPage.jsx"
import EmployeeLoginPage from "./components/EmployeeLogin.jsx"
import EmployeeDashboard from './components/EmployeeDashboard.jsx'
function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MarkMeInLanding/>} />
        <Route path="/employeeLogin" element={<EmployeeLoginPage />} />
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
