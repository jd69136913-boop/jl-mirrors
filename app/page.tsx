"use client";
import { useState } from "react";

export default function Home() {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");

  const handleFile = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-4">

      {/* HERO IMAGE */}
      <img
        src="/images/mirror.jpg"
        alt="mirror"
        className="w-full max-w-md rounded-xl mt-6 mb-4"
      />

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-center">
        Custom LED Infinity Mirrors
      </h1>

      <p className="text-gray-400 text-center mb-2">
        Hand-built. One-of-a-kind. Designed to stand out.
      </p>

      <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm mb-4">
        🔥 Limited Build Slots Available
      </div>

      {/* FORM */}
      <div className="w-full max-w-md bg-neutral-900 p-4 rounded-xl border border-green-500/30">

        <h2 className="text-lg font-semibold text-center mb-2">
          Start Your Custom Build
        </h2>

        <div className="bg-green-500 text-black text-center py-2 rounded mb-3 font-semibold">
          Pay $50 Deposit
        </div>

        <input
          placeholder="you@example.com"
          className="w-full mb-2 p-2 bg-black border border-gray-700 rounded"
        />

        <select className="w-full mb-2 p-2 bg-black border border-gray-700 rounded">
          <option>Medium (~$400)</option>
          <option>Small (~$250)</option>
          <option>Large (~$700+)</option>
        </select>

        <textarea
          placeholder="Describe your custom mirror"
          className="w-full mb-3 p-2 bg-black border border-gray-700 rounded"
        />

        {/* COLOR PICKER */}
        <div className="text-center mb-3">
          <p className="mb-1">Choose LED Color</p>
          <input type="color" defaultValue="#22c55e" />
        </div>

        {/* FILE UPLOAD */}
        <div className="border border-green-500 border-dashed p-3 rounded mb-3 text-center">
          <p className="text-green-400 font-semibold">Upload Your Design</p>

          <input type="file" onChange={handleFile} className="mt-2" />

          {fileName && (
            <p className="text-green-400 text-sm mt-1">
              ✅ {fileName}
            </p>
          )}
        </div>

        {/* 🔥 REAL INFINITY PREVIEW */}
        <div className="mb-4">
          <p className="text-center text-sm text-gray-400 mb-1">
            Live Mirror Preview
          </p>

          <div className="relative w-[300px] h-[300px] mx-auto bg-black rounded-xl overflow-hidden">

            {/* DEPTH LAYERS */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute border rounded-lg"
                style={{
                  width: `${100 - i * 10}%`,
                  height: `${100 - i * 10}%`,
                  borderColor: `rgba(0,255,150,${0.15 - i * 0.015})`,
                  boxShadow: `0 0 ${10 + i * 4}px rgba(0,255,150,${0.2 - i * 0.02})`,
                }}
              />
            ))}

            {/* GLOW GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-b from-green-400/10 via-transparent to-black opacity-60" />

            {/* IMAGE */}
            {preview && (
              <img
                src={preview}
                alt="preview"
                className="relative z-10 max-w-[70%] max-h-[70%] object-contain opacity-95"
              />
            )}

            {/* DEPTH DARKEN */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />

          </div>
        </div>

        {/* CTA */}
        <button className="w-full bg-green-500 text-black py-2 rounded font-semibold">
          Submit Build Request
        </button>
      </div>

      {/* RECENT BUILDS */}
      <div className="mt-6 w-full max-w-4xl">
        <h3 className="text-center text-xl mb-3">Recent Builds</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <img src="/images/mirror1.jpg" className="rounded-xl" />
          <img src="/images/mirror2.jpg" className="rounded-xl" />
          <img src="/images/mirror3.jpg" className="rounded-xl" />
        </div>
      </div>

      <div className="h-10" />
    </main>
  );
}