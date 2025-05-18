import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementasi logika login di sini
    console.log('Login dengan:', { email, password });
    // Untuk demo, kita akan langsung login
    onLogin();
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>MobilBagus</h2>
        <h3>Selamat Datang</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit">Masuk</button>
        </form>
        <p className="forgot-password">
          <button 
            type="button" 
            className="forgot-password-btn"
            onClick={() => {
              // Implementasi logika lupa password di sini
              console.log('Lupa password clicked');
            }}
          >
            Lupa password?
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;