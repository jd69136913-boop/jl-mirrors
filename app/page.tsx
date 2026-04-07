"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
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
        <div className="mb-8 rounded-2xl overflow-hidden shadow-lg shadow-green-500/20 bg-black p-4">
          <img
            src="/images/mirror.jpg"
            alt="Custom Infinity Mirror"
            className="w-full max-h-[420px] object-contain mx-auto"
          />
        </div>

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

      {/* GALLERY */}
      <section className="w-full max-w-5xl mb-16">
        <h2 className="text-xl mb-4 text-center">Recent Builds</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="/images/mirror1.jpg" className="rounded-xl w-full object-cover" />
          <img src="/images/mirror2.jpg" className="rounded-xl w-full object-cover" />
          <img src="/images/mirror3.jpg" className="rounded-xl w-full object-cover" />
        </div>
      </section>

      {/* CONVERSION BOX */}
      <section className="w-full max-w-2xl bg-zinc-900 p-8 rounded-2xl shadow-lg border border-green-500/20">
        <div className="flex flex-col gap-6">

          <h2 className="text-2xl font-bold text-center">
            Secure Your Build Slot
          </h2>

          <div className="text-center text-green-400 font-bold text-lg">
            ⏳ Slots reset in: {hours}h {minutes}m {seconds}s
          </div>

          <p className="text-gray-400 text-center">
            A $50 deposit locks your spot. Only a few builds are accepted each week.
          </p>

          <a
            href="https://cash.app/$Jamie6913/50"
            target="_blank"
            className="block text-center bg-green-500 text-black font-bold py-5 rounded-xl text-xl hover:scale-105 transition shadow-lg shadow-green-500/30"
          >
            Pay $50 Deposit
          </a>

          <p className="text-center text-green-400 font-semibold">
            Step 1: Pay deposit → Step 2: Submit your build details below
          </p>

          <ul className="text-sm text-gray-400 space-y-2 text-center leading-relaxed">
            <li>✔ Deposit secures your spot</li>
            <li>✔ You approve design before final build</li>
            <li>✔ Built exactly to your specs</li>
          </ul>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">

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

              <div className="text-lg font-bold text-green-400 text-center">
                Estimated Price: {priceMap[size]}
              </div>

              <textarea
                required
                placeholder="Describe your custom mirror"
                className="w-full p-4 rounded bg-black border border-gray-700"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              {/* FILE UPLOAD WITH FEEDBACK */}
              <label className="block border-2 border-dashed border-green-500 p-6 text-center rounded-xl cursor-pointer hover:bg-green-500/10 transition">
                <span className="block text-lg font-bold text-green-400 mb-2">
                  Upload Your Design (REQUIRED)
                </span>

                <input
                  type="file"
                  required
                  onChange={(e) => {
                    const selected = e.target.files?.[0];
                    if (selected) {
                      setFile(selected);
                      setFileName(selected.name);
                    }
                  }}
                  className="hidden"
                />

                {/* FEEDBACK */}
                {fileName && (
                  <div className="mt-3 text-green-400 font-semibold">
                    ✅ File ready: {fileName}
                  </div>
                )}
              </label>

              <button
                type="submit"
                className="w-full bg-green-600 py-4 rounded-xl font-bold"
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