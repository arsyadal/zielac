import React from 'react';
import heroImage from '../assets/images/modern_living_room_ac_1773589582389.png';

const Hero = () => {
  return (
    <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 700 }}>
            Service AC Terbaik & Terpercaya di <span style={{ color: 'var(--secondary)' }}>Karawang</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '500px' }}>
            Nikmati udara sejuk kembali dengan layanan servis AC profesional. Tersedia 24 jam untuk area Karawang dan sekitarnya.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://wa.me/6289674843896" className="btn-primary">Pesan Sekarang</a>
            <a href="#services" className="btn-outline">Lihat Layanan</a>
          </div>
          
          <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--secondary)' }}>5.0</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Rating Google</div>
            </div>
            <div style={{ borderLeft: '1px solid #cbd5e1', height: '40px' }}></div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--secondary)' }}>143+</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Ulasan Puas</div>
            </div>
            <div style={{ borderLeft: '1px solid #cbd5e1', height: '40px' }}></div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--secondary)' }}>24/7</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Jam Operasional</div>
            </div>
          </div>
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: '0.4s', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100%', height: '100%', background: 'var(--secondary)', borderRadius: '2rem', opacity: 0.1, zIndex: 0 }}></div>
          <img 
            src={heroImage} 
            alt="Modern AC Interior" 
            style={{ width: '100%', borderRadius: '2rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)', position: 'relative', zIndex: 1 }} 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
