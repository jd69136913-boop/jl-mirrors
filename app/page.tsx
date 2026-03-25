'use client'

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("YOUR NAME");

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">
        J&L Custom Infinity Mirrors
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Preview */}
        <div className="border p-6 text-center">
          <div className="border-4 border-purple-500 p-6">
            <p className="text-sm tracking-widest mb-4">
              {name} {name} {name}
            </p>

            <div className="h-40 flex items-center justify-center text-gray-500">
              LOGO AREA
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-4">

          <form
  action="https://formspree.io/f/xqegzdrw"
  method="POST"
  className="space-y-3"
  >
            <input
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-2 bg-black border border-gray-700"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-2 bg-black border border-gray-700"
            />

            <textarea
              name="details"
              placeholder="Describe your mirror..."
              className="w-full p-2 bg-black border border-gray-700"
            />

            <button className="w-full bg-purple-600 p-3">
              Get Custom Quote
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}