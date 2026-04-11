export default function Home() {
  return (
    <main style={{ padding: '20px', background: '#111', color: '#fff' }}>
      <h1 style={{ fontSize: '28px', marginBottom: '20px' }}>
        J&L Custom Infinity Mirrors
      </h1>

      {/* HERO IMAGE */}
      <div style={{ marginBottom: '30px' }}>
        <img
          src="/images/mirror.jpg"
          alt="Main Mirror"
          style={{
            width: '100%',
            maxWidth: '800px',
            display: 'block',
            margin: '0 auto',
            borderRadius: '10px',
          }}
        />
      </div>

      {/* IMAGE GALLERY */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px',
        }}
      >
        {['mirror1.jpg', 'mirror2.jpg', 'mirror3.jpg', 'mirror4.jpg'].map(
          (img, i) => (
            <img
              key={i}
              src={`/images/${img}`}
              alt={`Mirror ${i}`}
              style={{
                width: '100%',
                borderRadius: '8px',
              }}
            />
          )
        )}
      </div>
    </main>
  );
}