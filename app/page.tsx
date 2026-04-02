"use client";

import { useState } from "react";
import { CSSProperties } from "react";

export default function Home() {
  const formAction = "https://formspree.io/f/xqegzdrw";
  const depositLink = "https://cash.app/$Jamie6913";

  // 🔥 STATE
  const [size, setSize] = useState("");
  const [rush, setRush] = useState(false);
  const [remote, setRemote] = useState(false);
  const [premium, setPremium] = useState(false);

  // 🔥 PREMIUM PRICING (UPGRADED)
  const basePrices: any = {
    small: 220,
    medium: 350,
    large: 500,
  };

  const price =
    (basePrices[size] || 0) +
    (rush ? 60 : 0) +
    (remote ? 40 : 0) +
    (premium ? 120 : 0);

  // 🔒 STYLES
  const videoStyle: CSSProperties = {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "12px",
  };

  const galleryStyle: CSSProperties = {
    display: "flex",
    gap: "8px",
    overflowX: "auto",
    marginBottom: "15px",
  };

  const imageStyle: CSSProperties = {
    width: "120px",
    height: "120px",
    objectFit: "cover",
    borderRadius: "10px",
    flexShrink: 0,
  };

  const inputStyle: CSSProperties = {
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "6px",
    border: "1px solid #333",
    background: "#111",
    color: "white",
  };

  const buttonStyle: CSSProperties = {
    width: "100%",
    padding: "14px",
    background: "#00cc66",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  };

  const depositStyle: CSSProperties = {
    display: "block",
    width: "100%",
    padding: "14px",
    background: "#ffcc00",
    color: "black",
    textAlign: "center",
    borderRadius: "6px",
    fontWeight: "bold",
    textDecoration: "none",
    marginTop: "12px",
  };

  return (
    <main
      style={{
        background: "black",
        color: "white",
        minHeight: "100vh",
        padding: "18px",
        maxWidth: "480px",
        margin: "0 auto",
        fontFamily: "Arial",
      }}
    >
      {/* 🔥 HERO VIDEO */}
      <video
        src="/20260301_012211.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={videoStyle}
      />

      {/* 🔥 GALLERY */}
      <div style={galleryStyle}>
        <img src="/mirror1.jpg" style={imageStyle} />
        <img src="/mirror3.jpg" style={imageStyle} />
        <img src="/mirror11.jpg" style={imageStyle} />
      </div>

      {/* 🔥 PREMIUM HEADLINE */}
      <h1 style={{ fontSize: "26px" }}>
        Custom Infinity Mirrors — Built Like Art
      </h1>

      {/* 🔥 PREMIUM VALUE */}
      <p style={{ color: "#ccc", marginBottom: "10px" }}>
        Hand-built, one-of-a-kind illuminated pieces designed around your vision.
      </p>

      {/* 🔥 PRICE ANCHOR */}
      <p style={{ color: "#aaa", marginBottom: "10px" }}>
        Most custom builds range from <strong>$300 – $600+</strong>
      </p>

      {/* 🔥 URGENCY */}
      <p style={{ color: "#ff4444", fontWeight: "bold" }}>
        Only 3 build slots available this week
      </p>

      {/* 🔥 LIVE PRICE */}
      {price > 0 && (
        <div
          style={{
            background: "#111",
            padding: "10px",
            borderRadius: "8px",
            margin: "10px 0",
            textAlign: "center",
          }}
        >
          Estimated Build Price: ${price}
        </div>
      )}

      {/* 🔥 FORM */}
      <form action={formAction} method="POST">
        <input name="name" placeholder="Your Name" required style={inputStyle} />
        <input name="email" type="email" placeholder="Your Email" required style={inputStyle} />
        <input type="file" name="file" style={inputStyle} />

        <select
          name="size"
          style={inputStyle}
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="">Select Size</option>
          <option value="small">Small ($220)</option>
          <option value="medium">Medium ($350)</option>
          <option value="large">Large ($500)</option>
        </select>

        {/* 🔥 UPSSELLS (REPOSITIONED AS PREMIUM FEATURES) */}
        <label>
          <input type="checkbox" onChange={() => setRush(!rush)} /> Priority Build (+$60)
        </label>
        <br />

        <label>
          <input type="checkbox" onChange={() => setRemote(!remote)} /> LED Remote Control (+$40)
        </label>
        <br />

        <label>
          <input type="checkbox" onChange={() => setPremium(!premium)} /> Premium Mirror Finish (+$120)
        </label>

        <textarea
          name="details"
          placeholder="Describe your custom vision..."
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Submit Custom Request
        </button>
      </form>

      {/* 🔥 DEPOSIT */}
      <a href={depositLink} target="_blank" style={depositStyle}>
        Secure Your Build Slot ($50 Deposit)
      </a>

      {/* 🔥 TRUST */}
      <p style={{ fontSize: "12px", color: "#888", marginTop: "10px" }}>
        Deposit is applied toward final price and locks your production slot.
      </p>
    </main>
  );
}