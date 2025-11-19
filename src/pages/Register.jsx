import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  const handleRegister = () => {
    if (!username || !password || !confirmPassword) {
      alert('Semua field wajib diisi!')
      return
    }

    if (password !== confirmPassword) {
      alert('Password dan Konfirmasi Password tidak cocok!')
      return
    }

    alert('Registrasi berhasil! Silakan login.')
    navigate('/login')
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Register</h2>

        <input
          className="input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="Konfirmasi Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button className="btn" onClick={handleRegister}>
          Register
        </button>

        <p style={{ marginTop: '10px' }}>
          Sudah punya akun? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => navigate('/login')}>Login</span>
        </p>
      </div>
    </div>
  )
}
