import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import './Dashboard.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  // Data untuk grafik penjualan bulanan
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
    datasets: [
      {
        label: 'Penjualan 2023',
        data: [30, 15, 12, 30, 32, 28, 25, 30, 32, 15, 28, 30],
        borderColor: 'rgba(75, 85, 255, 1)',
        backgroundColor: 'rgba(75, 85, 255, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Penjualan 2024',
        data: [25, 28, 27, 19, 29, 32, 22, 18, 35, 25, 28, 35],
        borderColor: 'rgba(75, 192, 75, 1)',
        backgroundColor: 'rgba(75, 192, 75, 0.2)',
        tension: 0.4,
      },
    ],
  };

  // Data untuk grafik penjualan per merek
  const doughnutChartData = {
    labels: ['Honda', 'Toyota', 'Daihatsu', 'Suzuki', 'Mitsubishi'],
    datasets: [
      {
        data: [35, 25, 15, 10, 15],
        backgroundColor: [
          'rgba(75, 85, 255, 0.8)',
          'rgba(0, 128, 128, 0.8)',
          'rgba(255, 50, 50, 0.8)',
          'rgba(255, 159, 64, 0.8)',
          'rgba(153, 204, 50, 0.8)',
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      {/* Kartu Statistik */}
      <div className="stats-cards">
        <div className="stat-card penjualan">
          <h3>Total Penjualan</h3>
          <h2>32</h2>
          <p>Bulan ini</p>
        </div>
        <div className="stat-card pendapatan">
          <h3>Pendapatan</h3>
          <h2>Rp. 1,5M</h2>
          <p>Bulan ini</p>
        </div>
        <div className="stat-card stok">
          <h3>Stok Mobil</h3>
          <h2>42</h2>
          <p>Bulan ini</p>
        </div>
      </div>

      {/* Grafik */}
      <div className="charts-container">
        <div className="chart-card">
          <h3>Grafik Penjualan</h3>
          <div className="chart-wrapper">
            <div className="line-chart">
              <h4>Penjualan Bulanan</h4>
              <Line data={lineChartData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
            <div className="doughnut-chart">
              <h4>Penjualan Per Merek</h4>
              <Doughnut data={doughnutChartData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
        </div>
      </div>

      {/* Notifikasi */}
      <div className="notifications-card">
        <div className="card-header">
          <h3>Notifikasi Terbaru</h3>
          <button className="view-all">Lihat Semua</button>
        </div>
        <div className="notification-list">
          <div className="notification-item">
            <div className="notification-content">
              <h4>Pembayaran Diterima</h4>
              <p>Budi Santoso - Toyota Innova</p>
            </div>
            <span className="notification-badge new">Baru</span>
          </div>
          <div className="notification-item">
            <div className="notification-content">
              <h4>Layanan service</h4>
              <p>Siti Rahayu - Honda Civic</p>
            </div>
            <span className="notification-badge new">Baru</span>
          </div>
          <div className="notification-item">
            <div className="notification-content">
              <h4>Layanan Service</h4>
              <p>Ahmad Fauzi - Mitsubishi Xpander</p>
            </div>
            <span className="notification-badge pending">Menunggu</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;