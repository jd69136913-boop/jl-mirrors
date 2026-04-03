"use client";

import { useState } from "react";

export default function Home() {
  const [size, setSize] = useState("Large ($500)");
  const [extras, setExtras] = useState({
    glow: false,
    remote: false,
  });

  const basePrice = size.includes("500") ? 500 : 300;

  const total =
    basePrice +
    (extras.glow ? 75 : 0) +
    (extras.remote ? 25 : 0);

  return (
    <main style={{ background: "#000", color: "#fff", fontFamily: "Arial" }}>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "40px 20px" }}>
        <h1>Custom Infinity Mirrors — Built For You</h1>
        <p style={{ color: "#aaa" }}>
          Only a few build slots available each week
        </p>

        <img
          src="/images/mirror1.jpg"
          style={{
            width: "100%",
            maxWidth: "400px",
            borderRadius: "12px",
            boxShadow: "0 0 40px rgba(0,255,255,0.3)",
            marginTop: "20px",
          }}
        />
      </section>

      {/* GALLERY */}
      <section style={{ padding: "20px" }}>
        <h2 style={{ textAlign: "center" }}>Recent Builds</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
          marginTop: "20px"
        }}>
          <img src="/images/mirror2.jpg" />
          <img src="/images/mirror3.jpg" />
          <img src="/images/mirror6.jpg" />
          <img src="/images/mirror7.jpg" />
        </div>
      </section>

      {/* ORDER FORM */}
      <section style={{ padding: "40px 20px", maxWidth: "500px", margin: "auto" }}>
        <h2 style={{ textAlign: "center" }}>Start Your Custom Build</h2>

        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          style={{ marginTop: "20px" }}
        >

          <input
            name="name"
            placeholder="Your Name"
            required
            style={inputStyle}
          />

          <input
            name="email"
            placeholder="Your Email"
            required
            style={inputStyle}
          />

          <input
            type="file"
            name="file"
            style={inputStyle}
          />

          <select
            name="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            style={inputStyle}
          >
            <option>Small ($300)</option>
            <option>Large ($500)</option>
          </select>

          <div style={{ marginTop: "20px" }}>
            <h3>Upgrade Your Build</h3>

            <label>
              <input
                type="checkbox"
                checked={extras.glow}
                onChange={() =>
                  setExtras({ ...extras, glow: !extras.glow })
                }
              />
              🔥 RGB Glow (+$75)
            </label>

            <br />

            <label>
              <input
                type="checkbox"
                checked={extras.remote}
                onChange={() =>
                  setExtras({ ...extras, remote: !extras.remote })
                }
              />
              🎮 Remote Control (+$25)
            </label>
          </div>

          <textarea
            name="notes"
            placeholder="Describe your custom vision..."
            style={{ ...inputStyle, height: "100px" }}
          />

          {/* PRICE DISPLAY */}
          <div style={{ marginTop: "20px", fontSize: "18px" }}>
            Estimated Build: <strong>${total}</strong>
          </div>

          {/* CTA */}
          <button
            type="submit"
            style={{
              marginTop: "20px",
              width: "100%",
              padding: "15px",
              background: "#00ff88",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "10px",
              border: "none",
            }}
          >
            Submit Custom Request
          </button>

        </form>
      </section>

    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  borderRadius: "8px",
  border: "1px solid #333",
  background: "#111",
  color: "#fff",
};