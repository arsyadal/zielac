import React from 'react';
import serviceImg1 from '../assets/images/ac_service_tech_1773589566938.png';
import serviceImg2 from '../assets/images/hvac_tools_close_up_1773589599452.png';

const services = [
  {
    title: 'Service & Cuci AC',
    desc: 'Pembersihan unit AC untuk menjaga udara tetap bersih dan dingin maksimal.',
    img: serviceImg1
  },
  {
    title: 'Perbaikan AC',
    desc: 'Diagnosa dan perbaikan kerusakan pada mesin, kebocoran, atau masalah kelistrikan.',
    img: serviceImg2
  },
  {
    title: 'Bongkar Pasang AC',
    desc: 'Layanan pemindahan dan pemasangan unit AC baru atau bekas dengan rapi.',
    img: serviceImg1
  },
  {
    title: 'Isi & Tambah Freon',
    desc: 'Pengisian freon berkualitas untuk memastikan performa pendinginan optimal.',
    img: serviceImg2
  }
];

const Services = () => {
  return (
    <section id="services" className="section" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Layanan Kami</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Kami menyediakan solusi lengkap untuk segala jenis kebutuhan AC Anda, dari perawatan rutin hingga perbaikan darurat.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {services.map((service, index) => (
            <div key={index} className="glass-card" style={{ overflow: 'hidden', transition: 'var(--transition)' }}>
              <img src={service.img} alt={service.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
