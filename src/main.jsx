import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'

// admin
import DashboardAdmin from './pages/admin/DashboardAdmin'
import DataMahasiswa from './pages/admin/DataMahasiswa'
import DataDosen from './pages/admin/DataDosen'
import DataPresensi from './pages/admin/DataPresensi'

// dosen
import DashboardDosen from './pages/dosen/DashboardDosen'
import DaftarMahasiswa from './pages/dosen/DaftarMahasiswa'
import RiwayatKelas from './pages/dosen/RiwayatKelas'

// mahasiswa
import DashboardMahasiswa from './pages/mahasiswa/DashboardMahasiswa'
import CheckInPresensi from './pages/mahasiswa/CheckInPresensi'
import RiwayatPresensi from './pages/mahasiswa/RiwayatPresensi'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />

        {/* Admin */}
        <Route path="/admin" element={<DashboardAdmin />} />
        <Route path="/admin/mahasiswa" element={<DataMahasiswa />} />
        <Route path="/admin/dosen" element={<DataDosen />} />
        <Route path="/admin/presensi" element={<DataPresensi />} />

        {/* Dosen */}
        <Route path="/dosen" element={<DashboardDosen />} />
        <Route path="/dosen/mahasiswa" element={<DaftarMahasiswa />} />
        <Route path="/dosen/riwayat" element={<RiwayatKelas />} />

        {/* Mahasiswa */}
        <Route path="/mahasiswa" element={<DashboardMahasiswa />} />
        <Route path="/mahasiswa/checkin" element={<CheckInPresensi />} />
        <Route path="/mahasiswa/riwayat" element={<RiwayatPresensi />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
