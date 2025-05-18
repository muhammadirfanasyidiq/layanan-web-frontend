import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>MobilBagus</h2>
      </div>
      <div className="sidebar-menu">
        <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
          <i className="fas fa-tachometer-alt"></i> Dashboard
        </Link>
        <Link to="/manajemen-mobil" className={location.pathname === '/manajemen-mobil' ? 'active' : ''}>
          <i className="fas fa-car"></i> Manajemen Mobil
        </Link>
        <Link to="/penjualan" className={location.pathname === '/penjualan' ? 'active' : ''}>
          <i className="fas fa-chart-line"></i> Penjualan
        </Link>
        <Link to="/pelanggan" className={location.pathname === '/pelanggan' ? 'active' : ''}>
          <i className="fas fa-users"></i> Pelanggan
        </Link>
        <Link to="/layanan" className={location.pathname === '/layanan' ? 'active' : ''}>
          <i className="fas fa-headset"></i> Layanan
        </Link>
        <Link to="/pengaturan" className={location.pathname === '/pengaturan' ? 'active' : ''}>
          <i className="fas fa-cog"></i> Pengaturan
        </Link>
        <Link to="/logout" className="logout">
          <i className="fas fa-sign-out-alt"></i> Keluar
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;