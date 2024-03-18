import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard'
import DashboardDoc from './components/dashboarddoc'
import ViewPatients from './components/viewpatients'
import BookAppointment from './components/Bookappointment'
import DashboardNav from './components/dashboardnav';
import Diet from './components/diet';
import FlashCards from './components/faq';
import TimeLine from './components/timeline';
import Patientdiet from './components/patient';

function App() {

  return (
    <>
      <div className="App">
      <Router>
        
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/diet" element={<Diet/>}/>
          <Route path="/doc" element={<DashboardDoc />} />
          <Route path="/appointment" element={<BookAppointment />} />
          <Route path="/view" element={<TimeLine/>} />
          <Route path="/faq" element={<FlashCards/>}/>
          <Route path="/pd" element={<Patientdiet/>}/>
          
          
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
