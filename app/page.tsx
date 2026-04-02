"use client";

import { useState } from "react";

export default function Home() {
  const [preview, setPreview] = useState<string | null>(null);
  const [size, setSize] = useState("large");
  const [price, setPrice] = useState(500);
  const [upsellLED, setUpsellLED] = useState(false);
  const [upsellRemote, setUpsellRemote] = useState(false);

  const depositLink = "https://cash.app/$Jamie6913";
  const formAction = "https://formspree.io/f/xqegzdrw";

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "none",
    background: "#1a1a1a",
    color: "white"
  };

  const recalcPrice = (base: number, led: boolean, remote: boolean) => {
    let total = base;
    if (led) total += 75;
    if (remote) total += 25;
    setPrice(total);
  };

  const handleSizeChange = (value: string) => {
    setSize(value);
    let base = 500;
    if (value === "small") base = 300;
    if (value === "medium") base = 400;
    if (value === "large") base = 500;
    recalcPrice(base, upsellLED, upsellRemote);
  };

  const toggleLED = () => {
    const newVal = !upsellLED;
    setUpsellLED(newVal);
    recalcPrice(
      size === "small" ? 300 : size === "medium" ? 400 : 500,
      newVal,
      upsellRemote
    );
  };

  const toggleRemote = () => {
    const newVal = !upsellRemote;
    setUpsellRemote(newVal);
    recalcPrice(
      size === "small" ? 300 : size === "medium" ? 400 : 500,
      upsellLED,
      newVal
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        padding: "40px 20px"
      }}
    >
      <div style={{ maxWidth: "900px", width: "100%" }}>

        {/* HEADLINE */}
        <h1 style={{
          fontSize: "32px",
          textAlign: "center",
          marginBottom: "10px"
        }}>
          Custom Infinity Mirrors Built For You
        </h1>

        <p style={{
          textAlign: "center",
          opacity: 0.7,
          marginBottom: "30px"
        }}>
          Upload your design. See your build. Lock your slot.
        </p>

        {/* PREVIEW */}
        <div style={{
          background: "#111",
          padding: "25px",
          borderRadius: "12px",
          textAlign: "center",
          marginBottom: "20px",
          boxShadow: "0 0 40px rgba(0,255,200,0.15)"
        }}>
          <h3>Live Preview</h3>

          {preview ? (
            <img
              src={preview}
              style={{
                maxWidth: "100%",
                borderRadius: "10px"
              }}
            />
          ) : (
            <div style={{ opacity: 0.5 }}>
              Upload an image to preview
            </div>
          )}
        </div>

        {/* PRICE */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <div style={{ opacity: 0.5 }}>
            Typical builds: $800–$1500
          </div>

          <div style={{
            fontSize: "28px",
            color: "#00ffcc",
            fontWeight: "bold"
          }}>
            Your Price: ${price}
          </div>
        </div>

        {/* DEPOSIT */}
        <a
          href={depositLink}
          target="_blank"
          style={{
            display: "block",
            textAlign: "center",
            padding: "14px",
            background: "#00cc66",
            color: "black",
            borderRadius: "8px",
            marginBottom: "10px",
            fontWeight: "bold",
            textDecoration: "none"
          }}
        >
          🔥 Secure Your Build Slot ($50 Deposit)
        </a>

        <div style={{
          textAlign: "center",
          fontSize: "12px",
          opacity: 0.6,
          marginBottom: "30px"
        }}>
          Only 3 build slots available this week
        </div>

        {/* FORM */}
        <form action={formAction} method="POST">

          <input name="name" placeholder="Your Name" required style={inputStyle} />
          <input name="email" type="email" placeholder="Your Email" required style={inputStyle} />

          <input type="file" name="file" onChange={handleFileChange} style={inputStyle} />

          <select
            value={size}
            onChange={(e) => handleSizeChange(e.target.value)}
            style={inputStyle}
          >
            <option value="small">Small ($300)</option>
            <option value="medium">Medium ($400)</option>
            <option value="large">Large ($500)</option>
          </select>

          {/* UPSELLS */}
          <div style={{ marginBottom: "15px" }}>
            <label>
              <input type="checkbox" onChange={toggleLED} /> RGB Lighting Upgrade (+$75)
            </label>
            <br />
            <label>
              <input type="checkbox" onChange={toggleRemote} /> Remote Control (+$25)
            </label>
          </div>

          <textarea
            name="details"
            placeholder="Describe your custom vision..."
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              ...inputStyle,
              background: "#222",
              cursor: "pointer"
            }}
          >
            Submit Custom Request
          </button>

        </form>

      </div>
    </main>
  );
}