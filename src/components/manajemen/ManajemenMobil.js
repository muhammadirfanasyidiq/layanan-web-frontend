import React, { useState } from 'react';
import './ManajemenMobil.css';

const ManajemenMobil = () => {
  // State untuk data mobil
  const [mobilList, setMobilList] = useState([
    {
      id: 1,
      nama: 'Toyota Innova',
      merek: 'Toyota',
      harga: 350000000,
      tahun: 2023,
      transmisi: 'Automatic',
      cc: 2455
    },
    {
      id: 2,
      nama: 'Honda Civic',
      merek: 'Honda',
      harga: 425000000,
      tahun: 2023,
      transmisi: 'Automatic',
      cc: 2498
    },
    {
      id: 3,
      nama: 'Mitsubishi Xpander',
      merek: 'Mitsubishi',
      harga: 350000000,
      tahun: 2023,
      transmisi: 'Automatic',
      cc: 2288
    }
  ]);

  // State untuk filter
  const [merekFilter, setMerekFilter] = useState('Semua Merek');
  const [hargaFilter, setHargaFilter] = useState('Semua Harga');
  const [tahunFilter, setTahunFilter] = useState('Semua Tahun');
  const [currentPage, setCurrentPage] = useState(1);

  // Handler untuk tombol filter
  const handleFilter = () => {
    console.log('Filter diterapkan:', { merekFilter, hargaFilter, tahunFilter });
    // Implementasi filter sesuai kebutuhan
  };

  // Handler untuk tombol tambah data
  const handleTambahData = () => {
    console.log('Tambah data mobil diklik');
    // Implementasi tambah data sesuai kebutuhan
  };

  // Handler untuk tombol edit
  const handleEdit = (id) => {
    console.log('Edit mobil dengan ID:', id);
    // Implementasi edit sesuai kebutuhan
  };

  // Handler untuk tombol hapus
  const handleHapus = (id) => {
    console.log('Hapus mobil dengan ID:', id);
    // Implementasi hapus sesuai kebutuhan
  };

  // Handler untuk tombol lihat detail
  const handleLihatDetail = (id) => {
    console.log('Lihat detail mobil dengan ID:', id);
    // Implementasi lihat detail sesuai kebutuhan
  };

  // Handler untuk pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Format harga ke format Rupiah
  const formatHarga = (harga) => {
    return `Rp. ${harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
  };

  return (
    <div className="manajemen-mobil-container">
      {/* Filter Section */}
      <div className="filter-section">
        <div className="filter-group">
          <label>Merek</label>
          <div className="select-wrapper">
            <select 
              value={merekFilter} 
              onChange={(e) => setMerekFilter(e.target.value)}
            >
              <option>Semua Merek</option>
              <option>Toyota</option>
              <option>Honda</option>
              <option>Mitsubishi</option>
              <option>Daihatsu</option>
              <option>Suzuki</option>
            </select>
          </div>
        </div>

        <div className="filter-group">
          <label>Harga</label>
          <div className="select-wrapper">
            <select 
              value={hargaFilter} 
              onChange={(e) => setHargaFilter(e.target.value)}
            >
              <option>Semua Harga</option>
              <option>&lt; 300 Juta</option>
              <option>300 - 400 Juta</option>
              <option>400 - 500 Juta</option>
              <option>&gt; 500 Juta</option>
            </select>
          </div>
        </div>

        <div className="filter-group">
          <label>Tahun</label>
          <div className="select-wrapper">
            <select 
              value={tahunFilter} 
              onChange={(e) => setTahunFilter(e.target.value)}
            >
              <option>Semua Tahun</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
            </select>
          </div>
        </div>

        <button className="filter-button" onClick={handleFilter}>Filter</button>
      </div>

      {/* Tambah Data Section */}
      <div className="tambah-data-section">
        <span>Tambah Data Mobil:</span>
        <button className="tambah-button" onClick={handleTambahData}>Tambah Data Mobil</button>
      </div>

      {/* Mobil Cards */}
      <div className="mobil-cards">
        {mobilList.map((mobil) => (
          <div className="mobil-card" key={mobil.id}>
            <div className="mobil-header">
              <div className="mobil-merek">{mobil.merek}</div>
              <div className="action-buttons">
                <button className="edit-button" onClick={() => handleEdit(mobil.id)}>
                  <span className="icon">✏️</span>
                </button>
                <button className="delete-button" onClick={() => handleHapus(mobil.id)}>
                  <span className="icon">🗑️</span>
                </button>
              </div>
            </div>
            <h2 className="mobil-nama">{mobil.nama}</h2>
            <h3 className="harga">{formatHarga(mobil.harga)}</h3>
            <div className="mobil-details">
              <div className="detail-item">
                <span className="icon">📅</span>
                <span>{mobil.tahun}</span>
              </div>
              <div className="detail-item">
                <span className="icon">⚙️</span>
                <span>{mobil.transmisi}</span>
              </div>
              <div className="detail-item">
                <span className="icon">🔧</span>
                <span>{mobil.cc} CC</span>
              </div>
            </div>
            <button 
              className="detail-button" 
              onClick={() => handleLihatDetail(mobil.id)}
            >
              Lihat Detail
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button 
          className="pagination-button prev" 
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <button 
          className={`pagination-number ${currentPage === 1 ? 'active' : ''}`}
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
        <button 
          className={`pagination-number ${currentPage === 2 ? 'active' : ''}`}
          onClick={() => handlePageChange(2)}
        >
          2
        </button>
        <button 
          className={`pagination-number ${currentPage === 3 ? 'active' : ''}`}
          onClick={() => handlePageChange(3)}
        >
          3
        </button>
        <button 
          className="pagination-button next"
          disabled={currentPage === 3}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ManajemenMobil;