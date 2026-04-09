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
      <div className="relative w-[320px] h-[320px] bg-black rounded-xl overflow-hidden shadow-[0_0_25px_rgba(0,255,255,0.6)]">

        {preview && (
          <>
            <img src={preview} className="absolute w-full h-full object-cover opacity-100" />

            <img src={preview} className="absolute w-full h-full object-cover scale-[0.85] blur-sm opacity-60" />

            <img src={preview} className="absolute w-full h-full object-cover scale-[0.7] blur-md opacity-40" />

            <img src={preview} className="absolute w-full h-full object-cover scale-[0.55] blur-lg opacity-20" />
          </>
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