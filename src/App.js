import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/dashboard/Dashboard';
import ManajemenMobil from './components/manajemen/ManajemenMobil';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        {isLoggedIn && <Sidebar />}
        <div className={isLoggedIn ? 'content-with-sidebar' : 'content-full'}>
          {isLoggedIn && <Header />}
          <Routes>
            <Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
            <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path="/manajemen-mobil" element={isLoggedIn ? <ManajemenMobil /> : <Navigate to="/login" />} />
            <Route path="/penjualan" element={isLoggedIn ? <div className="page-container"><h1>Penjualan</h1></div> : <Navigate to="/login" />} />
            <Route path="/pelanggan" element={isLoggedIn ? <div className="page-container"><h1>Pelanggan</h1></div> : <Navigate to="/login" />} />
            <Route path="/layanan" element={isLoggedIn ? <div className="page-container"><h1>Layanan</h1></div> : <Navigate to="/login" />} />
            <Route path="/pengaturan" element={isLoggedIn ? <div className="page-container"><h1>Pengaturan</h1></div> : <Navigate to="/login" />} />
            <Route path="/logout" element={<Navigate to="/login" />} />
            <Route path="*" element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
