"use client"

import { useState } from "react"

export default function Home() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) {
      console.log("No file selected")
      return
    }

    console.log("File selected:", file.name)

    const url = URL.createObjectURL(file)

    // FORCE state refresh
    setPreviewUrl(null)
    setTimeout(() => {
      setPreviewUrl(url)
    }, 50)
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

            {/* Frame */}
            <div className="absolute inset-0 rounded-xl border-4 border-green-500 shadow-[0_0_25px_#00ff99]" />

            {/* Depth */}
            {[...Array(8)].map((_, i) => {
              const scale = 1 - i * 0.08
              const opacity = 1 - i * 0.12

              return (
                <div
                  key={i}
                  className="absolute inset-0 rounded-xl"
                  style={{
                    transform: `scale(${scale})`,
                    opacity,
                    border: "2px solid rgba(0,255,150,0.6)",
                    boxShadow: `0 0 ${10 + i * 5}px #00ff99`
                  }}
                />
              )
            })}

            {/* IMAGE */}
            <div className="absolute inset-0 flex items-center justify-center">

              {[...Array(4)].map((_, i) => {
                const scale = 1 - i * 0.12
                const opacity = [1, 0.6, 0.3, 0.15][i]

                return (
                  <img
                    key={i}
                    src={previewUrl ? previewUrl : "/images/mirror1.jpg"}
                    alt="preview"
                    className="absolute w-[70%] h-[70%] object-contain"
                    style={{
                      transform: `scale(${scale})`,
                      opacity,
                      filter:
                        i === 0
                          ? "brightness(1.2) contrast(1.1)"
                          : "brightness(1.5) blur(0.6px)"
                    }}
                  />
                )
              })}

            </div>

            {/* Glass */}
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

          <img src="/images/mirror1.jpg" className="rounded-xl" />
          <img src="/images/mirror2.jpg" className="rounded-xl" />
          <img src="/images/mirror3.jpg" className="rounded-xl" />

        </div>
      </section>

    </main>
  )
}