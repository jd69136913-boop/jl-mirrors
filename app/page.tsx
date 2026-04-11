"use client";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const tunnelRef = useRef<HTMLDivElement | null>(null);
  const [image, setImage] = useState<string | null>(null);

  // BUILD DEPTH LAYERS
  useEffect(() => {
    if (!tunnelRef.current) return;

    const tunnel = tunnelRef.current;
    tunnel.innerHTML = "";

    for (let i = 0; i < 8; i++) {
      const layer = document.createElement("div");
      layer.className = "layer";
      tunnel.appendChild(layer);
    }
  }, []);

  // APPLY IMAGE TO ALL LAYERS
  useEffect(() => {
    if (!image) return;

    const layers = document.querySelectorAll(".layer");

    layers.forEach((layer) => {
      (layer as HTMLElement).style.backgroundImage = `url(${image})`;
    });
  }, [image]);

  return (
    <div style={{ background: "black", minHeight: "100vh", color: "white", textAlign: "center" }}>
      <h1>Custom LED Infinity Mirrors</h1>

      {/* UPLOAD */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (!file) return;
          setImage(URL.createObjectURL(file));
        }}
      />

      {/* MIRROR */}
      <div className="mirror-wrap">
        <div className="mirror">
          <div className="tunnel" ref={tunnelRef}></div>

          {image && <img src={image} className="center-img" />}

          <div className="fade"></div>
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .mirror-wrap {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        .mirror {
          width: 300px;
          height: 300px;
          border-radius: 20px;
          background: black;
          box-shadow: 0 0 40px #00ffff;
          position: relative;
          overflow: hidden;
        }

        .tunnel {
          position: absolute;
          inset: 0;
        }

        .layer {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px solid #00ffff;
          border-radius: 20px;
          background-size: cover;
          background-position: center;
          opacity: 0.15;
          box-shadow: 0 0 15px #00ffff;
        }

        .layer:nth-child(1) { transform: scale(1); opacity: 0.2; }
        .layer:nth-child(2) { transform: scale(0.9); }
        .layer:nth-child(3) { transform: scale(0.8); }
        .layer:nth-child(4) { transform: scale(0.7); }
        .layer:nth-child(5) { transform: scale(0.6); }
        .layer:nth-child(6) { transform: scale(0.5); }
        .layer:nth-child(7) { transform: scale(0.4); }
        .layer:nth-child(8) { transform: scale(0.3); }

        .center-img {
          position: absolute;
          width: 55%;
          height: 55%;
          object-fit: contain;
          filter: brightness(0) invert(1);
          opacity: 0.9;
        }

        .fade {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, transparent 30%, black 80%);
        }
      `}</style>
    </div>
  );
}