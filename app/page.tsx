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

      {/* HEADER */}
      <section className="text-center py-12 px-6">
        <h1 className="text-4xl font-bold mb-4">
          Custom Infinity Mirrors
        </h1>
        <p className="text-gray-400">
          Upload your image. Watch it gain depth.
        </p>
      </section>

      {/* UPLOAD */}
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="mb-6"
      />

      {/* PREVIEW */}
      <div className="relative w-[320px] h-[320px] bg-black rounded-xl overflow-hidden flex items-center justify-center">

  {preview && (
    <div className="relative w-full h-full flex items-center justify-center">

      {/* Frame layers */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute border border-green-400"
          style={{
            width: `${100 - i * 10}%`,
            height: `${100 - i * 10}%`,
            boxShadow: `0 0 ${10 + i * 5}px rgba(0,255,100,0.6)`,
            opacity: 1 - i * 0.1,
          }}
        />
      ))}

      {/* Center image */}
      <img
        src={preview}
        className="absolute w-[60%] h-[60%] object-contain z-10"
      />

    </div>
  )}

</div>

      {/* GALLERY */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6 max-w-4xl">
        <img src="/images/mirror.jpg" className="w-full rounded-lg" />
        <img src="/images/mirror1.jpg" className="w-full rounded-lg" />
        <img src="/images/mirror2.jpg" className="w-full rounded-lg" />
        <img src="/images/mirror3.jpg" className="w-full rounded-lg" />
      </section>

    </main>
  );
}