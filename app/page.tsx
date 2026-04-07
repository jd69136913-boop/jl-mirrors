"use client";

import { useState } from "react";

export default function Home() {
  const [fileName, setFileName] = useState("");
  const [preview, setPreview] = useState<string | null>(null);

  function handleFileChange(e: any) {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setPreview(URL.createObjectURL(file));
    }
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Custom LED Infinity Mirrors
        </h1>

        <p className="text-gray-300 mb-2">
          Hand-built. One-of-a-kind. Designed to stand out.
        </p>

        <p className="text-green-400 font-semibold mb-4">
          🔥 Starting at $150 — Built from your idea
        </p>

        <p className="text-sm text-gray-400">
          ✔ Built by hand • ✔ Preview before payment • ✔ No commitment
        </p>
      </section>

      {/* HERO IMAGE */}
      <section className="max-w-5xl mx-auto mb-16">
        <img
          src="/images/mirror1.jpg"
          className="rounded-xl w-full shadow-[0_0_40px_rgba(34,197,94,0.4)]"
        />
      </section>

      {/* FORM */}
      <section className="max-w-xl mx-auto bg-gray-900 p-6 rounded-xl border border-gray-700 shadow-[0_0_25px_rgba(34,197,94,0.25)]">

        <h2 className="text-2xl font-semibold mb-4 text-center">
          Start Your Custom Build
        </h2>

        {/* LED COLOR */}
        <label className="block mb-3 text-sm">Choose LED Color</label>
        <input
          type="color"
          className="w-full h-12 mb-6 rounded"
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email (required for preview)"
          className="w-full mb-4 p-3 bg-gray-800 border border-gray-600 rounded focus:border-green-400 outline-none"
        />

        {/* PHONE */}
        <input
          type="text"
          placeholder="Phone number (optional for faster reply)"
          className="w-full mb-4 p-3 bg-gray-800 border border-gray-600 rounded focus:border-green-400 outline-none"
        />

        {/* DESCRIPTION */}
        <textarea
          placeholder="Describe your custom mirror..."
          className="w-full mb-4 p-3 bg-gray-800 border border-gray-600 rounded focus:border-green-400 outline-none"
        />

        {/* FILE UPLOAD */}
        <div className="mb-4">
          <label className="block mb-2 text-sm">
            Upload Your Design
          </label>

          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded"
          />

          {/* FILE CONFIRMATION */}
          {fileName && (
            <p className="text-green-400 mt-2 text-sm">
              ✔ {fileName} uploaded
            </p>
          )}
        </div>

        {/* IMAGE PREVIEW */}
        {preview && (
          <div className="mb-4">
            <p className="text-sm text-gray-400 mb-2">Preview:</p>
            <img
              src={preview}
              className="rounded-lg max-h-48"
            />
          </div>
        )}

        {/* PRIMARY CTA */}
        <button className="w-full py-4 rounded-lg font-semibold text-black bg-gradient-to-r from-green-400 to-emerald-600 mb-3 hover:scale-[1.02] transition">
          🔥 Get My Preview
        </button>

        {/* SECONDARY CTA */}
        <button className="w-full py-3 rounded-lg border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition">
          Pay $50 Deposit (after preview)
        </button>

        {/* TRUST TEXT */}
        <p className="text-xs text-gray-400 text-center mt-4">
          ✔ Applied to final price • ✔ No build until approval
        </p>
      </section>

      {/* GALLERY */}
      <section className="max-w-5xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-3 gap-4">
        <img src="/images/mirror2.jpg" className="rounded-lg" />
        <img src="/images/mirror3.jpg" className="rounded-lg" />
        <img src="/images/mirror4.jpg" className="rounded-lg" />
      </section>

    </main>
  );
}