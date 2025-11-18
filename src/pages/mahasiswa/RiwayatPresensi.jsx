import React from "react";
import Layout from '../../components/Layout'

const RiwayatPresensi = () => {
  return (
    <Layout role="mahasiswa">
      <div className="page">
        {/* Header */}
        <header className="header">
            <h2>Riwayat Presensi Mahasiswa</h2>
        </header>

        {/* Konten utama */}
        <main className="content">
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>Waktu Masuk</th>
                  <th>Waktu Keluar</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2025-11-10</td>
                  <td>07:58</td>
                  <td>16:04</td>
                  <td>Hadir</td>
                </tr>
                <tr>
                  <td>2025-11-09</td>
                  <td>08:15</td>
                  <td>16:10</td>
                  <td>Terlambat</td>
                </tr>
                <tr>
                  <td>2025-11-08</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Alfa</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default RiwayatPresensi;
