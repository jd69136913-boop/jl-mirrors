"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [size, setSize] = useState("medium");
  const [submitted, setSubmitted] = useState(false);

  const priceMap: any = {
    small: "$150 - $300",
    medium: "$300 - $600",
    large: "$600 - $1200",
  };

  async function handleSubmit(e: any) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("message", message);
    formData.append("size", size);
    if (file) formData.append("file", file);

    try {
      const res = await fetch("https://formspree.io/f/xqegzdrw", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (res.ok) {
        setSubmitted(true);
        setMessage("");
        setFile(null);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <main
      style={{
        padding: 40,
        background: "black",
        color: "white",
        minHeight: "100vh",
        fontFamily: "sans-serif",
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      {/* HERO */}
      <div
        style={{
          marginBottom: 40,
          padding: 30,
          borderRadius: 12,
          background: "linear-gradient(135deg, #000, #111)",
          boxShadow: "0 0 40px rgba(0,255,255,0.1)",
        }}
      >
        <h1 style={{ fontSize: 42, marginBottom: 10 }}>
          Custom LED Infinity Mirrors
        </h1>

        <p style={{ color: "#aaa", maxWidth: 600 }}>
          Designed to stand out. Built to order. Each piece is handcrafted to
          create a one-of-a-kind visual centerpiece.
        </p>

        <div style={{ marginTop: 20 }}>
          <a
            href="https://cash.app/$Jamie6913"
            target="_blank"
            style={{
              padding: "14px 28px",
              background: "lime",
              color: "black",
              fontWeight: "bold",
              borderRadius: 8,
              textDecoration: "none",
              marginRight: 10,
            }}
          >
            Secure Your Build
          </a>

          <span style={{ color: "#888" }}>Starting at $150</span>
        </div>
      </div>

      {/* GALLERY */}
      <div style={{ marginTop: 20 }}>
        <h2 style={{ marginBottom: 10 }}>Recent Builds</h2>

        <div style={{ display: "flex", gap: 20 }}>
          <img
            src="/images/mirror1.jpg"
            style={{
              width: "33%",
              borderRadius: 12,
              boxShadow: "0 0 20px rgba(0,255,255,0.3)",
            }}
          />
          <img
            src="/images/mirror2.jpg"
            style={{
              width: "33%",
              borderRadius: 12,
              boxShadow: "0 0 20px rgba(255,0,255,0.3)",
            }}
          />
          <img
            src="/images/mirror3.jpg"
            style={{
              width: "33%",
              borderRadius: 12,
              boxShadow: "0 0 20px rgba(0,255,0,0.3)",
            }}
          />
        </div>
      </div>

      {/* URGENCY */}
      <p style={{ color: "orange", marginTop: 30 }}>
        ⚠️ Only 3 build slots left this month — first come, first served
      </p>

      {/* DEPOSIT */}
      <div style={{ marginTop: 30 }}>
        <h2>Secure Your Build Slot</h2>

        <p style={{ color: "#aaa" }}>
          Lock in your custom mirror with a $50 deposit.
        </p>

        <a
          href="https://cash.app/$Jamie6913"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: 15,
            padding: "14px 28px",
            background: "lime",
            color: "black",
            fontWeight: "bold",
            textDecoration: "none",
            borderRadius: 8,
          }}
        >
          Pay $50 Deposit
        </a>

        <p style={{ marginTop: 10, color: "#aaa" }}>
          ✔️ Deposit locks your spot <br />
          ✔️ Final design approved before full payment <br />
          ✔️ Custom built exactly to your request
        </p>
      </div>

      {/* SUCCESS */}
      {submitted && (
        <p style={{ color: "lime", marginTop: 20 }}>
          Request sent. I’ll contact you shortly.
        </p>
      )}

      {/* FORM */}
      <form onSubmit={handleSubmit} style={{ marginTop: 40 }}>
        <label>Choose Size:</label>
        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          style={{
            display: "block",
            marginTop: 10,
            padding: 10,
            background: "#111",
            color: "white",
            border: "1px solid #333",
          }}
        >
          <option value="small">Small (Desktop)</option>
          <option value="medium">Medium (Wall)</option>
          <option value="large">Large (Statement Piece)</option>
        </select>

        <p style={{ marginTop: 10 }}>
          Estimated Price: <strong>{priceMap[size]}</strong>
        </p>

        <textarea
          placeholder="Describe your mirror (serious inquiries only)"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            marginTop: 15,
            background: "#111",
            color: "white",
            border: "1px solid #333",
          }}
        />

        {/* 🔥 CLEAN FILE UPLOAD */}
        <div style={{ marginTop: 20 }}>
          <label
            style={{
              display: "inline-block",
              padding: "10px 20px",
              background: "#222",
              cursor: "pointer",
              borderRadius: 6,
              border: "1px solid #444",
            }}
          >
            Upload Reference Image
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files) setFile(e.target.files[0]);
              }}
              style={{ display: "none" }}
            />
          </label>

          {file && (
            <p style={{ marginTop: 10, color: "lime" }}>
              Selected: {file.name}
            </p>
          )}
        </div>

        <button
          type="submit"
          style={{
            marginTop: 25,
            padding: "14px 28px",
            background: "white",
            color: "black",
            cursor: "pointer",
            fontWeight: "bold",
            borderRadius: 8,
          }}
        >
          Request Custom Build
        </button>
      </form>
    </main>
  );
}