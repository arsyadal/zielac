import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Hubungi Kami</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              Punya masalah dengan AC Anda? Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda 24/7.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '45px', height: '45px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)' }}>
                  📍
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>Alamat</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Perumahan Citra Mulia Megah, Blok B5 no 02, RT31, RW.08, Lemahmulya, Kec. Majalaya, Karawang</div>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '45px', height: '45px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)' }}>
                  📞
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>Telepon</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>0896-7484-3896</div>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '45px', height: '45px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)' }}>
                  ⏰
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>Jam Operasional</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Buka 24 Jam</div>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ height: '400px', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.556204739!2d107.3697!3d-6.3218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69770000000000%3A0x0!2zNsKwMTknMTguNSJTIDEwN8KwMjInMTAuOSJF!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
