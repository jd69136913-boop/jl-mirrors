"use client";

import { useState } from "react";

export default function Home() {
  const [preview, setPreview] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setPreview(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center">

      {/* HERO */}
      <div className="w-full flex justify-center pt-10">
        <img
          src="/images/mirror.jpg"
          className="w-[90%] max-w-[500px] rounded-xl border border-green-500 shadow-lg shadow-green-500/20"
        />
      </div>

      {/* HEADER */}
      <section className="text-center mt-6 px-6">
        <h1 className="text-4xl font-bold">
          Custom LED Infinity Mirrors
        </h1>
        <p className="text-gray-400 mt-2">
          Hand-built. One-of-a-kind. Designed to stand out.
        </p>

        <div className="mt-3 inline-block bg-green-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
          🔥 Limited Build Slots Available This Week
        </div>
      </section>

      {/* GALLERY */}
      <section className="mt-10 w-full max-w-5xl px-6">
        <h2 className="text-center text-xl mb-6">Recent Builds</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          <img src="/images/mirror.jpg" className="rounded-lg w-full max-w-[250px]" />
          <img src="/images/mirror1.jpg" className="rounded-lg w-full max-w-[250px]" />
          <img src="/images/mirror2.jpg" className="rounded-lg w-full max-w-[250px]" />
          <img src="/images/mirror3.jpg" className="rounded-lg w-full max-w-[250px]" />
        </div>
      </section>

      {/* PREVIEW */}
      <section className="mt-14 flex flex-col items-center px-6 text-center">

        <h2 className="text-xl mb-3">Preview Your Design</h2>

        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="mb-4"
        />

        <div className="w-[320px] h-[320px] bg-black border-2 border-green-500 rounded-xl flex items-center justify-center">

          {!preview && (
            <span className="text-gray-500 text-sm">
              Upload to preview your mirror
            </span>
          )}

          {preview && (
            <div className="relative w-full h-full flex items-center justify-center">

              {/* DEPTH FRAMES */}
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute border border-green-400"
                  style={{
                    width: `${100 - i * 8}%`,
                    height: `${100 - i * 8}%`,
                    boxShadow: `0 0 ${6 + i * 5}px rgba(0,255,120,${0.7 - i * 0.05})`,
                    opacity: 1 - i * 0.08,
                  }}
                />
              ))}

              {/* IMAGE */}
              <img
                src={preview}
                className="absolute w-[60%] h-[60%] object-contain z-10"
              />

            </div>
          )}

        </div>

      </section>

      {/* CTA */}
      <div className="mt-12 mb-20">
        <button className="bg-green-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-green-400 transition">
          Start Your Custom Build
        </button>
      </div>

    </main>
  );
}