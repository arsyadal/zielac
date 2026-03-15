import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '4rem 0 2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '4rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              ZIEL<span style={{ color: 'var(--secondary)' }}>AC</span>
            </div>
            <p style={{ color: '#94a3b8', maxWidth: '400px' }}>
              Penyedia layanan jasa service AC terpercaya di Karawang. Kami berkomitmen memberikan pelayanan terbaik dengan harga transparan.
            </p>
          </div>
          
          <div>
            <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Menu</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#home" style={{ color: '#94a3b8' }}>Beranda</a></li>
              <li><a href="#services" style={{ color: '#94a3b8' }}>Layanan</a></li>
              <li><a href="#reviews" style={{ color: '#94a3b8' }}>Ulasan</a></li>
              <li><a href="#contact" style={{ color: '#94a3b8' }}>Kontak</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Layanan</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ color: '#94a3b8' }}>Cuci AC</li>
              <li style={{ color: '#94a3b8' }}>Bongkar Pasang</li>
              <li style={{ color: '#94a3b8' }}>Isi Freon</li>
              <li style={{ color: '#94a3b8' }}>Perbaikan</li>
            </ul>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid #334155', paddingTop: '2rem', textAlign: 'center', color: '#64748b', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} SERVICE AC KARAWANG ziel AC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
