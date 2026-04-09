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

  const priceMap: any = {
    small: "$150",
    medium: "$400",
    large: "$900",
  };

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
        <div className="mb-8 rounded-2xl bg-black p-4 border border-green-500/20">
          <img
            src="/images/mirror.jpg"
            className="w-full max-h-[420px] object-contain mx-auto"
          />
        </div>

        <h1 className="text-4xl font-bold mb-4">
          Custom LED Infinity Mirrors
        </h1>

        <p className="text-gray-400 mb-2">
          Hand-built. One-of-a-kind. Designed to stand out.
        </p>

        <div className="bg-green-500 text-black px-6 py-2 rounded-full font-bold inline-block">
          🔥 Limited Build Slots Available This Week
        </div>
      </section>

      {/* GALLERY */}
      <section className="w-full max-w-5xl mb-16">
        <h2 className="text-xl mb-6 text-center">Recent Builds</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-black p-4 rounded-xl border border-green-500/20 flex justify-center">
            <img src="/images/mirror1.jpg" className="max-h-[250px]" />
          </div>

          <div className="bg-black p-4 rounded-xl border border-green-500/20 flex justify-center">
            <img src="/images/mirror2.jpg" className="max-h-[250px]" />
          </div>

          <div className="bg-black p-4 rounded-xl border border-green-500/20 flex justify-center">
            <img src="/images/mirror3.jpg" className="max-h-[250px]" />
          </div>

        </div>
      </section>

      {/* FORM */}
      <section className="w-full max-w-2xl bg-zinc-900 p-8 rounded-2xl border border-green-500/20">

        <h2 className="text-2xl font-bold text-center mb-4">
          Secure Your Build Slot
        </h2>

        <div className="text-center text-green-400 font-bold mb-4">
          ⏳ {hours}h {minutes}m {seconds}s
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

            <div className="text-center text-green-400 font-bold">
              Estimated Price: {priceMap[size]}
            </div>

            <textarea
              required
              placeholder="Describe your custom mirror"
              className="w-full p-4 rounded bg-black border border-gray-700"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            {/* COLOR */}
            <div className="text-center">
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>

            {/* UPLOAD */}
            <label className="block border-2 border-dashed border-green-500 p-6 text-center rounded-xl cursor-pointer">
              Upload Your Design
              <input
                type="file"
                required
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
              {fileName && <div className="mt-2 text-green-400">{fileName}</div>}
            </label>

            {/* 🔥 WORKING DEPTH PREVIEW */}
            {preview && (
              <div className="flex justify-center mt-6">

                <div
                  className="relative w-[260px] h-[260px] rounded-xl"
                  style={{ boxShadow: `0 0 40px ${color}` }}
                >

                  {[...Array(8)].map((_, i) => (
                    <img
                      key={i}
                      src={preview}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        transform: `translate(-50%, -50%) scale(${1 - i * 0.1})`,
                        opacity: 1 - i * 0.12,
                        filter: `invert(1) blur(${i}px)`
                      }}
                    />
                  ))}

                  <div
                    className="absolute inset-0 rounded-xl"
                    style={{
                      border: `3px solid ${color}`,
                      boxShadow: `inset 0 0 20px ${color}`
                    }}
                  />

                </div>

              </div>
            )}

            <button className="w-full bg-green-600 py-4 rounded-xl font-bold">
              Submit Build Request
            </button>

          </form>
        ) : (
          <div className="text-center text-green-400 font-bold">
            Request Sent
          </div>
        )}

      </section>

    </main>
  );
}