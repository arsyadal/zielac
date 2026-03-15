import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card py-3' : 'bg-transparent py-5'
      }`}
      style={{
        padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', letterSpacing: '-0.5px' }}>
          ZIEL<span style={{ color: 'var(--secondary)' }}>AC</span>
        </div>
        
        {/* Simple responsive switch: hide links on very small screens for now, or just reduce gap */}
        <ul className="nav-links" style={{ 
          display: 'flex', 
          gap: '1rem', 
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'flex-end'
        }}>
          <li><a href="#home" style={{ fontWeight: 500, fontSize: '0.9rem' }}>Beranda</a></li>
          <li><a href="#services" style={{ fontWeight: 500, fontSize: '0.9rem' }}>Layanan</a></li>
          <li><a href="#reviews" style={{ fontWeight: 500, fontSize: '0.9rem' }}>Ulasan</a></li>
          <li><a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Kontak</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
