"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [size, setSize] = useState("medium");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(86400);
  const [color, setColor] = useState("#22c55e");

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

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-12">

      {/* HERO */}
      <section className="w-full max-w-5xl text-center mb-12">
        <div className="flex justify-center mb-6">
          <img
            src="/images/mirror.jpg"
            className="max-w-[420px] w-full h-auto rounded-xl object-contain"
          />
        </div>

        <h1 className="text-4xl font-bold mb-2">
          Custom LED Infinity Mirrors
        </h1>

        <p className="text-gray-400 mb-4">
          Hand-built. One-of-a-kind. Designed to stand out.
        </p>

        <div className="bg-green-500 text-black px-5 py-2 rounded-full font-bold inline-block">
          🔥 Limited Build Slots Available
        </div>
      </section>

      {/* FORM */}
      <section className="w-full max-w-2xl bg-zinc-900 p-8 rounded-2xl border border-green-500/20">

        <h2 className="text-2xl font-bold text-center mb-4">
          Start Your Custom Build
        </h2>

        <div className="text-center text-green-400 mb-4">
          ⏳ {hours}h {minutes}m {seconds}s remaining
        </div>

        <a
          href="https://cash.app/$Jamie6913/50"
          target="_blank"
          className="block text-center bg-green-500 text-black font-bold py-4 rounded-xl mb-6"
        >
          Pay $50 Deposit
        </a>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-black border border-gray-600"
            />

            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full p-3 rounded bg-black border border-gray-700"
            >
              <option value="small">Small (~$150)</option>
              <option value="medium">Medium (~$400)</option>
              <option value="large">Large (~$900)</option>
            </select>

            <textarea
              required
              placeholder="Describe your custom mirror"
              className="w-full p-4 rounded bg-black border border-gray-700"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            {/* COLOR */}
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-2">Choose LED Color</p>
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-16 h-10"
              />
            </div>

            {/* UPLOAD */}
            <label className="block border-2 border-dashed border-green-500 p-6 text-center rounded-xl cursor-pointer">
              <span className="text-green-400 font-bold">Upload Your Design</span>

              <input
                type="file"
                required
                accept="image/png,image/jpeg"
                onChange={(e) => {
                  const selected = e.target.files?.[0];
                  if (selected) {
                    setFile(selected);
                    setFileName(selected.name);
                    setPreview(URL.createObjectURL(selected));
                  }
                }}
                className="hidden"
              />

              {fileName && (
                <div className="mt-2 text-green-400">
                  ✅ {fileName}
                </div>
              )}
            </label>

            {/* 🔥 REALISTIC INFINITY PREVIEW */}
            {preview && (
              <div className="text-center mt-6">

                <p className="text-sm text-gray-400 mb-2">
                  Live Mirror Preview
                </p>

                <div className="flex justify-center">

                  <div className="relative w-[300px] h-[300px] bg-black rounded-xl overflow-hidden isolate">

                    {/* LED FALLOFF */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `radial-gradient(circle, ${color}33 0%, transparent 70%)`
                      }}
                    />

                    {/* FRAME */}
                    <div
                      className="absolute inset-0 rounded-xl"
                      style={{
                        border: `3px solid ${color}`,
                        boxShadow: `0 0 20px ${color}, inset 0 0 15px ${color}`
                      }}
                    />

                    {/* DEPTH */}
                    {[...Array(3)].map((_, i) => (
                      <img
                        key={i}
                        src={preview}
                        className="absolute object-contain pointer-events-none"
                        style={{
                          top: `${30 + i * 12}px`,
                          left: `${30 + i * 12}px`,
                          width: `calc(100% - ${(60 + i * 24)}px)`,
                          height: `calc(100% - ${(60 + i * 24)}px)`,
                          opacity: 0.2 - i * 0.05,
                          transform: `scale(${1 - i * 0.08})`,
                        }}
                      />
                    ))}

                    {/* MAIN IMAGE */}
                    <img
                      src={preview}
                      className="absolute object-contain pointer-events-none"
                      style={{
                        width: "70%",
                        height: "70%",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        filter: "brightness(0.9) contrast(1.15)"
                      }}
                    />

                    {/* GLASS REFLECTION */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(120deg, rgba(255,255,255,0.15) 0%, transparent 40%)"
                      }}
                    />

                  </div>

                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-green-600 py-4 rounded-xl font-bold"
            >
              Submit Build Request
            </button>

          </form>
        ) : (
          <div className="text-center text-green-400 font-bold">
            Request Sent — Check Your Email
          </div>
        )}

      </section>
    </main>
  );
}