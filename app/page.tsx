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
    <main style={{ padding: 40 }}>
      <h1>Custom Infinity Mirror Builder</h1>

      <p style={{ color: "#aaa" }}>
        Premium handcrafted LED infinity mirrors. Built to order.
      </p>

      {/* 🔥 GALLERY (THIS WAS MISSING) */}
      <div style={{ marginTop: 30 }}>
        <h2>Recent Builds</h2>

        <div style={{ display: "flex", gap: 20, marginTop: 15 }}>
          <img src="/images/mirror1.jpg" style={{ width: "30%" }} />
          <img src="/images/mirror2.jpg" style={{ width: "30%" }} />
          <img src="/images/mirror3.jpg" style={{ width: "30%" }} />
        </div>
      </div>

      {/* URGENCY */}
      <p style={{ color: "orange", marginTop: 20 }}>
        ⚠️ Only 3 build slots left this month — first come, first served
      </p>

      {/* DEPOSIT FIRST */}
      <div style={{ marginTop: 30 }}>
        <h2>Secure Your Build Slot</h2>

        <p style={{ color: "#aaa" }}>
          Skip the wait. Lock in your custom mirror with a $50 deposit.
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
          }}
        >
          Pay $50 Deposit
        </a>

        <p style={{ marginTop: 10, color: "#aaa" }}>
          ✔️ Deposit locks your spot <br />
          ✔️ Final design approved before full payment <br />
          ✔️ Custom built exactly to your request
        </p>

        <p style={{ fontSize: 12, marginTop: 10, color: "#666" }}>
          Deposit goes toward final build cost. Non-refundable once design begins.
        </p>
      </div>

      {/* FORM SECTION */}
      {submitted && (
        <p style={{ color: "lime", marginTop: 20 }}>
          Request sent. I’ll contact you shortly.
        </p>
      )}

      <form onSubmit={handleSubmit} style={{ marginTop: 30 }}>
        <label>Choose Size:</label>
        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          style={{ display: "block", marginTop: 10, padding: 8 }}
        >
          <option value="small">Small (Desktop)</option>
          <option value="medium">Medium (Wall)</option>
          <option value="large">Large (Statement Piece)</option>
        </select>

        <p style={{ marginTop: 10 }}>
          Estimated Price: <strong>{priceMap[size]}</strong>
        </p>

        <p style={{ color: "#aaa", fontSize: 14 }}>
          Most customers choose upgraded LED effects and custom engraving.
        </p>

        <textarea
          placeholder="Describe your mirror (size, theme, colors) — serious inquiries only. Include details."
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ width: "100%", padding: 10, marginTop: 15 }}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files) setFile(e.target.files[0]);
          }}
          style={{ marginTop: 15 }}
        />

        <button
          type="submit"
          style={{
            marginTop: 20,
            padding: "12px 24px",
            background: "white",
            color: "black",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Request Custom Build
        </button>
      </form>
    </main>
  );
}