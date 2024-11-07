import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
// import Appointment from './pages/appointment';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/appointment" element={<Appointment />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
