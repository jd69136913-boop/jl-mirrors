"use client";

import { useState } from "react";
import { CSSProperties } from "react";

export default function Home() {
  const formAction = "https://formspree.io/f/xqegzdrw";
  const depositLink = "https://cash.app/$Jamie6913";

  // 🔥 STATE
  const [size, setSize] = useState("");
  const [preview, setPreview] = useState<string | null>(null);

  const basePrices: any = {
    small: 220,
    medium: 350,
    large: 500,
  };

  const price = basePrices[size] || 0;

  // 🔒 STYLES
  const videoStyle: CSSProperties = {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "12px",
  };

  const imageStyle: CSSProperties = {
    width: "100%",
    maxWidth: "260px",
    height: "160px",
    objectFit: "cover",
    borderRadius: "12px",
    margin: "0 auto 12px auto",
    display: "block",
  };

  const previewStyle: CSSProperties = {
    width: "100%",
    maxWidth: "260px",
    height: "160px",
    objectFit: "contain",
    borderRadius: "12px",
    margin: "0 auto 12px auto",
    background: "#111",
    padding: "10px",
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
      {/* 🔥 VIDEO */}
      <video
        src="/20260301_012211.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={videoStyle}
      />

      {/* 🔥 MAIN IMAGE (FIXED ISSUE) */}
      <img src="/mirror1.jpg" style={imageStyle} />

      {/* 🔥 GALLERY */}
      <img src="/mirror3.jpg" style={imageStyle} />
      <img src="/mirror11.jpg" style={imageStyle} />

      {/* 🔥 HEADLINE */}
      <h1>Custom Infinity Mirrors — Premium Builds</h1>

      <p style={{ color: "#aaa" }}>
        Upload your design. See your custom build come to life.
      </p>

      {/* 🔥 PREVIEW SYSTEM */}
      {preview && (
        <>
          <p style={{ marginTop: "10px" }}>Your Design Preview:</p>
          <img src={preview} style={previewStyle} />
        </>
      )}

      {/* 🔥 PRICE */}
      {price > 0 && (
        <div style={{ margin: "10px 0" }}>
          Estimated Price: ${price}
        </div>
      )}

      {/* 🔥 FORM */}
      <form action={formAction} method="POST">
        <input name="name" placeholder="Your Name" required style={inputStyle} />
        <input name="email" type="email" placeholder="Your Email" required style={inputStyle} />

        {/* 🔥 FILE INPUT WITH PREVIEW */}
        <input
          type="file"
          name="file"
          style={inputStyle}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setPreview(URL.createObjectURL(file));
            }
          }}
        />

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

        <textarea
          name="details"
          placeholder="Describe your custom vision..."
          style={inputStyle}
        />

        <button type="submit" style={inputStyle}>
          Submit Custom Request
        </button>
      </form>

      {/* 🔥 DEPOSIT */}
      <a href={depositLink} target="_blank" style={inputStyle}>
        Secure Build Slot ($50 Deposit)
      </a>
    </main>
  );
}