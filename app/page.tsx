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
      <section style={{ textAlign: "center", padding: "60px 20px" }}>
        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
          Custom Infinity Mirrors
        </h1>

        <p style={{ color: "#aaa" }}>
          Built to order. Limited weekly slots.
        </p>

        <img
          src="/images/mirror1.jpg"
          alt="Infinity Mirror"
          style={{
            width: "100%",
            maxWidth: "450px",
            borderRadius: "12px",
            marginTop: "30px",
            objectFit: "cover",
            boxShadow: "0 0 40px rgba(0,255,255,0.35)",
          }}
        />
      </section>

      {/* GALLERY */}
      <section style={{ padding: "40px 20px" }}>
        <h2 style={{ textAlign: "center" }}>Recent Builds</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "12px",
            marginTop: "25px",
          }}
        >
          <img src="/images/mirror2.jpg" style={imgStyle} />
          <img src="/images/mirror3.jpg" style={imgStyle} />
          <img src="/images/mirror6.jpg" style={imgStyle} />
          <img src="/images/mirror7.jpg" style={imgStyle} />
          <img src="/images/mirror8.jpg" style={imgStyle} />
        </div>
      </section>

      {/* FORM */}
      <section
        style={{
          padding: "50px 20px",
          maxWidth: "500px",
          margin: "auto",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Start Your Custom Build
        </h2>

        <form
          action="https://formspree.io/f/xqegzdrw"
          method="POST"
        >
          <input type="hidden" name="source" value="website" />
          <input
            type="hidden"
            name="_redirect"
            value="https://jl-mirrors-git-main-jd69136913-boops-projects.vercel.app/thank-you"
          />

          <input name="name" placeholder="Your Name" required style={inputStyle} />
          <input name="email" placeholder="Your Email" required style={inputStyle} />

          <input type="file" name="file" style={inputStyle} />

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

          <div style={{ marginTop: "20px", fontSize: "18px" }}>
            Estimated Build: <strong>${total}</strong>
          </div>

          <button style={buttonStyle}>
            Submit Custom Request
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <section style={{ textAlign: "center", padding: "20px", color: "#555" }}>
        J&L Custom Infinity Mirrors
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

const imgStyle = {
  width: "100%",
  borderRadius: "8px",
};

const buttonStyle = {
  marginTop: "20px",
  width: "100%",
  padding: "15px",
  background: "#00ff88",
  color: "#000",
  fontWeight: "bold",
  borderRadius: "10px",
  border: "none",
  boxShadow: "0 0 20px rgba(0,255,136,0.4)",
};