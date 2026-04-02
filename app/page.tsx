"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [size, setSize] = useState("");
  const [price, setPrice] = useState(0);

  const pricing: any = {
    Small: 150,
    Medium: 250,
    Large: 400,
    Custom: 0,
  };

  const handleSizeChange = (value: string) => {
    setSize(value);
    setPrice(pricing[value] || 0);
  };

  return (
    <main
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
        fontFamily: "Arial",
        color: "white",
        backgroundColor: "black",
        textAlign: "center",
      }}
    >
      {/* VIDEO */}
      <div style={videoWrap}>
        <video
          src="/20260301_012211.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={videoStyle}
        />
      </div>

      {/* HEADLINE */}
      <h1 style={{ fontSize: "30px" }}>
        Custom Infinity Mirrors Built For You
      </h1>

      <p style={urgencyStyle}>
        ⚠️ Only 3 Build Slots Left This Week
      </p>

      <p style={{ color: "#ccc", marginBottom: "20px" }}>
        Upload your design. See your price instantly.
      </p>

      {/* IMAGE */}
      <Image
        src="/mirror3.jpg"
        alt="Mirror"
        width={500}
        height={400}
        style={imageStyle}
      />

      {/* 🔥 PRICE DISPLAY */}
      {price > 0 && (
        <div style={priceBox}>
          <h2>Total Price: ${price}</h2>
          <p style={{ color: "#aaa" }}>
            $50 deposit required to secure your spot
          </p>
        </div>
      )}

      {/* FORM */}
      <form
        action="https://formspree.io/f/xqegzdrw"
        method="POST"
        encType="multipart/form-data"
        style={formStyle}
      >
        <input
          type="hidden"
          name="_redirect"
          value="https://cash.app/$Jamie6913"
        />

        <input
          name="name"
          placeholder="Your Name"
          required
          style={inputStyle}
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          style={inputStyle}
        />

        <input
          type="file"
          name="file"
          required
          style={{ color: "white" }}
        />

        {/* 🔥 SIZE SELECT (DRIVES PRICE) */}
        <select
          name="size"
          required
          style={inputStyle}
          onChange={(e) => handleSizeChange(e.target.value)}
        >
          <option value="">Select Size</option>
          <option value="Small">Small ($150)</option>
          <option value="Medium">Medium ($250)</option>
          <option value="Large">Large ($400)</option>
          <option value="Custom">Custom Quote</option>
        </select>

        <textarea
          name="notes"
          placeholder="Describe your design..."
          rows={3}
          style={inputStyle}
        />

        {/* CTA */}
        <button type="submit" style={submitStyle}>
          Submit & Secure Your Spot
        </button>

        {/* PAYMENT BUTTON */}
        {price > 0 && (
          <a
            href="https://cash.app/$Jamie6913"
            target="_blank"
            style={depositStyle}
          >
            Pay $50 Deposit Now
          </a>
        )}
      </form>
    </main>
  );
}

/* ================= STYLES ================= */

const videoWrap = {
  maxWidth: "500px",
  margin: "0 auto 20px auto",
  borderRadius: "12px",
  overflow: "hidden",
};

const videoStyle = {
  width: "100%",
  height: "240px",
  objectFit: "cover",
};

const imageStyle = {
  width: "100%",
  maxWidth: "280px",
  height: "180px",
  objectFit: "cover",
  borderRadius: "12px",
  margin: "0 auto 20px auto",
  display: "block",
};

const formStyle = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "12px",
};

const inputStyle = {
  padding: "12px",
  borderRadius: "6px",
  border: "none",
  fontSize: "16px",
};

const submitStyle = {
  padding: "14px",
  fontSize: "18px",
  backgroundColor: "#00ff99",
  color: "black",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  cursor: "pointer",
};

const depositStyle = {
  padding: "14px",
  backgroundColor: "#00cc66",
  color: "black",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: "bold",
};

const priceBox = {
  marginBottom: "20px",
  padding: "15px",
  backgroundColor: "#111",
  borderRadius: "10px",
};

const urgencyStyle = {
  color: "#ff4d4d",
  fontWeight: "bold",
  marginBottom: "10px",
};