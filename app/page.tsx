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
    <main style={{
      background: '#000',
      color: '#fff',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>

      {/* HEADER */}
      <div style={{
        textAlign: 'center',
        padding: '20px 10px',
        borderBottom: '1px solid #111'
      }}>
        <h1 style={{ fontSize: '28px', marginBottom: '5px' }}>
          Custom LED Infinity Mirrors
        </h1>
        <p style={{ color: '#aaa', fontSize: '14px' }}>
          Upload your design. See it come to life.
        </p>
      </div>

      {/* HERO */}
      <div style={{
        maxWidth: '900px',
        margin: '30px auto'
      }}>
        <img
          src="/images/mirror.jpg"
          style={{ width: '100%', borderRadius: '12px' }}
        />
      </div>

      {/* GALLERY */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '15px',
        maxWidth: '900px',
        margin: '0 auto 50px',
        padding: '0 10px'
      }}>
        {['mirror1.jpg','mirror2.jpg','mirror3.jpg','mirror4.jpg'].map((img, i) => (
          <img key={i} src={`/images/${img}`} style={{ width: '100%', borderRadius: '8px' }} />
        ))}
      </div>

      {/* UPLOAD SECTION */}
      <div style={{ textAlign: 'center', paddingBottom: '60px' }}>

        <h2 style={{ marginBottom: '10px' }}>
          Preview Your Custom Mirror
        </h2>

        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          style={{ marginBottom: '20px', color: '#fff' }}
        />

        <br />

        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{ marginBottom: '30px' }}
        />

        {/* PREVIEW FRAME */}
        <div style={{
          width: '360px',
          height: '360px',
          margin: '0 auto',
          borderRadius: '25px',
          position: 'relative',
          background: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: `0 0 40px ${color}`
        }}>

          {/* INNER GLOW */}
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '25px',
            boxShadow: `inset 0 0 80px ${color}`
          }} />

          {/* DEPTH */}
          {image &&
            [...Array(8)].map((_, i) => {
              const scale = 1 - i * 0.08;
              const opacity = 1 - i * 0.12;

              return (
                <img
                  key={i}
                  src={image}
                  style={{
                    position: 'absolute',
                    width: '70%',
                    height: '70%',
                    objectFit: 'contain',
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    opacity,
                    filter:
                      i === 0
                        ? 'none'
                        : `blur(${i * 0.4}px) brightness(${1 - i * 0.04})`,
                  }}
                />
              );
            })}
<div className="flex justify-center mt-6">
  <a
    href="https://buy.stripe.com/test_eVq5kC6Xs7e12Ga9UA87K00"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-xl text-lg"
  >
    Start Your Custom Build
  </a>
</div>
          {/* GLASS */}
          <div style={{
            position: 'absolute',
  pointerEvents: 'none',
            inset: 0,
            borderRadius: '25px',
            background:
              'linear-gradient(120deg, rgba(255,255,255,0.15), transparent 40%)'
          }} />

        </div>

      </div>

    </main>
  );
}
