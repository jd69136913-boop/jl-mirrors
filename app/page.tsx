"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(86400);
  const [color, setColor] = useState("#00ff88");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  function handleFileChange(e: any) {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("message", message);
    formData.append("email", email);
    formData.append("color", color);
    if (file) formData.append("file", file);

    await fetch("https://formspree.io/f/xqegzdrw", {
      method: "POST",
      body: formData,
    });

    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-12">

      {/* HERO */}
      <section className="w-full max-w-5xl text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Custom LED Infinity Mirrors
        </h1>

        <p className="text-gray-400 mb-2">
          Hand-built. One-of-a-kind. Designed to stand out.
        </p>

        <p className="text-xs text-gray-500 mb-4">
          Trusted by customers for custom one-of-a-kind builds
        </p>

        <div className="bg-green-500 text-black px-6 py-2 rounded-full font-bold inline-block">
          🔥 Limited Build Slots Available This Week
        </div>
      </section>

      {/* CONVERSION BOX */}
      <section className="w-full max-w-2xl bg-zinc-900 p-8 rounded-2xl shadow-lg border border-green-500/20">

        <div className="flex flex-col gap-6">

          <h2 className="text-2xl font-bold text-center">
            Secure Your Build Slot
          </h2>

          {/* TIMER */}
          <div className="text-center text-green-400 font-bold text-lg">
            ⏳ Slots reset in: {hours}h {minutes}m {seconds}s
          </div>

          {/* URGENCY */}
          <p className="text-center text-green-400 text-sm font-semibold">
            Most builds are reserved within hours
          </p>

          <p className="text-gray-400 text-center">
            A $50 deposit locks your spot.
          </p>

          {/* DEPOSIT */}
          <a
            href="https://cash.app/$Jamie6913/50"
            target="_blank"
            className="block text-center bg-green-500 text-black font-bold py-5 rounded-xl text-xl hover:scale-105 transition shadow-lg shadow-green-500/30"
          >
            Pay $50 Deposit
          </a>

          {/* COLOR PICKER */}
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">Choose LED Color</p>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-16 h-10 cursor-pointer"
            />
          </div>

          {/* PREVIEW */}
          {preview && (
            <div className="flex justify-center">
              <div className="relative w-64 h-64 rounded-xl overflow-hidden">

                <div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    border: `2px solid ${color}`,
                    boxShadow: `0 0 40px ${color}`,
                    animation: "pulse 2.5s infinite"
                  }}
                />

                {[...Array(6)].map((_, i) => (
                  <img
                    key={i}
                    src={preview}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      transform: `scale(${1 - i * 0.08})`,
                      opacity: 0.15,
                      filter: `blur(${i * 1.5}px)`
                    }}
                  />
                ))}

                <img
                  src={preview}
                  className="relative w-full h-full object-cover z-10"
                />
              </div>
            </div>
          )}

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* EMAIL FIX */}
              <input
                type="email"
                required
                placeholder="Enter your email (required)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 rounded bg-black border-2 border-green-500 text-white placeholder-gray-500 focus:ring-2 focus:ring-green-500 outline-none"
              />

              {/* MESSAGE */}
              <textarea
                required
                placeholder="Describe your custom mirror"
                className="w-full p-4 rounded bg-black border border-gray-700"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              {/* UPLOAD */}
              <label className="block border-2 border-dashed border-green-500 p-6 text-center rounded-xl cursor-pointer hover:bg-green-500/10 transition">
                <span className="text-green-400 font-bold">
                  Upload Your Design (Required to Build)
                </span>

                <input
                  type="file"
                  required
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>

              {/* CONFIRMATION */}
              {file && (
                <p className="text-green-400 text-sm text-center">
                  ✅ Image uploaded: {file.name}
                </p>
              )}

              {/* PRICE FLEX */}
              <p className="text-center text-xs text-gray-500">
                Final price depends on design complexity and lighting effects
              </p>

              {/* TRUST BOOST */}
              <p className="text-center text-xs text-gray-400">
                Trusted builds. Real customers. Custom-crafted results.
              </p>

              {/* SPACING FIX */}
              <div className="mt-4"></div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-500 transition"
              >
                Submit Build Request
              </button>

              {/* MICRO CONFIDENCE */}
              <p className="text-xs text-gray-500 text-center">
                We respond within 24 hours. Your design is reviewed personally.
              </p>

            </form>
          ) : (
            <div className="text-center space-y-4">
              <p className="text-green-400 font-bold text-xl">
                Request Received
              </p>

              <p className="text-gray-400">
                To secure your build slot, complete your deposit below:
              </p>

              <a
                href="https://cash.app/$Jamie6913/50"
                target="_blank"
                className="block bg-green-500 text-black font-bold py-4 rounded-xl"
              >
                Complete Deposit
              </a>
            </div>
          )}

        </div>
      </section>

    </main>
  );
}