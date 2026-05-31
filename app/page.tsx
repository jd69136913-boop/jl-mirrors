"use client"

import { useState, useMemo } from "react"

export default function Home() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)

  const [email, setEmail] = useState("")
  const [notes, setNotes] = useState("")
  const [size, setSize] = useState<"small" | "medium" | "large">("medium")

  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  
  // ========================
  // FILE UPLOAD
  // ========================
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    const selected = files[0]
    const url = URL.createObjectURL(selected)

    setPreviewUrl(url)
    setFile(selected)
  }

  
  
    

   

    
   

  // ========================
  // PRICING ENGINE
  // ========================
  const price = useMemo(() => {
    if (size === "small") return "$150 – $300"
    if (size === "medium") return "$300 – $600"
    return "$600 – $1200"
  }, [size])

  // ========================
  // SUBMIT
  // ========================
  const handleSubmit = async () => {
    if (!file) {
      setError("Upload a design first")
      return
    }

    setSubmitting(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append("email", email)
      formData.append("notes", notes)
      formData.append("size", size)
      formData.append("attachment", file)

      const res = await fetch("https://formspree.io/f/xqegzdrw", {
        method: "POST",
        body: formData,
      })

      if (!res.ok) throw new Error("Failed")

      setSubmitted(true)
    } catch {
      setError("Something went wrong. Try again.")
    }

    setSubmitting(false)
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-6">

      {/* ================= HEADER ================= */}
      <h1 className="text-4xl font-bold text-center mb-2">
        Custom LED Infinity Mirrors
      </h1>

      <p className="text-gray-400 text-center mb-6">
        Upload your design and watch it come to life instantly.
      </p>

      {/* ================= URGENCY ================= */}
      <p className="text-green-400 mb-10">
        ⚡ Only 3 custom build slots available this week
      </p>

      {/* ================= SAMPLE IMAGES ================= */}
      <div className="flex gap-4 mb-14 flex-wrap justify-center">
        <img src="/images/mirror1.jpg" className="w-40 rounded-lg" />
        <img src="/images/mirror2.jpg" className="w-40 rounded-lg" />
        <img src="/images/mirror3.jpg" className="w-40 rounded-lg" />
      </div>

      {/* ================= UPLOAD ================= */}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-6 block text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-green-500 file:text-black"
      />

      {/* ================= PREVIEW ================= */}
      <div style={{ perspective: "900px" }}>
        <div
          className="relative flex items-center justify-center"
          style={{
            width: "320px",
            height: "320px",
            borderRadius: "20px",
            boxShadow: `
              0 0 20px rgba(0,255,200,0.8),
              0 0 60px rgba(0,255,200,0.6),
              inset 0 0 30px rgba(0,255,200,0.4)
            `,
            background: "black",
            overflow: "hidden",
            transformStyle: "preserve-3d",
          }}
        >
          {/* FRONT IMAGE */}
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

          {/* DEPTH EFFECT */}
          {previewUrl &&
            [...Array(12)].map((_, i) => {
              const scale = 1 - i * 0.07
              const opacity = 1 - i * 0.08
              const blur = i * 0.8

              return (
                <img
                  key={i}
                  src={previewUrl}
                  className="absolute left-1/2 top-1/2 object-contain"
                  style={{
                    width: "280px",
                    height: "280px",
                    transform: `
                      translate(-50%, -50%)
                      scale(${scale})
                      translateZ(${-i * 18}px)
                    `,
                    opacity: opacity,
                    filter: `blur(${blur}px) brightness(${1 - i * 0.05})`,
                  }}
                />
              )
            })}
        </div>
      </div>

      {/* ================= PRICING ================= */}
      <div className="mt-10 text-center">
        <h2 className="text-xl mb-2">Estimated Price</h2>

        <select
  value={size}
  onChange={(e) =>
    setSize(e.target.value as "small" | "medium" | "large")
  }
  className="bg-black border border-white/20 rounded px-4 py-2 mb-3"
>
  <option value="small">Small (Desk)</option>
  <option value="medium">Medium (Wall)</option>
  <option value="large">Large (Statement)</option>
</select>

        <p className="text-green-400 text-lg font-bold">{price}</p>
      </div>

      {/* ================= FORM ================= */}
      <div className="mt-10 w-full max-w-md">

        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-3 w-full rounded-xl border border-white/20 bg-black px-4 py-3"
        />

        <textarea
          placeholder="What do you want built?"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="mb-3 w-full rounded-xl border border-white/20 bg-black px-4 py-3"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-green-500 text-black font-bold py-3 rounded-xl hover:scale-105 transition"
        >
          {submitting ? "Sending..." : "Get My Custom Mirror"}
        </button>

        {/* SUCCESS */}
        {submitted && (
          <p className="text-green-400 mt-3 text-center">
            ✅ Request sent. I’ll contact you shortly.
          </p>
        )}

        {/* ERROR */}
        {error && (
          <p className="text-red-400 mt-3 text-center">
            {error}
          </p>
        )}

      </div>

    </main>
  )
}