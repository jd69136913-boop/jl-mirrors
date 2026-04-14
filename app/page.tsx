"use client"

import { useState } from "react"

export default function Home() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-6">

      {/* HEADER */}
      <h1 className="text-3xl mb-2 text-center">
        Custom LED Infinity Mirrors
      </h1>
      <p className="text-gray-400 mb-10 text-center">
        Upload your design. See it come to life.
      </p>

      {/* SAMPLE IMAGES */}
      <div className="flex gap-6 mb-16 flex-wrap justify-center">
        <img src="/images/mirror1.jpg" className="w-48 rounded-lg" />
        <img src="/images/mirror2.jpg" className="w-48 rounded-lg" />
        <img src="/images/mirror3.jpg" className="w-48 rounded-lg" />
        <img src="/images/mirror4.jpg" className="w-48 rounded-lg" />
      </div>

      {/* UPLOAD SECTION */}
      <h2 className="text-xl mb-4">Preview Your Custom Mirror</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-6 block text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-green-500 file:text-black"
      />

      {/* INFINITY PREVIEW */}
      <div style={{ perspective: "900px" }}>
        <div
          className="relative flex items-center justify-center"
          style={{
            width: "320px",
            height: "320px",
            borderRadius: "20px",
            boxShadow: `
              0 0 15px #00ffcc,
              0 0 40px #00ffcc,
              inset 0 0 25px #00ffcc
            `,
            background: "black",
            overflow: "hidden",
            transformStyle: "preserve-3d",
          }}
        >

          {/* FRONT FACE IMAGE */}
          {previewUrl && (
            <img
              src={previewUrl}
              className="absolute left-1/2 top-1/2 object-contain"
              style={{
                width: "280px",
                height: "280px",
                transform: "translate(-50%, -50%)",
                zIndex: 20,
              }}
            />
          )}

          {/* DEPTH LAYERS */}
          {previewUrl &&
            [...Array(12)].map((_, i) => {
              const scale = 1 - i * 0.07
              const opacity = 1 - i * 0.09
              const blur = i * 0.8

              return (
                <img
                  key={i}
                  src={previewUrl}
                  className="absolute left-1/2 top-1/2 object-contain pointer-events-none"
                  style={{
                    width: "260px",
                    height: "260px",
                    transform: `
                      translate(-50%, -50%)
                      scale(${scale})
                      rotateX(6deg)
                      translateZ(${-i * 18}px)
                    `,
                    opacity: opacity,
                    filter: `
                      blur(${blur}px)
                      brightness(${1 - i * 0.05})
                    `,
                  }}
                />
              )
            })}
