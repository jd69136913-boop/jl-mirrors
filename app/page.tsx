'use client'

import { useState } from 'react'

export default function Page() {
  const [fileName, setFileName] = useState('')
  const [preview, setPreview] = useState<string | null>(null)
  const [color, setColor] = useState('#00ff99')

  const handleFileChange = (e: any) => {
    const file = e.target.files[0]
    if (file) {
      setFileName(file.name)
      setPreview(URL.createObjectURL(file))
    }
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">

      {/* HERO HEADER */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">
          Custom LED Infinity Mirrors
        </h1>

        <p className="text-gray-400">
          Hand-built. One-of-a-kind. Designed to stand out.
        </p>

        <p className="text-gray-400 mt-1">
          Fully custom designs. Built from your idea.
        </p>

        <div className="mt-4 text-green-400 font-semibold">
          🔥 Limited Build Slots Available This Week
        </div>
      </div>

      {/* HERO IMAGE WITH GLOW */}
      <div className="max-w-4xl mx-auto mt-8 relative group">

        <div className="absolute inset-0 blur-2xl opacity-40 bg-green-500 rounded-2xl group-hover:opacity-60 transition"></div>

        <img
          src="/images/mirror.jpg"
          alt="Custom Infinity Mirror"
          className="relative rounded-2xl shadow-[0_0_80px_rgba(0,255,150,0.7)] w-full object-cover max-h-[600px] group-hover:scale-105 transition duration-500"
        />

      </div>

      {/* CTA UNDER HERO */}
      <div className="text-center mt-6">
        <button className="bg-green-500 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition">
          Start Your Custom Build
        </button>
      </div>

      {/* IMAGE GALLERY */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl mx-auto">
        <img src="/images/mirror1.jpg" className="rounded-xl" />
        <img src="/images/mirror2.jpg" className="rounded-xl" />
        <img src="/images/mirror3.jpg" className="rounded-xl" />
        <img src="/images/mirror4.jpg" className="rounded-xl" />
      </div>

      {/* HOW IT WORKS */}
      <div className="max-w-3xl mx-auto mt-12 text-center text-gray-300 space-y-1">
        <p>1. Upload your design</p>
        <p>2. We send a live preview</p>
        <p>3. You approve it</p>
        <p>4. We build + ship</p>
      </div>

      {/* FORM */}
      <div className="max-w-xl mx-auto mt-12 bg-zinc-900 p-6 rounded-2xl border border-green-500 shadow-lg">

        <h2 className="text-xl font-semibold text-center mb-4">
          Start Your Custom Build
        </h2>

        {/* COLOR PICKER */}
        <div className="text-center mb-4">
          <p className="text-sm mb-2">Choose LED Color</p>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-16 h-10 border-none"
          />
        </div>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Get your quote + design preview (required)"
          className="w-full p-3 mb-3 rounded bg-black border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* PHONE */}
        <input
          type="tel"
          placeholder="Phone number (we can text your preview)"
          className="w-full p-3 mb-3 rounded bg-black border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* DESCRIPTION */}
        <textarea
          placeholder="Describe your custom mirror..."
          className="w-full p-3 mb-3 rounded bg-black border border-green-500"
        />

        {/* FILE UPLOAD */}
        <label className="block border-2 border-dashed border-green-500 p-4 text-center rounded cursor-pointer mb-3 hover:bg-green-500/10 transition">
          Upload Your Design (Required to Start Build)
          <input type="file" onChange={handleFileChange} className="hidden" />
        </label>

        {fileName && (
          <p className="text-green-400 text-sm mb-2 text-center">
            ✅ {fileName} uploaded
          </p>
        )}

        {preview && (
          <img src={preview} className="rounded mb-3 max-h-40 mx-auto" />
        )}

        {/* DEPOSIT BUTTON */}
        <button className="w-full bg-green-500 text-black py-3 rounded font-bold text-lg hover:scale-105 transition">
          Pay $50 Deposit
        </button>

        {/* TRUST TEXT */}
        <div className="text-xs text-gray-400 mt-3 text-center">
          ✔ Applied to final price<br />
          ✔ No commitment until approval<br />
          ✔ Built after your confirmation
        </div>

      </div>

    </main>
  )
}