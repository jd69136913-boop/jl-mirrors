"use client";

import { useState } from "react";

export default function Home() {
  const [size, setSize] = useState("Medium");
  const [color, setColor] = useState("White");
  const [logo, setLogo] = useState(false);
  const [premium, setPremium] = useState(false);

  const basePrices: any = {
    Small: 149,
    Medium: 249,
    Large: 399,
  };

  const addOns = {
    RGB: 50,
    logo: 75,
    premium: 75,
  };

  const calculatePrice = () => {
    let total = basePrices[size];
    if (color === "RGB") total += addOns.RGB;
    if (logo) total += addOns.logo;
    if (premium) total += addOns.premium;
    return total;
  };

  return (
    <main className="bg-black text-white min-h-screen font-sans pb-24">

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Custom Infinity Mirrors Built to Dominate Your Space
        </h1>

        <p className="text-lg text-gray-300 mb-6">
          Hand-built in Arizona. Fully customizable. No two are the same.
        </p>

        <button
          onClick={() => document.getElementById("custom")?.scrollIntoView()}
          className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition"
        >
          Start Your Custom Design
        </button>
      </section>

      {/* 🔥 FINAL IMAGE GRID */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4 px-6">

        {/* HERO IMAGE (BEST IMAGE) */}
        <div className="col-span-2">
          <img
            src="/images/mirror.jpg"
            className="rounded-xl w-full max-h-[420px] object-contain bg-black transition duration-300 hover:scale-105 shadow-[0_0_40px_rgba(0,255,100,0.35)] hover:shadow-[0_0_70px_rgba(0,255,100,0.7)]"
          />
          <p className="text-xs text-gray-400 mt-1">
            Custom branded infinity mirror (Highland build)
          </p>
        </div>

        {/* TOP RIGHT */}
        <div>
          <img
            src="/images/mirror1.jpg"
            className="rounded-xl w-full h-[200px] object-cover transition hover:scale-105 shadow-[0_0_20px_rgba(0,255,255,0.25)]"
          />
          <p className="text-xs text-gray-400 mt-1">Deep infinity effect</p>
        </div>

        {/* ROW 2 */}
        <div>
          <img
            src="/images/mirror2.jpg"
            className="rounded-xl w-full h-[200px] object-cover transition hover:scale-105 shadow-[0_0_20px_rgba(255,0,255,0.25)]"
          />
          <p className="text-xs text-gray-400 mt-1">RGB lighting styles</p>
        </div>

        <div>
          <img
            src="/images/mirror3.jpg"
            className="rounded-xl w-full h-[200px] object-cover transition hover:scale-105 shadow-[0_0_20px_rgba(0,200,255,0.25)]"
          />
          <p className="text-xs text-gray-400 mt-1">Custom logo work</p>
        </div>

        <div>
          <img
            src="/images/mirror5.jpg"
            className="rounded-xl w-full h-[200px] object-cover transition hover:scale-105 shadow-[0_0_25px_rgba(255,0,0,0.35)]"
          />
          <p className="text-xs text-gray-400 mt-1">High depth infinity effect</p>
        </div>

        <div>
          <img
            src="/images/mirror6.jpg"
            className="rounded-xl w-full h-[200px] object-cover transition hover:scale-105 shadow-[0_0_20px_rgba(0,150,255,0.25)]"
          />
          <p className="text-xs text-gray-400 mt-1">Precision engraving detail</p>
        </div>

      </section>

      {/* USE CASE */}
      <section className="text-center py-12 px-6">
        <h2 className="text-2xl font-bold mb-4">Perfect For:</h2>
        <div className="text-gray-300 space-y-2">
          <p>✔ Garages & Man Caves</p>
          <p>✔ Automotive Shops</p>
          <p>✔ Business Displays</p>
          <p>✔ High-End Custom Gifts</p>
        </div>
      </section>

      {/* VALUE */}
      <section className="text-center py-12 px-6">
        <h2 className="text-3xl font-bold mb-6">Why These Sell Fast</h2>
        <div className="space-y-2 text-gray-300">
          <p>✔ Hand-built craftsmanship</p>
          <p>✔ Fully customizable</p>
          <p>✔ Built in Arizona</p>
          <p>✔ One-of-a-kind statement pieces</p>
        </div>
      </section>

      {/* PRICING */}
      <section className="text-center py-12 px-6">
        <h2 className="text-4xl font-extrabold text-green-400 drop-shadow-lg">
          Starting at $149
        </h2>

        <p className="text-gray-400 text-sm mt-2">
          Comparable builds sell for $400–$800+
        </p>

        <p className="text-red-400 font-bold mt-2">
          Only 5 Build Slots Available (2 Already Taken)
        </p>
      </section>

      {/* BUILDER (CENTERED) */}
      <section id="custom" className="py-16 px-6 flex justify-center">
        <div className="w-full max-w-md">

          <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700 space-y-4">

            <h2 className="text-2xl font-bold text-center">
              Customize Your Mirror
            </h2>

            {/* SIZE */}
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full p-3 rounded text-black"
            >
              <option value="Small">Small - $149 (Entry)</option>
              <option value="Medium">Medium - $249 (Most Popular)</option>
              <option value="Large">Large - $399 (Premium)</option>
            </select>

            {/* COLOR */}
            <select
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full p-3 rounded text-black"
            >
              <option value="White">White (Included)</option>
              <option value="RGB">RGB +$50</option>
              <option value="Blue">Blue (Included)</option>
              <option value="Red">Red (Included)</option>
            </select>

            {/* UPSELLS */}
            <div className="space-y-2 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={logo} onChange={() => setLogo(!logo)} />
                Custom Logo Engraving (+$75)
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" checked={premium} onChange={() => setPremium(!premium)} />
                Premium Depth + Lighting (+$75)
              </label>
            </div>

            {/* FILE */}
            <input type="file" className="w-full p-3 bg-white text-black rounded" />

            {/* PRICE */}
            <div className="text-center text-4xl font-extrabold text-green-400">
              ${calculatePrice()}
            </div>

            {/* PRIMARY CTA */}
            <a
              href="https://cash.app/$Jamie6913"
              target="_blank"
              className="block text-center bg-green-500 py-5 rounded-xl font-bold text-xl hover:scale-105 transition shadow-[0_0_25px_rgba(34,197,94,0.6)]"
            >
              Reserve Your Custom Build Slot ($25 Deposit)
            </a>

            <p className="text-center text-gray-400 text-xs">
              Every mirror is built by hand — no mass production.
            </p>

            {/* SECONDARY FORM */}
            <form
              action="https://formspree.io/f/xqegzdrw"
              method="POST"
              className="space-y-3"
            >
              <input name="name" placeholder="Your Name" className="w-full p-3 rounded text-black" required />
              <input name="email" placeholder="Email" className="w-full p-3 rounded text-black" required />
              <textarea name="details" placeholder="Describe your mirror" className="w-full p-3 rounded text-black" required />

              <button
                type="submit"
                className="w-full bg-gray-700 text-white py-3 rounded font-semibold opacity-80 hover:opacity-100 transition"
              >
                Submit Custom Request
              </button>
            </form>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="text-center py-12 px-6">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <div className="text-gray-300 space-y-2">
          <p>1. Reserve your slot ($25 deposit)</p>
          <p>2. Submit your design</p>
          <p>3. We confirm and build</p>
          <p>4. Final payment + delivery</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Turn Your Space Into a Showpiece
        </h2>

        <a
          href="https://cash.app/$Jamie6913"
          className="bg-white text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition"
        >
          Secure Your Spot Now
        </a>
      </section>

      {/* MOBILE CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-black p-4 border-t border-gray-700 md:hidden">
        <a
          href="https://cash.app/$Jamie6913"
          className="block text-center bg-green-500 py-4 rounded-xl font-bold text-lg"
        >
          Reserve Slot ($25)
        </a>
      </div>

    </main>
  );
}