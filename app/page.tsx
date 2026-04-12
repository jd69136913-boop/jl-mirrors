'use client';

import { useState } from 'react';

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [color, setColor] = useState('#00ffcc');

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }

  return (
    <main
      style={{
        background: '#000',
        color: '#fff',
        minHeight: '100vh',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* HERO */}
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Custom LED Infinity Mirrors
      </h1>

      <div style={{ maxWidth: '800px', margin: '0 auto 30px' }}>
        <img
          src="/images/mirror.jpg"
          alt="Main Mirror"
          style={{
            width: '100%',
            borderRadius: '10px',
          }}
        />
      </div>

      {/* GALLERY */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px',
          maxWidth: '900px',
          margin: '0 auto 50px',
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

      {/* UPLOAD + PREVIEW */}
      <div style={{ textAlign: 'center' }}>
        <p style={{ marginBottom: '10px' }}>
          Upload your design to preview it in an infinity mirror:
        </p>

        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          style={{
            marginBottom: '20px',
            color: '#fff',
          }}
        />

        {/* COLOR PICKER */}
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{
            marginBottom: '20px',
            cursor: 'pointer',
          }}
        />

        {/* PREVIEW */}
        <div
          style={{
            width: '320px',
            height: '320px',
            margin: '0 auto',
            borderRadius: '20px',
            overflow: 'hidden',
            position: 'relative',
            background: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* GLOW */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(circle, ${color}33 0%, transparent 70%)`,
              filter: 'blur(25px)',
            }}
          />

          {/* DEPTH */}
          {image &&
            [...Array(7)].map((_, i) => {
              const scale = 1 - i * 0.1;
              const opacity = 1 - i * 0.15;

              return (
                <img
                  key={i}
                  src={image}
                  alt="preview"
                  style={{
                    position: 'absolute',
                    width: '180px',
                    height: '180px',
                    objectFit: 'contain',
                    transform: `scale(${scale})`,
                    opacity,
                    filter: `blur(${i * 1.2}px) brightness(${1 - i * 0.05})`,
                  }}
                />
              );
            })}

          {/* EDGE LIGHT */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '20px',
              boxShadow: `0 0 30px ${color}, inset 0 0 40px ${color}`,
            }}
          />

          {/* GLASS */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(120deg, rgba(255,255,255,0.15), transparent 40%)',
            }}
          />
        </div>
      </div>
    </main>
  );
}