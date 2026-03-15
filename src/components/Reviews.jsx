import React from 'react';

const reviews = [
  {
    name: 'Ismail Prasetya',
    text: 'Good service, recomend pokoknya',
    rating: 5
  },
  {
    name: 'Kalia Dinda Hanafi',
    text: 'pelayanan memuaskan sesuai, harga terjangkau, pengerjaan cepat',
    rating: 5
  },
  {
    name: 'Accounting Yushiro',
    text: 'Pokoknya servicenya terbaik bgt',
    rating: 5
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="section" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Apa Kata Pelanggan Kami?</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.2rem', marginBottom: '1rem' }}>
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: '#fbbf24', fontSize: '1.5rem' }}>★</span>
            ))}
            <span style={{ marginLeft: '10px', fontWeight: 600 }}>5.0 Rating Google</span>
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {reviews.map((review, index) => (
            <div key={index} className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ marginBottom: '1rem', color: '#fbbf24' }}>
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
                "{review.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', background: 'var(--secondary)', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                  {review.name.charAt(0)}
                </div>
                <div style={{ fontWeight: 600 }}>{review.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
