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
    <main className="min-h-screen bg-black text-white p-6">

      {/* HERO */}
      <section className="text-center mb-12">
        <img
          src="/images/mirror.jpg"
          alt="Hero Mirror"
          className="mx-auto w-full max-w-[500px] rounded-xl shadow-[0_0_40px_#00ff99]"
        />

        <h1 className="text-4xl font-bold mt-6">
          Custom LED Infinity Mirrors
        </h1>

        <p className="text-gray-400 mt-2">
          Hand-built. One-of-a-kind. Designed to stand out.
        </p>

        <div className="mt-3 inline-block bg-green-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
          🔥 Limited Build Slots Available This Week
        </div>
      </section>

      {/* PREVIEW */}
      <section className="text-center mb-16">
        <h2 className="text-2xl font-semibold mb-4">
          Preview Your Design
        </h2>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-6 block mx-auto text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-green-500 file:text-black"
        />

        <div className="flex justify-center">
          <div className="relative w-[320px] h-[320px]">

            {/* Frame Glow */}
            <div className="absolute inset-0 rounded-xl border-4 border-green-500 shadow-[0_0_25px_#00ff99]" />

            {/* Depth Layers */}
            {[...Array(8)].map((_, i) => {
              const scale = 1 - i * 0.08
              const opacity = 1 - i * 0.12

              return (
                <div
                  key={i}
                  className="absolute inset-0"
                  style={{
                    transform: `scale(${scale})`,
                    opacity: opacity,
                    border: "2px solid rgba(0,255,150,0.6)",
                    borderRadius: "12px",
                    boxShadow: `0 0 ${10 + i * 5}px #00ff99`
                  }}
                />
              )
            })}

            {/* LOGO / IMAGE DEPTH (with fallback) */}
            {[...Array(6)].map((_, i) => {
              const scale = 1 - i * 0.1
              const opacity = 1 - i * 0.18

              return (
                <img
                  key={i}
                  src={previewUrl || "/images/mirror1.jpg"}
                  alt="preview"
                  className="absolute w-[160px] h-[160px] object-contain left-1/2 top-1/2"
                  style={{
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    opacity: opacity,
                    filter: "brightness(1.2) contrast(1.1)"
                  }}
                />
              )
            })}

            {/* Glass Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-xl pointer-events-none" />

          </div>
        </div>

        <button className="mt-6 bg-green-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-green-400 transition">
          Start Your Custom Build
        </button>
      </section>

      {/* GALLERY */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-6">
          Recent Builds
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          <img
            src="/images/mirror1.jpg"
            alt="Build 1"
            className="rounded-xl shadow-lg object-cover w-full"
          />

          <img
            src="/images/mirror2.jpg"
            alt="Build 2"
            className="rounded-xl shadow-lg object-cover w-full"
          />

          <img
            src="/images/mirror3.jpg"
            alt="Build 3"
            className="rounded-xl shadow-lg object-cover w-full"
          />

        </div>
      </section>

    </main>
  )
}