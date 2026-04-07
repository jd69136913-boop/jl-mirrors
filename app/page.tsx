"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [size, setSize] = useState("medium");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(86400);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  async function handleSubmit(e: any) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("message", message);
    formData.append("size", size);
    formData.append("email", email);
    if (file) formData.append("file", file);

    await fetch("https://formspree.io/f/xqegzdrw", {
      method: "POST",
      body: formData,
    });

    setSubmitted(true);
  }

  function handleFileChange(e: any) {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
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

      {/* CONVERSION */}
      <section className="w-full max-w-2xl bg-zinc-900 p-8 rounded-2xl shadow-lg border border-green-500/20">

        <div className="flex flex-col gap-6">

          <h2 className="text-2xl font-bold text-center">
            Secure Your Build Slot
          </h2>

          <div className="text-center text-green-400 font-bold text-lg">
            ⏳ Slots reset in: {hours}h {minutes}m {seconds}s
          </div>

          <a
            href="https://cash.app/$Jamie6913/50"
            target="_blank"
            className="block text-center bg-green-500 text-black font-bold py-5 rounded-xl text-xl hover:scale-105 transition shadow-lg shadow-green-500/30"
          >
            Pay $50 Deposit
          </a>

          {/* 🔥 ANIMATED INFINITY PREVIEW */}
          {preview && (
            <div className="flex justify-center mt-4">
              <div className="relative w-64 h-64 rounded-xl overflow-hidden group">

                {/* animated glow */}
                <div className="absolute inset-0 rounded-xl border border-green-500 animate-pulse"></div>

                <div className="absolute inset-0 rounded-xl shadow-[0_0_50px_rgba(0,255,150,0.5)] animate-[pulse_2.5s_infinite]"></div>

                {/* depth layers with motion */}
                {[...Array(6)].map((_, i) => (
                  <img
                    key={i}
                    src={preview}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{
                      transform: `scale(${1 - i * 0.08}) translateY(${i * 2}px)`,
                      opacity: 0.15,
                      filter: `blur(${i * 1.5}px) brightness(${1 - i * 0.1})`,
                    }}
                  />
                ))}

                {/* main image */}
                <img
                  src={preview}
                  className="relative w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-105"
                />

              </div>
            </div>
          )}

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded bg-black border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
              />

              <textarea
                required
                placeholder="Describe your custom mirror"
                className="w-full p-4 rounded bg-black border border-gray-700"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <label className="block border-2 border-dashed border-green-500 p-6 text-center rounded-xl cursor-pointer">
                Upload Design
                <input
                  type="file"
                  required
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-500 transition"
              >
                Submit Build Request
              </button>

            </form>
          ) : (
            <div className="text-center text-green-400 font-bold text-xl">
              Request Sent — Check Your Email
            </div>
          )}

        </div>
      </section>

    </main>
  );
}