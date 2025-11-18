import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (username.startsWith('admin')) navigate('/admin')
    else if (username.startsWith('dosen')) navigate('/dosen')
    else if (username.startsWith('mhs')) navigate('/mahasiswa')
    else alert('Role tidak dikenali. Gunakan admin*, dosen*, atau mhs*')
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <input className="input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="btn" onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}
