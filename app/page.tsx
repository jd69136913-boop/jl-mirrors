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

      {/* PREVIEW SECTION */}
      <div className="mt-6 flex flex-col items-center">

        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="mb-6 text-white"
        />

        {/* PREVIEW BOX */}
        <div className="w-[320px] h-[320px] bg-black border-2 border-green-500 rounded-xl flex items-center justify-center perspective-[800px]">

          {!preview && (
            <span className="text-gray-500 text-sm">
              Preview will appear here
            </span>
          )}

          {preview && (
            <div className="relative w-full h-full flex items-center justify-center">

              {/* INFINITY FRAMES */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute border border-green-400 animate-pulse"
                  style={{
                    width: `${100 - i * 7}%`,
                    height: `${100 - i * 7}%`,
                    boxShadow: `0 0 ${8 + i * 6}px rgba(0,255,120,${0.8 - i * 0.06})`,
                    opacity: 1 - i * 0.07,
                  }}
                />
              ))}

              {/* CENTER IMAGE */}
              <img
                src={preview}
                className="absolute w-[60%] h-[60%] object-contain z-10"
              />

            </div>
          )}

        </div>

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