"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [size, setSize] = useState("medium");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
    <main className="min-h-screen bg-black text-white px-6 py-10">

      {/* HERO */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Custom LED Infinity Mirrors
        </h1>

        <p className="text-gray-400 mb-4">
          Hand-built. One-of-a-kind. Designed to stand out.
        </p>

        <div className="bg-green-500 text-black px-6 py-2 rounded-full font-bold inline-block">
          🔥 Limited Build Slots Available This Week
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-xl mb-4">Recent Builds</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="/images/mirror1.jpg" className="rounded-xl" />
          <img src="/images/mirror2.jpg" className="rounded-xl" />
          <img src="/images/mirror3.jpg" className="rounded-xl" />
        </div>
      </section>

      {/* CONVERSION SECTION */}
      <section className="max-w-3xl mx-auto mt-12 bg-zinc-900 p-8 rounded-2xl shadow-lg">

        <div className="flex flex-col gap-6">

          <h2 className="text-2xl font-bold">
            Secure Your Build Slot
          </h2>

          <p className="text-gray-400">
            A $50 deposit locks your spot. Only a few builds are accepted each week.
          </p>

          {/* DEPOSIT BUTTON */}
          <a
            href="https://cash.app/$Jamie6913/50"
            target="_blank"
            className="block text-center bg-green-500 text-black font-bold py-4 rounded-xl text-lg hover:scale-105 transition"
          >
            Pay $50 Deposit
          </a>

          {/* STEP FLOW */}
          <p className="text-center text-green-400 font-semibold">
            Step 1: Pay deposit → Step 2: Submit your build details below
          </p>

          {/* TRUST */}
          <ul className="text-sm text-gray-400 space-y-2">
            <li>✔ Deposit secures your spot</li>
            <li>✔ You approve design before final build</li>
            <li>✔ Built exactly to your specs</li>
          </ul>

          {/* FORM */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* EMAIL */}
              <input
                type="email"
                required
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded bg-black border border-gray-700"
              />

              {/* SIZE */}
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full p-3 rounded bg-black border border-gray-700"
              >
                <option value="small">Small (~$150)</option>
                <option value="medium">Medium (~$400)</option>
                <option value="large">Large (~$900)</option>
              </select>

              {/* PRICE */}
              <div className="text-lg font-bold text-green-400">
                Estimated Price: {priceMap[size]}
              </div>

              {/* MESSAGE */}
              <textarea
                required
                placeholder="Describe your custom mirror (be specific)"
                className="w-full p-4 rounded bg-black border border-gray-700"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              {/* UPLOAD */}
              <label className="block border-2 border-dashed border-green-500 p-6 text-center rounded-xl cursor-pointer hover:bg-green-500/10 transition">
                <span className="block text-lg font-bold text-green-400 mb-2">
                  Upload Your Design (REQUIRED)
                </span>
                <span className="text-sm text-gray-400">
                  This is what we build from — don’t skip this
                </span>

                <input
                  type="file"
                  required
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="hidden"
                />
              </label>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full bg-white text-black py-4 rounded-xl font-bold hover:scale-105 transition"
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

      {/* FOOTER */}
      <section className="text-center mt-12 text-sm text-gray-500">
        Only a limited number of builds are accepted each week to maintain quality.
      </section>

    </main>
  );
}